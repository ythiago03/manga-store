import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './SliderCards.css';
import Card from '../Card/Card';

interface CardProp {
  cardId: number,
  cardTitle: string,
  cardImg: string,
  cardPrice: number,
  cardOldPrice: number,
}

const SliderCards = ({cards}: {cards: CardProp[]}) => {
  
  return (
    <Swiper 
      className="sliderCard-container"
      slidesPerView={4}
      navigation
    >
      {cards.map((card: CardProp) => {   
        return (
          <SwiperSlide key={card.cardId}>
            <Card {...card}/>
          </SwiperSlide>     
        );
      })}
    </Swiper>
  );
};

export default SliderCards;

