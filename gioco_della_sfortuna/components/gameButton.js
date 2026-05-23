import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default function GameButton({

  testo,
  onPress

}) {

  return (

    <TouchableOpacity
      style={stili.bottone}
      onPress={onPress}
    >

      <Text style={stili.testo}>
        {testo}
      </Text>

    </TouchableOpacity>

  );

}

const stili = StyleSheet.create({

  bottone: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
  },

  testo: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

});