import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'; 
import toReal from '../../utils/convertReal';

type Props = {
  id: number;
  title: string;
  coverImg: string;
  price: number;
  oldPrice: number;
}

const Card = (props: Props) => {


  return (
    <div>
      <Link className="card" to={`/item/${props.id}`}>
        <img src={props.coverImg} alt="" />
        <h2>
          {
            props.title.split('').length > 14 
              ? props.title.slice(0, 13) + '...' 
              : props.title
          }
        </h2>
        <div className="prices">
          <span>{toReal(props.oldPrice)}</span>
          <span>{toReal(props.price)}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
