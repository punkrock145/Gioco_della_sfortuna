import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function MessageBox({

  messaggio

}) {

  return (

    <View style={stili.box}>

      <Text style={stili.testo}>
        {messaggio}
      </Text>

    </View>

  );

}

const stili = StyleSheet.create({

  box: {
    backgroundColor: '#2c2c2c',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },

  testo: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

});