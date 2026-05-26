import React, { useState } from 'react';

import HomeScreen from './Screens/HomeScreen';
import GameScreen from './Screens/GameScreen';
import EndScreen from './Screens/EndScreen';

export default function App() {
  const [screen, setScreen] = useState('home');

  const [vittoriaFinale, setVittoriaFinale] = useState(false);

  function restartGame() {
    setScreen('game');
  }

  if (screen === 'home') {
    return <HomeScreen cambiaSchermata={() => setScreen('game')} />;
  }

  if (screen === 'end') {
    return <EndScreen vittoria={vittoriaFinale} restartGame={restartGame} />;
  }

  return (
    <GameScreen
      vaiEndScreen={(vinto) => {
        setVittoriaFinale(vinto);

        setScreen('end');
      }}
    />
  );
}
