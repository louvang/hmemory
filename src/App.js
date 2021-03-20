import React, { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';

const App = () => {
  const [gameOver, setGameOver] = useState(false);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);

  return (
    <div className="App">
      <Header streak={streak} highestStreak={highestStreak} gameOver={gameOver} setGameOver={setGameOver} />

      <Cards
        streak={streak}
        setStreak={setStreak}
        highestStreak={highestStreak}
        setHighestStreak={setHighestStreak}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />
    </div>
  );
};

export default App;
