function UI () {
    this.quizStart = document.querySelector("#quiz-start"),
    this.nextQuestion = document.querySelector(".next-button"),
    this.soruCard = document.querySelector(".container"),
    this.opt_list = document.querySelector(".card-body2"),
    this.correctIcon = '<i class="bi bi-check2"></i>',
    this.incorrectIcon = '<i class="bi bi-bookmark-x"></i>'
};
  

UI.prototype.soruGoster = function (soru) {
    let question = `<h5 class="card-title">${soru.soruMetni}</h5>`;
    let options = '';
  

    for (let cevap in soru.cevapSecenekleri) {
      options += `
      <div class="d-grid gap-2 list-group">
          <button class="list-group-item list-group-item-action rounded opti" type="button"><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</button>
      </div>
      `};

    document.querySelector(".card-body").innerHTML = question;
    this.opt_list.innerHTML = options;
    const opt_true = this.opt_list.querySelectorAll('.opti')
    for (let rr of opt_true){
      rr.setAttribute("onclick"," optionSelected(this)")
    }
};
