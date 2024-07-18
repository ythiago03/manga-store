import './Slider.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import {register} from 'swiper/element/bundle';
import 'swiper/css';
import { Link } from 'react-router-dom';

register();

const Slider = () => {

  const slides = [
    {
      productId: 10,
      slideImg: 'https://www.taiyo.moe/_next/image?url=https%3A%2F%2Fcdn.taiyo.moe%2Fmedias%2F17b03940-450b-4b34-a904-e9b296daee9a%2Fcovers%2F4ce8e97f-a130-4e06-8651-958f9d15d832.jpg&w=640&q=75',
      title: 'Solo Leveling',
      description: 'Sung Jin-Woo, um caçador E-rank. Alguém que tem que arriscar sua vida no mais baixo dos calabouços, o “mais fraco do mundo”. Não tendo nenhuma habilidade para mostrar, mal ganha o dinheiro necessário lutando em masmorras de baixo nível…',
      categories: ['Ação','Aventura','Fantasia','Shounen'],
    },
    {
      productId: 8,
      slideImg: 'https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg',
      title: 'Jujutsu Kaisen',
      description: 'No universo de Jujutsu Kaisen, escondido à vista de todos, um conflito milenar continua. Monstros sobrenaturais conhecidos como “Maldições” aterrorizam a humanidade das sombras, e humanos poderosos conhecidos como feiticeiros “Jujutsu” usam...',
      categories: ['Ação','Drama','Sobrenatural','Shounen'],
    },
    {
      productId: 12,
      slideImg: 'https://images.penguinrandomhouse.com/cover/9781593074845',
      title: 'Berserk',
      description: 'Guts, um ex-mercenário agora conhecido como o “Espadachim Negro”, está em busca de vingança. Depois de uma infância tumultuada, ele finalmente encontra alguém que respeita e acredita que pode confiar, apenas para ver tudo desmoronar quando essa pessoa tira tudo que é imp...',
      categories: ['Ação','Horror','Sobrenatural','Tragédia'],
    },
    {
      productId: 9,
      slideImg: 'https://m.media-amazon.com/images/I/71QS2yNxhoL._AC_UF1000,1000_QL80_.jpg',
      title: 'Chainsaw Man',
      description: 'Chainsaw Man follows the story of Denji, an impoverished teenager who makes a contract that fuses his body with that of a dog-like Devil named Pochita, granting him the ability to transform parts of his body into chainsaws.',
      categories: ['Ação','Horror','Sobrenatural','Tragédia'],
    },
    {
      productId: 11,
      slideImg: 'https://m.media-amazon.com/images/I/71oZmNhST-L._AC_UF1000,1000_QL80_.jpg',
      title: 'Demon Slayer',
      description: 'Demon Slayer: Kimetsu no Yaiba is a Japanese fantasy manga series and comic book by Koyoharu Gotouge. It follows Tanjiro Kamado, a young boy living in Taisho-era Japan who becomes the sole survivor of his family after demons kill them. He then sets out to save his sist...',
      categories: ['Ação','Horror','Sobrenatural','Tragédia'],
    },
  ];

  return (
    <div className="slider-container">
      
      <Swiper
        slidesPerView={1}
        autoplay={{pauseOnMouseEnter: true}}   
      >
        {slides.map((slide) => 
          <SwiperSlide key={slide.productId}>
            <div className="slider-wrapper">
              {/* Image in background  */}
              <img className="slider-bg-image" src={slide.slideImg} alt="Capa" />

              <div className="slider-desc">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
  
                <ul className="slider-category">
                  {slide.categories.map((category) => <li key={category}>{category}</li>)}
                </ul>
                
                <Link className="btn-buy" to={`/item/${slide.productId}`}>
                  Comprar
                </Link>
      
              </div>

              {/* Image in focus on slider  */}
              <img className="slider-focus-image" src={slide.slideImg} alt="Capa" />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>

  );
};

export default Slider;
