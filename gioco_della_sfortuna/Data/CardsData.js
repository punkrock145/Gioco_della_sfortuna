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
  title: "Ti cade la chitarra dal palco",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 56
},

{
  id: 27,
  title: "La folla ti lancia scarpe",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 58
},

{
  id: 28,
  title: "L’amplificatore prende fuoco",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 60
},

{
  id: 29,
  title: "Il microfono fa un fischio fortissimo",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 62
},

{
  id: 30,
  title: "Dimentichi il nome della tua band",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 64
},

{
  id: 31,
  title: "Il pubblico urla 'scendi dal palco",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 66
},

{
  id: 32,
  title: "Il pubblico apre Spotify durante il tuo concerto",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 68
},

{
  id: 33,
  title: "La tua chitarra fa il suono di una sveglia",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 70
},

{
  id: 34,
  title: "Il palco gira e inizi a cadere mentre canti",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 72
},

{
  id: 35,
  title: "Il DJ spegne tutto per errore",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 74
},

{
  id: 36,
  title: "Ti si piega in due il jack della chitarra",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 76
},

{
  id: 37,
  title: "Il pubblico resta in silenzio totale",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 78
},

{
  id: 38,
  title: "Il palco crolla ",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 80
},

{
  id: 39,
  title: "Vomiti sul palco live",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 82
},
{
  id: 40,
  title: "Il tuo playback fa partire Peppa Pig live",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 84
},

{
  id: 41,
  title: "dici cose a caso perche hai fumato marijuana",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 86
},

{
  id: 42,
  title: "La tua voce diventa acutissima davanti a tutti",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 88
},

{
  id: 43,
  title: "Il pubblico lascia il concerto per andare al bar",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 90
},

{
  id: 44,
  title: "Ti rompi un dente col microfono",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 92
},

{
  id: 45,
  title: "La sicurezza ti scambia per un fan",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 94
},

{
  id: 46,
  title: "Si spegne tutta la corrente",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 96
},

{
  id: 47,
  title: "Il pubblico ti fischia per tutto il live",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 98
},

{
  id: 48,
  title: "La tua chitarra prende fuoco",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 100
},

{
  id: 49,
  title: "ti rompi la testa davanti a tutti",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 100
},

{
  id: 50,
  title: "i membri della  band ti picchiano",
  image: {
    uri: "https://upload.wikimedia.org/wikipedia/commons/2/29/Machine_Gun_Kelly_Charity_Softball_%2853117851335%29crop.png"
  },
  sfortuna: 100
},
];

export default cardsData;
