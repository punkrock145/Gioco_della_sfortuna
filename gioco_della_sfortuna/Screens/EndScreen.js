import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function EndScreen({

  vittoria,
  restartGame

}) {

  return (

    <View style={stili.container}>

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
          ? "Hai completato il Gioco della Sfortuna"
          : "Hai fatto troppi errori"
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

  );

}






const stili = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
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