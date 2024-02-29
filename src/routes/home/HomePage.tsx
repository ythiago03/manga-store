import React from 'react';
import Slider from '../../components/Slider/Slider';
import './HomePage.css';

import jbc from '../../assets/brands/jbc.svg';
import panini from '../../assets/brands/panini.svg';
import newPop from '../../assets/brands/newpop.svg';
import pipocaNanquim from '../../assets/brands/pipocaNanquim.svg';
import viz from '../../assets/brands/viz.svg';
import SliderCards from '../../components/SliderCards/SliderCards';

import productsData from '../../data/products';

type Props = {}

const HomePage = (props: Props) => {
  
  const bestSellersCards = productsData.slice(0,7);
  const releaseCards = productsData.slice(8,13);

  return (
    <main>
      <Slider/>
      <div className="brands">
        <ul>
          <li>
            <img src={jbc} alt="Logo da marca jbc" />
          </li>
          <li>
            <img src={panini} alt="Logo da marca panini" />
          </li>
          <li>
            <img src={newPop} alt="Logo da marca new pop" />
          </li>
          <li>
            <img src={pipocaNanquim} alt="Logo da marca pipoca e nanquim" />
          </li>
          <li>
            <img src={viz} alt="Logo da marca viz" />
          </li>
        </ul>
      </div>
      <section className="main-wrapper">
        <h1 className="title">Lançamentos</h1>
        <SliderCards cards={releaseCards}/>
      </section>
      <section className="main-wrapper">
        <h1 className="title">Mais Vendidos</h1>
        <SliderCards cards={bestSellersCards}/>
      </section>
    </main>
  );
};

export default HomePage;
