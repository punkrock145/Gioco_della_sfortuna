import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default function HomeScreen({ cambiaSchermata }) {

  return (

    <View style={stili.container}>

      <Image
        source={{
          uri: 'https://i.etsystatic.com/8431379/r/il/539735/755305151/il_1588xN.755305151_4q4b.jpg'
        }}
        style={stili.sfondo}
      />



      <View style={stili.overlay}>

        <Text style={stili.titolo}>
          GIOCO
        </Text>

        <Text style={stili.titolo2}>
          DELLA SFORTUNA
        </Text>

        <Text style={stili.sottotitolo}>
          Edition Music Disaster
        </Text>




        <TouchableOpacity
          style={stili.bottone}
          onPress={cambiaSchermata}
        >

          <Text style={stili.testoBottone}>
            INIZIA PARTITA
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
    fontSize: 55,
    fontWeight: 'bold',
  
  },



  titolo2: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },



  sottotitolo: {
    color: '#cccccc',
    fontSize: 18,
    marginBottom: 60,
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