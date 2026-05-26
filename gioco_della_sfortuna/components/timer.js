import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function Timer({

  tempo,
  setTempo,
  tempoScaduto

}) {

  useEffect(() => {

    if (tempo <= 0) {

      tempoScaduto();

      return;

    }

    const intervallo = setInterval(() => {

      setTempo((tempoPrecedente) => tempoPrecedente - 1);

    }, 1000);



    return () => clearInterval(intervallo);

  }, [tempo,setTempo]);





  return (

    <View style={stili.container}>

      <Text style={stili.testo}>
        ⏳ Tempo Rimasto: {tempo}
      </Text>

    </View>

  );

}


const stili = StyleSheet.create({

  container: {
    backgroundColor: '#2c2c2c',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
    alignItems: 'center',
  },



  testo: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

});