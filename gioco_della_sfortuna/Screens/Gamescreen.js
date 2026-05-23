import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import datiCarte from '../Data/CardsData';

export default function SchermoGioco() {

  const [carteGiocatore, setCarteGiocatore] = useState(() => {

    let mescolate = [...datiCarte];

    mescolate.sort(() => Math.random() - 0.5);

    let carteCasuali = mescolate.slice(0, 3);

    carteCasuali.sort((a, b) => a.sfortuna - b.sfortuna);

    return carteCasuali;

  });

  const [cartaRound] = useState(() => {

    let carteDisponibili = datiCarte.filter((carta) => {

      return !carteGiocatore.some((c) => c.id === carta.id);

    });

    carteDisponibili.sort(() => Math.random() - 0.5);

    return carteDisponibili[0];

  });

  const [messaggio, setMessaggio] = useState("");

  const [errori, setErrori] = useState(0);

  const dbsm_temp = "partita";


  function sceltaPosizione(posizioneScelta) {

    let posizioneCorretta = 0;

    for (let i = 0; i < carteGiocatore.length; i++) {

      if (cartaRound.sfortuna > carteGiocatore[i].sfortuna) {

        posizioneCorretta++;

      }

    }


    if (posizioneScelta === posizioneCorretta) {

      setMessaggio("Hai indovinato!");

    }

    else {

      setMessaggio("Hai sbagliato!");

      setErrori(errori + 1);

    }

  }

  return (

    <ScrollView style={stili.contenitore}>

      <Text style={stili.titolo}>
        Gioco della Sfortuna
      </Text>

      <Text style={stili.messaggio}>
        {messaggio}
      </Text>

      <Text style={stili.errori}>
        Errori: {errori}
      </Text>


      <Text style={stili.sottotitolo}>
        Nuova Carta
      </Text>


      <View style={stili.cartaRound}>

        <Image
          source={cartaRound.image}
          style={stili.immagine}
        />

        <Text style={stili.titoloCarta}>
          {cartaRound.title}
        </Text>

      </View>


      <Text style={stili.sottotitolo}>
        Le Tue Carte
      </Text>

      <TouchableOpacity
        style={stili.bottonePosizione}
        onPress={() => sceltaPosizione(0)}
      >

        <Text style={stili.testoBottone}>
          Metti Qui
        </Text>

      </TouchableOpacity>

      {
        carteGiocatore.map((carta, index) => (

          <View key={carta.id}>

            <View style={stili.carta}>

              <Image
                source={carta.image}
                style={stili.immagine}
              />

              <Text style={stili.titoloCarta}>
                {carta.title}
              </Text>

              <Text style={stili.sfortunaCarta}>
                Sfortuna: {carta.sfortuna}
              </Text>

            </View>

            <TouchableOpacity
              style={stili.bottonePosizione}
              onPress={() => sceltaPosizione(index + 1)}
            >

              <Text style={stili.testoBottone}>
                Metti Qui
              </Text>

            </TouchableOpacity>

          </View>

        ))
      }

    </ScrollView>

  );

}


const stili = StyleSheet.create({

  contenitore: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingTop: 60,
    paddingHorizontal: 20,
  },



  titolo: {
    color: 'orange',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },



  messaggio: {
    color: 'yellow',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
  },



  errori: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },



  sottotitolo: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },



  carta: {
    backgroundColor: '#2c2c2c',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },



  cartaRound: {
    backgroundColor: '#3b2a00',
    borderWidth: 3,
    borderColor: 'yellow',
    borderRadius: 20,
    padding: 15,
    marginBottom: 30,
    alignItems: 'center',
  },



  immagine: {
    width: 250,
    height: 180,
    borderRadius: 20,
    marginBottom: 15,
  },



  titoloCarta: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  sfortunaCarta: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
  },


  bottonePosizione: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },


  testoBottone: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

});