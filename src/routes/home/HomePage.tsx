import React from 'react';
import Slider from '../../components/Slider/Slider';
import './HomePage.css';

import jbc from '../../assets/brands/jbc.svg';
import panini from '../../assets/brands/panini.svg';
import newPop from '../../assets/brands/newpop.svg';
import pipocaNanquim from '../../assets/brands/pipocaNanquim.svg';
import viz from '../../assets/brands/viz.svg';
import SliderCards from '../../components/SliderCards/SliderCards';

type Props = {}

const HomePage = (props: Props) => {
  
  const releaseCards = [
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
      cardImg: 'https://m.media-amazon.com/images/I/71QS2yNxhoL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 3,
      cardTitle: 'Solo Leveling',
      cardImg: 'https://www.actuabd.com/local/cache-vignettes/L700xH988/arton31100-7c77a.png?1676370907',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 4,
      cardTitle: 'Demon Slayer',
      cardImg: 'https://m.media-amazon.com/images/I/71oZmNhST-L._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 5,
      cardTitle: 'Berserk',
      cardImg: 'https://lojamonstra.com.br/loja/wp-content/uploads/2021/08/berserk-9.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 6,
      cardTitle: 'O Beco',
      cardImg: 'https://m.media-amazon.com/images/I/A1yUNGy8eLL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 7,
      cardTitle: 'Boa Noite Punpun',
      cardImg: 'https://m.media-amazon.com/images/I/51EQ5jMPsHL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
  ];

  const bestSellersCards = [
    {
      cardId: 1,
      cardTitle: 'Blue Lock',
      cardImg: 'https://m.media-amazon.com/images/I/81Z85oL1xvL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 2,
      cardTitle: 'Vagabond',
      cardImg: 'https://m.media-amazon.com/images/I/71TY7kJBo9L._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 3,
      cardTitle: 'One Piece',
      cardImg: 'https://m.media-amazon.com/images/I/91ZJ8D9pmkL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 4,
      cardTitle: 'Oshi no Ko',
      cardImg: 'https://m.media-amazon.com/images/I/71oFAlU1GVL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 5,
      cardTitle: 'Spy x Family',
      cardImg: 'https://m.media-amazon.com/images/I/71vMGRog+iL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 6,
      cardTitle: 'Slam Dunk',
      cardImg: 'https://m.media-amazon.com/images/I/91hPkfq6MLL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
    {
      cardId: 7,
      cardTitle: 'My Hero Academia',
      cardImg: 'https://m.media-amazon.com/images/I/71bELfIWTDL._AC_UF1000,1000_QL80_.jpg',
      cardPrice: 39.99,
      cardOldPrice: 29.99,
    },
  ];

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
      <section className="releases">
        <h1>Lançamentos</h1>
        <SliderCards cards={releaseCards}/>
      </section>
      <section className="releases">
        <h1>Lançamentos</h1>
        <SliderCards cards={bestSellersCards}/>
      </section>
    </main>
  );
};

export default HomePage;
