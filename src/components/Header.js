import Scoreboard from './Scoreboard';

const Header = (props) => {
  const { streak, highestStreak, gameOver, setGameOver } = props;

  const inst = (
    <div className="message">
      Memorize the cards you've already clicked on to get the highest streak. If you click a card twice, you lose.
    </div>
  );
  const gameOverMsg = (
    <div className="message">
      Game over! You clicked on that katakana already. <button onClick={(e) => setGameOver(false)}>Try again?</button>
    </div>
  );

  return (
    <header>
      <div className="header-flex">
        <div>
          <div className="jp-title">メモカナ</div>
          <div className="title">memokana</div>
        </div>
        <Scoreboard streak={streak} highestStreak={highestStreak} />
      </div>

      {gameOver ? gameOverMsg : inst}
    </header>
  );
};

export default Header;
