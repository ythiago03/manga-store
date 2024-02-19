import React from 'react';
import './SliderCards.css';
import Card from '../Card/Card';

type Props = {}

const SliderCards = (props: Props) => {
  const cards = [
    {
      cardId: 1,
      cardTitle: 'Jujutsu Kaisen',
      cardImg: 'https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 2,
      cardTitle: 'Chainsaw Man',
      cardImg: 'https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 3,
      cardTitle: 'Jujutsu Kaisen',
      cardImg: 'https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
  ];


  return (
    <div className="sliderc">SliderCards
      {cards.map((card) => <Card key={card.cardId} {...card}/>)}
    </div>
  );
};

export default SliderCards;
