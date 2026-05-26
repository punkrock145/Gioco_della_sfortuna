import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Timer from "../components/timer";

import datiCarte from "../Data/CardsData";

export default function GameScreen({ vaiEndScreen }) {
  const [tempo, setTempo] = useState(30);

  const [messaggio, setMessaggio] = useState("");

  const [errori, setErrori] = useState(0);

  const [partitaFinita, setPartitaFinita] = useState(false);

  const [cartaRound, setCartaRound] = useState(null);

  const [carteGiocatore, setCarteGiocatore] = useState(() => {
    let mescolate = [...datiCarte];

    mescolate.sort(() => Math.random() - 0.5);

    let iniziali = mescolate.slice(0, 3);

    iniziali.sort((a, b) => a.sfortuna - b.sfortuna);
    return iniziali;
  });

  useEffect(() => {
    generaNuovaCarta();
  }, []);

  function tempoScaduto() {
    vaiEndScreen(false);
  }

  function generaNuovaCarta() {
    let disponibili = datiCarte.filter((carta) => {
      let giaUsata = carteGiocatore.some((c) => c.id === carta.id);
      return !giaUsata;
    });

    if (disponibili.length === 0) {
      vaiEndScreen(true);

      return;
    }

    disponibili.sort(() => Math.random() - 0.5);
    setCartaRound(disponibili[0]);
    setTempo(30);
  }

  function sceltaPosizione(posizioneScelta) {
    if (partitaFinita) return;

    let posizioneCorretta = 0;
    for (let i = 0; i < carteGiocatore.length; i++) {
      if (cartaRound.sfortuna > carteGiocatore[i].sfortuna) {
        posizioneCorretta++;
      }
    }

    if (posizioneScelta === posizioneCorretta) {
      setMessaggio("Hai indovinato!");
      let nuoveCarte = [...carteGiocatore];

      nuoveCarte.splice(posizioneScelta, 0, cartaRound);

      nuoveCarte.sort((a, b) => a.sfortuna - b.sfortuna);

      setCarteGiocatore(nuoveCarte);

      if (nuoveCarte.length === 6) {
        vaiEndScreen(true);
        return;
      }

      generaNuovaCarta();
    } else {
      let nuoviErrori = errori + 1;
      setErrori(nuoviErrori);
      setMessaggio("Hai sbagliato!");

      if (nuoviErrori === 3) {
        vaiEndScreen(false);
        return;
      }

      generaNuovaCarta();
    }
  }

  return (
    <ScrollView style={stili.contenitore}>
      <Timer tempo={tempo} setTempo={setTempo} tempoScaduto={tempoScaduto} />
      <Text style={stili.titolo}> Gioco della Sfortuna </Text>{" "}
      <Text style={stili.messaggio}> {messaggio} </Text>{" "}
      <Text style={stili.errori}>
        {" "}
        Errori: {errori}
        /3
      </Text>
      <Text style={stili.carteTotali}>
        {" "}
        Carte: {carteGiocatore.length}
        /6
      </Text>
      {!partitaFinita && cartaRound && (
        <>
          <Text style={stili.sottotitolo}> Nuova Carta </Text>{" "}
          <View style={stili.cartaRound}>
            <Image source={cartaRound.image} style={stili.immagine} />{" "}
            <Text style={stili.titoloCarta}> {cartaRound.title} </Text>{" "}
          </View>{" "}
        </>
      )}
      <Text style={stili.sottotitolo}> Le Tue Carte </Text>
      {!partitaFinita && (
        <TouchableOpacity
          style={stili.bottonePosizione}
          onPress={() => sceltaPosizione(0)}
        >
          <Text style={stili.testoBottone}> Metti Qui </Text>{" "}
        </TouchableOpacity>
      )}
      {carteGiocatore.map((carta, index) => (
        <View key={carta.id}>
          <View style={stili.carta}>
            <Image source={carta.image} style={stili.immagine} />
            <Text style={stili.titoloCarta}> {carta.title} </Text>
            <Text style={stili.sfortunaCarta}>
              {" "}
              Sfortuna: {carta.sfortuna}{" "}
            </Text>{" "}
          </View>{" "}
          {!partitaFinita && (
            <TouchableOpacity
              style={stili.bottonePosizione}
              onPress={() => sceltaPosizione(index + 1)}
            >
              <Text style={stili.testoBottone}> Metti Qui </Text>{" "}
            </TouchableOpacity>
          )}{" "}
        </View>
      ))}{" "}
    </ScrollView>
  );
}

const stili = StyleSheet.create({
  contenitore: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titolo: {
    color: "orange",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  messaggio: {
    color: "yellow",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  errori: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  carteTotali: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  sottotitolo: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  carta: {
    backgroundColor: "#2c2c2c",
    borderWidth: 2,
    borderColor: "orange",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  cartaRound: {
    backgroundColor: "#3b2a00",
    borderWidth: 3,
    borderColor: "yellow",
    borderRadius: 20,
    padding: 15,
    marginBottom: 30,
    alignItems: "center",
  },
  immagine: {
    width: 250,
    height: 180,
    borderRadius: 20,
    marginBottom: 15,
  },
  titoloCarta: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  sfortunaCarta: {
    color: "orange",
    fontSize: 18,
    fontWeight: "bold",
  },

  bottonePosizione: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
  },

  testoBottone: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
