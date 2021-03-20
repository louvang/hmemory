import { useState } from 'react';
import uniqid from 'uniqid';

const Cards = (props) => {
  const { streak, setStreak, highestStreak, setHighestStreak, gameOver, setGameOver } = props;

  const [clickedCards, setClickedCards] = useState([]);

  const allCards = [
    { katakana: 'ア', id: uniqid() },
    { katakana: 'イ', id: uniqid() },
    { katakana: 'ウ', id: uniqid() },
    { katakana: 'エ', id: uniqid() },
    { katakana: 'オ', id: uniqid() },
    { katakana: 'カ', id: uniqid() },
    { katakana: 'キ', id: uniqid() },
    { katakana: 'ク', id: uniqid() },
    { katakana: 'ケ', id: uniqid() },
    { katakana: 'コ', id: uniqid() },
    { katakana: 'サ', id: uniqid() },
    { katakana: 'シ', id: uniqid() },
    { katakana: 'ス', id: uniqid() },
    { katakana: 'セ', id: uniqid() },
    { katakana: 'ソ', id: uniqid() },
    { katakana: 'タ', id: uniqid() },
    { katakana: 'チ', id: uniqid() },
    { katakana: 'ツ', id: uniqid() },
    { katakana: 'テ', id: uniqid() },
    { katakana: 'ト', id: uniqid() },
    { katakana: 'ナ', id: uniqid() },
    { katakana: 'ニ', id: uniqid() },
    { katakana: 'ヌ', id: uniqid() },
    { katakana: 'ネ', id: uniqid() },
    { katakana: 'ノ', id: uniqid() },
    { katakana: 'ハ', id: uniqid() },
    { katakana: 'ヒ', id: uniqid() },
    { katakana: 'フ', id: uniqid() },
    { katakana: 'ヘ', id: uniqid() },
    { katakana: 'ホ', id: uniqid() },
    { katakana: 'マ', id: uniqid() },
    { katakana: 'ミ', id: uniqid() },
    { katakana: 'ム', id: uniqid() },
    { katakana: 'メ', id: uniqid() },
    { katakana: 'モ', id: uniqid() },
    { katakana: 'ヤ', id: uniqid() },
    { katakana: 'ユ', id: uniqid() },
    { katakana: 'ヨ', id: uniqid() },
    { katakana: 'ラ', id: uniqid() },
    { katakana: 'リ', id: uniqid() },
    { katakana: 'ル', id: uniqid() },
    { katakana: 'レ', id: uniqid() },
    { katakana: 'ロ', id: uniqid() },
    { katakana: 'ワ', id: uniqid() },
    { katakana: 'ン', id: uniqid() },
  ];

  const cardClicked = (e) => {
    const alreadyClicked = clickedCards.findIndex((kana) => {
      return kana === e.target.textContent;
    });

    if (alreadyClicked < 0) {
      if (gameOver === false) {
        setStreak(streak + 1);
        setClickedCards(clickedCards.concat(e.target.textContent));
      }
    } else {
      if (streak > highestStreak) {
        setHighestStreak(streak);
      }
      setClickedCards([]);
      setStreak(0);
      setGameOver(true);
    }
  };

  const shuffleCards = (cards) => {
    for (let i = 0; i < cards.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }

    return cards.map((card) => (
      <div key={card.id} id={card.id} className={`card ${gameOver ? 'off' : 'on'}`} onClick={cardClicked}>
        {card.katakana}
      </div>
    ));
  };

  const displayedCards = shuffleCards(allCards);

  return <div className="cards">{displayedCards}</div>;
};

export default Cards;
