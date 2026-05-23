const cardsData = [
  {
    id: 1,
    title: "Autotune che non funziona",
    sfortuna: 5,
  image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 2,
    title: "Corda della chitarra spezzata",
    sfortuna: 8,
   image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 3,
    title: "Parti fuori tempo",
    sfortuna: 10,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 4,
    title: "Dimentichi il testo",
    sfortuna: 12,
   image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 5,
    title: "Il pubblico non applaude",
    sfortuna: 14,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 6,
    title: "Autotune rotto",
    sfortuna: 16,
  image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 7,
    title: "Batterista troppo veloce",
    sfortuna: 18,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" },
  },
  {
    id: 8,
    title: "Amplificatore spento",
    sfortuna: 20,
  image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 9,
    title: "Fischi dal pubblico",
    sfortuna: 22,
image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 10,
    title: "Microfono che fischia",
    sfortuna: 24,
image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 11,
    title: "Cadi dal palco",
    sfortuna: 26,
image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 12,
    title: "Ti si abbassano i pantaloni sul palco",
    sfortuna: 28,
  image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 13,
    title: "Pubblico canta meglio di te",
    sfortuna: 30,
image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 14,
    title: "Inciampi nei cavi",
    sfortuna: 32,
   image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" },
  },
  {
    id: 15,
    title: "Il DJ mette la base sbagliata",
    sfortuna: 34,
 image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 16,
    title: "Ti cade il microfono in faccia",
    sfortuna: 36,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 17,
    title: "Nessuno conosce la tua canzone",
    sfortuna: 38,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 18,
    title: "La tastiera non funziona",
    sfortuna: 40,
image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 19,
    title: "Il pubblico lancia bottiglie",
    sfortuna: 42,
image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 20,
    title: "Esplode una cassa audio",
    sfortuna: 44,
image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 21,
    title: "Il palco crolla",
    sfortuna: 46,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 22,
    title: "Ti dimentichi come si canta",
    sfortuna: 48,
image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 23,
    title: "Il pubblico se ne va",
    sfortuna: 50,
image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 24,
    title: "Ti cade la chitarra",
    sfortuna: 52,
image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 25,
    title: "Sbagli completamente assolo",
    sfortuna: 54,
  image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 26,
    title: "Il cantante entra troppo presto",
    sfortuna: 56,
image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 27,
    title: "La batteria perde ritmo",
    sfortuna: 58,
  image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 28,
    title: "Il mixer si spegne",
    sfortuna: 60,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 29,
    title: "Vomiti sul palco",
    sfortuna: 62,
   image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 30,
    title: "Rompi la chitarra accidentalmente",
    sfortuna: 64,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 31,
    title: "Ti stacchi corrente durante live",
    sfortuna: 66,
 image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 32,
    title: "Il pubblico ride di te",
    sfortuna: 68,
   
 image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }

  },
  {
    id: 33,
    title: "Canti stonatissimo",
    sfortuna: 70,
 image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }

  },
  {
    id: 34,
    title: "Luci del palco spente",
    sfortuna: 72,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 35,
    title: "Il tuo in-ear smette di funzionare",
    sfortuna: 74,
   image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 36,
    title: "Il pubblico ti insulta",
    sfortuna: 76,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 37,
    title: "Perdi la voce sul palco",
    sfortuna: 78,
   image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 38,
    title: "La security ti butta giù dal palco",
    sfortuna: 80,
   image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 39,
    title: "Nessuno si presenta al concerto",
    sfortuna: 82,
  image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 40,
    title: "Il locale prende fuoco",
    sfortuna: 84,
 image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 41,
    title: "La tua voce cracka davanti a tutti",
    sfortuna: 86,
  image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 42,
    title: "Distruggi accidentalmente il mixer",
    sfortuna: 88,
  image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 43,
    title: "Il palco esplode con i fuochi d'artificio",
    sfortuna: 90,
     image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 44,
    title: "Ti rompi una gamba durante il live",
    sfortuna: 92,
 image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 45,
    title: "Ti tirano un telefono in faccia",
    sfortuna: 94,
     image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 46,
    title: "Tutti registrano il tuo fallimento",
    sfortuna: 95,
     image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 47,
    title: "Diventi meme mondiale",
    sfortuna: 96,
   image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 48,
    title: "Cadi dal palco in diretta mondiale",
    sfortuna: 97,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 49,
    title: "Prendi scossa dal microfono",
    sfortuna: 98,
 image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  },
  {
    id: 50,
    title: "Ti licenziano dalla band dopo il concerto",
    sfortuna: 100,
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png" }
  }
];

export default cardsData;
