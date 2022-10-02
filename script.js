function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}
Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};
let sorular = [
  new Soru(
    "Soru-1:Betonda kullanılan agregalar ile beton içerisindeki oksitli maddelerin tepkimesi sonucu tuz oluşturarak betonun yapısına zarar vermesi olayına ne denir?",
    {
      a: "Sülfat Etkisi",
      b: "Korozyon",
      c: "ASR (Alkali Silika Reaksiyon)",
      d: "Donma-Çözünme Etkisi",
    },
    "c"
  ),
  new Soru(
    "Soru-2:Taahhüt ettiği işi (projeyi) üstlenen ve yapacağının sözünü yasal olarak veren kişi, kurum ve kuruluşlara ne ad verilir ?",
    { a: "Formen", b: "İnaat Mühendisi", c: "Müteahhit", d: "Şantiye Şefi" },
    "c"
  ),
  new Soru(
    "Soru-3:Çimentonun su ile reaksiyonu sonucu açığa çıkan ısı miktarıdır.?",
    {
      a: "Alkali Agrega Reaksiyonu Isısı",
      b: "Hidratasyon Isısı",
      c: "Asit-Baz Reaksiyonu Isısı",
      d: "Rötre Isısı",
    },
    "b"
  ),
  new Soru(
    "Soru-4:Taze betonun, ayrışmaya uğramadan, taşınması, dökülmesi, yerleştirilmesi, sıkıştırılması ve sonlanması işlemlerinin kolaylıkla yapılabilmesi özelliğidir?",
    { a: "İşlenebilirlik", b: "Terleme", c: "Kıvam", d: "Ergonomi" },
    "a"
  ),
];

function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}

Quiz.prototype.sorugetir = function () {
  return this.sorular[this.soruIndex];
};

const quiz = new Quiz(sorular);
const quizStart = document.querySelector("#quiz-start");
const soruCard = document.querySelector(".container");
const nextQuestion = document.querySelector(".next-button");
const opt_list = document.querySelector(".card-body2")


quizStart.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    quizStart.style.display = "none";
    soruCard.style.display = "block";
    soruGoster(quiz.sorugetir());
    quiz.soruIndex += 1;
    let qnum = `${quiz.soruIndex}/${quiz.sorular.length}`
    document.querySelector(".qnum").innerHTML= qnum;
  }
});

nextQuestion.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    quizStart.style.display = "none";
    soruGoster(quiz.sorugetir());
    quiz.soruIndex += 1;
    let qnum = `${quiz.soruIndex}/${quiz.sorular.length}`
    document.querySelector(".qnum").innerHTML= qnum;
    console.log(qnum)
  } else {
    let quizIsFinish = `<h4 class="card-title">Quiz finished</h4>`;
    document.querySelector(".card-body").innerHTML = quizIsFinish;
    document.querySelector(".card-body2").innerHTML ='';
    document.querySelector(".card-footer").style.display="none";

  }
});

function soruGoster(soru) {
  let question = `<h5 class="card-title">${soru.soruMetni}</h5>`;
  let options = '';
 

   for (let cevap in soru.cevapSecenekleri) {
     options += `<div class="d-grid gap-2 list-group">
     <button class="list-group-item list-group-item-action rounded opti" type="button">
     <b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</button><div/>`;
   }
  document.querySelector(".card-body").innerHTML = question;
  opt_list.innerHTML = options;
  const opt_true = opt_list.querySelectorAll('.opti')
  for (let rr of opt_true){
    rr.setAttribute("onclick","optionSelected(this)")
  }
};
function optionSelected(trueValue){
  let cvp = trueValue.querySelector("button b").textContent;
  let soru=quiz.sorugetir();
   if(soru.cevabiKontrolEt(cvp)){
    trueValue.classList.add('list-group-item-success')
    }else{
      trueValue.classList.add('list-group-item-danger')

    }
    for(let i=0; i < opt_list.children.length; i++){
      opt_list.children[i].disabled = true;
      console.log(opt_list.children.length)
    }
};
