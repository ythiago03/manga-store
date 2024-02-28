import React from 'react';
import './Card.css';

type Props = {
  cardTitle: string;
  cardImg: string;
  cardPrice: number;
  cardOldPrice: number;
}

const Card = (props: Props) => {

  return (
    <div className="card">
      <img src={props.cardImg} alt="" />
      <h2>
        {
          props.cardTitle.split('').length > 14 
            ? props.cardTitle.slice(0, 13) + '...' 
            : props.cardTitle
        }
      </h2>
      <div className="prices">
        <span>R${props.cardOldPrice}</span>
        <span>R${props.cardPrice}</span>
      </div>
    </div>
  );
};

export default Card;
