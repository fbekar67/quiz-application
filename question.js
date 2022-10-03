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
  