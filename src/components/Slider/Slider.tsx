import './Slider.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import {register} from 'swiper/element/bundle';
import 'swiper/css';

register();

const Slider = () => {

  const slides = [
    {
      productId: 1,
      slideImg: 'https://www.actuabd.com/local/cache-vignettes/L700xH990/arton30196-5ca1d.jpg?1665394583',
      title: 'Solo Leveling',
      description: 'Sung Jin-Woo, um caçador E-rank. Alguém que tem que arriscar sua vida no mais baixo dos calabouços, o “mais fraco do mundo”. Não tendo nenhuma habilidade para mostrar, mal ganha o dinheiro necessário lutando em masmorras de baixo nível…',
      categories: ['Ação','Aventura','Fantasia','Shounen'],
    },
    {
      productId: 2,
      slideImg: 'https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg',
      title: 'Jujutsu Kaisen',
      description: 'No universo de Jujutsu Kaisen, escondido à vista de todos, um conflito milenar continua. Monstros sobrenaturais conhecidos como “Maldições” aterrorizam a humanidade das sombras, e humanos poderosos conhecidos como feiticeiros “Jujutsu” usam...',
      categories: ['Ação','Drama','Sobrenatural','Shounen'],
    },
    {
      productId: 3,
      slideImg: 'https://lojamonstra.com.br/loja/wp-content/uploads/2021/08/berserk-9.jpg',
      title: 'Berserk',
      description: 'Guts, um ex-mercenário agora conhecido como o “Espadachim Negro”, está em busca de vingança. Depois de uma infância tumultuada, ele finalmente encontra alguém que respeita e acredita que pode confiar, apenas para ver tudo desmoronar quando essa pessoa tira tudo que é imp...',
      categories: ['Ação','Horror','Sobrenatural','Tragédia'],
    },
    {
      productId: 4,
      slideImg: 'https://m.media-amazon.com/images/I/71QS2yNxhoL._AC_UF1000,1000_QL80_.jpg',
      title: 'Chainsaw Man',
      description: 'Chainsaw Man follows the story of Denji, an impoverished teenager who makes a contract that fuses his body with that of a dog-like Devil named Pochita, granting him the ability to transform parts of his body into chainsaws.',
      categories: ['Ação','Horror','Sobrenatural','Tragédia'],
    },
    {
      productId: 4,
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
        pagination={{clickable: true}}
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
                <button className="btn-buy">Comprar</button>
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
