import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products';

import './ItemSelected.css';
import Magnifier from 'react-magnifier';
type Props = {}

const ItemSelected = (props: Props) => {

  const {id} =  useParams();
  const [card, setCard] = useState({
    id: 0,
    title: '0',
    coverImg: '0',
    price: 0,
    oldPrice: 0,
  });
  const [focusedImg, setFocusedImg] = useState('');

  const fetchItem = async () => {
    const selectedItem = await productsData.filter(
      (product) => id 
        ? product.id == +id 
        : product.id == 0 
    )[0];
    setFocusedImg(selectedItem.coverImg);
    setCard(selectedItem);
  };


  useEffect(() => {fetchItem();},[]);

  const handleImgFocus = (newFocusedImg) => {
    setFocusedImg(newFocusedImg);
  };

  return (
    <main className="itemSelected-container">
      <section className="item-photos-wrapper">
        <div className="focusedImg">
          <Magnifier mgShape="square" src={focusedImg}/>
        </div>
        <ul className="min-imgs-container">
          <li className="minImg-wrapper">
            <img src={card.coverImg} alt="2" />
          </li>
          <li className="minImg-wrapper">
            <img src={card.coverImg} alt="3" />
          </li>
        </ul>
      </section>

      <section className="item-desc-wrapper">
        <h1>{card.title}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt excepturi impedit reiciendis rerum, molestiae, ea natus quidem odit, eum voluptas repudiandae illum amet sed debitis exercitationem quod quam nemo.
        </p>
        <div className="prices">
          <span>{card.oldPrice}</span>
          <span>{card.price}</span>
        </div>
        <div className="action-buttons">
          <button className="btn">Comprar</button>
          <button className="btn">Colocar no Carrinho</button>
        </div>
      </section>
    </main>
  );
};

export default ItemSelected;
