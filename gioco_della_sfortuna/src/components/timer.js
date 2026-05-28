import React, { useEffect, useState } from "react";

import { View, Text, StyleSheet } from "react-native";
/**
 * Componente che gestisce il conto alla rovescia del round.
 * Quando il tempo raggiunge zero viene richiamata la funzione
 * che termina la partita.
 *
 * @param {Object} props Proprietà del componente.
 * @param {number} props.tempo Tempo rimanente.
 * @param {Function} props.setTempo Aggiorna il valore del timer.
 * @param {Function} props.tempoScaduto Funzione eseguita allo scadere del tempo.
 * @returns {JSX.Element} Componente Timer.
 */

export default function Timer({ tempo, setTempo, tempoScaduto }) {
  /**
   * Aggiorna il timer ogni secondo e controlla
   * l'eventuale scadenza del tempo.
   */

  useEffect(() => {
    if (tempo <= 0) {
      tempoScaduto();

      return;
    }

    const intervallo = setInterval(() => {
      setTempo((tempoPrecedente) => tempoPrecedente - 1);
    }, 1000);

    return () => clearInterval(intervallo);
  }, [tempo, setTempo]);

  return (
    <View style={stili.container}>
      <Text style={stili.testo}> ⏳Tempo Rimasto: {tempo} </Text>{" "}
    </View>
  );
}

const stili = StyleSheet.create({
  container: {
    backgroundColor: "#2c2c2c",
    borderWidth: 2,
    borderColor: "orange",
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
    alignItems: "center",
  },

  testo: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
