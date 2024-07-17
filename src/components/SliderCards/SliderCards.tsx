import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './SliderCards.css';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';

interface CardProp {
  id: number,
  title: string,
  coverImg: string,
  price: number,
  oldPrice: number,
}

const SliderCards = ({cards}: {cards: CardProp[]}) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(4);

  const getWindowDimensions = () => {
    const { innerWidth } = window;

    if(innerWidth >= 1050){
      return 4;
    }
    if(innerWidth <= 1050 && innerWidth >= 820){
      return 3;
    }
    if(innerWidth <= 820 && innerWidth >= 580 ){
      return 2;
    }
    return 1;
  }; 

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setSlidesPerView(getWindowDimensions());
  },[]);

  return (
    <Swiper 
      className="sliderCard-container"
      slidesPerView={slidesPerView}
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

