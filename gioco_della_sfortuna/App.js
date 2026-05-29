import React, { useState } from "react";

import HomeScreen from "./Screens/HomeScreen";
import GameScreen from "./Screens/GameScreen";
import EndScreen from "./Screens/EndScreen";

/**
 * Componente principale dell'applicazione.
 * Gestisce la navigazione tra HomeScreen,
 * GameScreen ed EndScreen.
 *
 * @returns {JSX.Element} Schermata corrente dell'app.
 */

export default function App() {
  const [screen, setScreen] = useState("home");

  const [vittoriaFinale, setVittoriaFinale] = useState(false);
  /**
   * Riavvia una nuova partita.
   * Reindirizza il giocatore alla schermata di gioco.
   */
  function restartGame() {
    setScreen("game");
  }
  /**
   * Visualizza la schermata iniziale.
   */
  if (screen === "home") {
    return <HomeScreen cambiaSchermata={() => setScreen("game")} />;
  }
  /**
   * Visualizza la schermata finale.
   */
  if (screen === "end") {
    return <EndScreen vittoria={vittoriaFinale} restartGame={restartGame} />;
  }
  /**
   * Visualizza la schermata di gioco.
   */
  return (
    <GameScreen
      vaiEndScreen={(vinto) => {
        setVittoriaFinale(vinto);

        setScreen("end");
      }}
    />
  );
}
