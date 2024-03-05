import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products';

import './ItemSelected.css';
import Magnifier from 'react-magnifier';
import SliderCards from '../../components/SliderCards/SliderCards';
import toReal from '../../utils/convertReal';

type Props = {}

const ItemSelected = (props: Props) => {

  const [amount, setAmount] = useState(0);
  
  const relateds = productsData.slice(0, 10);
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
    window.scrollTo(0, 0);
    setFocusedImg(selectedItem.coverImg);
    setCard(selectedItem);
  };

  useEffect(() => {fetchItem();},[id]);

  const handleImgFocus = (newFocusedImg) => {
    setFocusedImg(newFocusedImg);
  };
  console.log(amount);

  return (
    <main className="itemSelected-container">

      <div className="itemSelected-wrapper">
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
          <h1 className="title">{card.title}</h1>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt excepturi impedit reiciendis rerum, molestiae, ea natus quidem odit, eum voluptas repudiandae illum amet sed debitis exercitationem quod quam nemo.
          </p>
          <div className="prices-totalItems">
            <div className="prices-wrapper">
              <span className="oldPrice">De:<span>{toReal(card.oldPrice)}</span></span>
              <span className="newPrice">Por:<span>{toReal(card.price)}</span></span>
            </div>

            <div className="totalItems">
              <span>Item(s)</span>
              <div className="total-wrapper">
                <button 
                  style={{cursor: amount === 0 ? 'default' : 'pointer'}}
                  className="total-btn"
                  onClick={() => amount === 0 ? amount : setAmount(amount-1)}
                >-
                </button>
                <span>{amount}</span>
                <button 
                  className="total-btn"
                  onClick={() => setAmount(amount+1)}
                >+
                </button>
              </div>
            </div>
          </div>
          
          <div className="action-buttons">
            <button className="btn">Comprar</button>
            <button className="btn">Colocar no Carrinho</button>
          </div>
        </section>
      </div>

      <section className="related">
        <h1 className="title">Produtos Relacionados</h1>
        <SliderCards cards={relateds}/>
      </section>
    </main>
  );
};

export default ItemSelected;
