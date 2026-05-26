import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default function EndScreen({

  vittoria,
  restartGame

}) {

  return (

    <View style={stili.container}>


      <Image

        source={{
          uri: vittoria

          ? 'https://i.pinimg.com/736x/9d/1c/6e/9d1c6e003e24190e3a19a2c5f2956c40.jpg'

          : 'https://i.pinimg.com/736x/fd/fa/9c/fdfa9c711272ee81446dd9d0923d8c32.jpg'
        }}

        style={stili.sfondo}

      />





      <View style={stili.overlay}>


        <Text style={stili.titolo}>

          {
            vittoria
            ? "HAI VINTO!"
            : "GAME OVER"
          }

        </Text>


<Text style={stili.sottotitolo}>

  {
    vittoria
    ? "Vuoi vincere ancora? ↓ Premi qui 😎🔥"
    : "Hai fatto troppi errori 😵 Vuoi riprovarci? ↓"
  }

</Text>






        <TouchableOpacity
          style={stili.bottone}
          onPress={restartGame}
        >

          <Text style={stili.testoBottone}>
            GIOCA DI NUOVO
          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );

}






const stili = StyleSheet.create({

  container: {
    flex: 1,
  },



  sfondo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },



  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },



  titolo: {
    color: 'orange',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },



  sottotitolo: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 50,
  },



  bottone: {
    backgroundColor: 'orange',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 20,
  },



  testoBottone: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },

});