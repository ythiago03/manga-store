import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './SliderCards.css';
import Card from '../Card/Card';

interface CardProp {
  id: number,
  title: string,
  coverImg: string,
  price: number,
  oldPrice: number,
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
          <SwiperSlide key={card.id}>
            <Card {...card}/>
          </SwiperSlide>     
        );
      })}
    </Swiper>
  );
};

export default SliderCards;

