const quiz = new Quiz(sorular);
const ui = new UI();

ui.quizStart.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    ui.quizStart.style.display = "none";
    ui.soruCard.style.display = "block";
    ui.soruGoster(quiz.sorugetir());
    let qnum = `${quiz.soruIndex +1}/${quiz.sorular.length}`
    document.querySelector(".qnum").innerHTML= qnum;
  }
});

ui.nextQuestion.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex +1) {
    ui.quizStart.style.display = "none";
    quiz.soruIndex += 1;
    ui.soruGoster(quiz.sorugetir());
    let qnum = `${quiz.soruIndex +1}/${quiz.sorular.length}`
    document.querySelector(".qnum").innerHTML= qnum;
  } else {
    let quizIsFinish = `<div><h4 class="card-title">Quiz finished</h4><div>Doğru Cevap Sayısı : ${quiz.dogruCevapSayisi}</div></div>`;
    document.querySelector(".card-body").innerHTML = quizIsFinish;
    document.querySelector(".card-body2").innerHTML ='';
    document.querySelector(".card-footer").style.display="none";
  }
});


function optionSelected(trueValue){
  let cvp = trueValue.querySelector("button b").textContent;
  console.log(cvp);

  let soru=quiz.sorugetir();
   if(soru.cevabiKontrolEt(cvp)){
    quiz.dogruCevapSayisi += 1;
    console.log(quiz.dogruCevapSayisi)
    trueValue.classList.add('list-group-item-success');
    trueValue.insertAdjacentHTML("beforeend",ui.correctIcon)

    }else{
      trueValue.classList.add('list-group-item-danger')
    trueValue.insertAdjacentHTML("beforeend",ui.incorrectIcon)


    }

    for(let i=0; i<ui.opt_list.children.length; i++){
      ui.opt_list.children[i].classList.add('pe-none');
    };
};