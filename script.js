const quiz = new Quiz(sorular);
const ui = new UI();


ui.quizStart.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    let qnum = `${quiz.soruIndex +1}/${quiz.sorular.length}`
    startTimer(10);
    startTimerLine();
    ui.quizStart.style.display = "none";
    ui.soruCard.style.display = "block";
    ui.soruGoster(quiz.sorugetir());
    document.querySelector(".qnum").innerHTML= qnum;
  }
});

ui.nextQuestion.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex +1) {
    ui.quizStart.style.display = "none";
    quiz.soruIndex += 1;
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.sorugetir());
    let qnum = `${quiz.soruIndex +1}/${quiz.sorular.length}`
    document.querySelector(".qnum").innerHTML= qnum;

  } else {
    document.querySelector(".timeline").style.display='none'
    let quizIsFinish = `
    <div>
      <h4 class="card-title">Quiz finished</h4>
      <div>Doğru Cevap Sayısı : ${quiz.dogruCevapSayisi}</div>
      <div class="hstack gap-2">
        <button type="button" class="btn btn-primary mt-2 btn-reply">Reply</button>
      </div>

    </div>
    `;
    document.querySelector(".card-body").innerHTML = quizIsFinish;
    document.querySelector(".card-body2").innerHTML ='';
    document.querySelector(".card-footer").style.display="none";
    const btn_reply = document.querySelector(".btn-reply");

    btn_reply.addEventListener("click", function() {
      window.location.reload();
    });
  }
});

function optionSelected(trueValue){
  let cvp = trueValue.querySelector("button b").textContent;
  clearInterval(counter);

  let soru=quiz.sorugetir();
   if(soru.cevabiKontrolEt(cvp)){
    quiz.dogruCevapSayisi += 1;
    

    trueValue.classList.add('list-group-item-success');
    trueValue.insertAdjacentHTML("beforeend",ui.correctIcon)
    clearInterval(counterLine);

    }else{
      trueValue.classList.add('list-group-item-danger')
    trueValue.insertAdjacentHTML("beforeend",ui.incorrectIcon)
    clearInterval(counterLine);
    }

    for(let i=0; i<ui.opt_list.children.length; i++){
      ui.opt_list.children[i].classList.add('pe-none');
      
    };
};

let counter;
function startTimer(time){
  counter=setInterval(timer,1000)
    function timer(){
      time -= 1;
      const time1 = document.querySelector(".time");
      const cAnswer = quiz.sorular[quiz.soruIndex].dogruCevap
      time1.innerHTML = time
        if(time<1){
          clearInterval(counter);
          for(let i=0; i<ui.opt_list.children.length; i++){
            ui.opt_list.children[i].classList.add('pe-none');
          };
          const timeout = document.querySelector(".timeout")
          // timeout.textContent = "Time Out"
          for(option of ui.opt_list.children){
            if(option.querySelector("button b").textContent==cAnswer){
              console.log(option)
              option.querySelector("button").classList.add('list-group-item-success');
              option.querySelector("button").insertAdjacentHTML("beforeend",ui.correctIcon)
            }
          }

        }
    }
};
let counterLine;
function startTimerLine(){
  let line_width = 0;
  counterLine=setInterval(timer, 20);

  function timer(){
    line_width+=1
    document.querySelector(".timeline").style.width=line_width + "px";
    if(line_width>=476){
      clearInterval(counterLine);

    };


  };


}