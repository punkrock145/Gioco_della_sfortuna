
import React, { useState } from 'react';

import HomeScreen from './Screens/HomeScreen';
import GameScreen from './Screens/GameScreen';

export default function App() {

  const [screen, setScreen] = useState('home');



  if (screen === 'home') {

    return (
      <HomeScreen
        cambiaSchermata={() => setScreen('game')}
      />
    );

  }



  return <GameScreen />;

}