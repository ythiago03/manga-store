import './Slider.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import {register} from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';

type Props = {}

register();

const Slider = (props: Props) => {

  return (
    <div className="slider-container">
      
      <Swiper
        slidesPerView={1}
        pagination={{clickable: true}}
        autoplay   
      >
        <SwiperSlide>
          <div className="slider-wrapper">
            {/* Image in background  */}
            <img className="slider-bg-image" src="https://www.actuabd.com/local/cache-vignettes/L700xH990/arton30196-5ca1d.jpg?1665394583" alt="Capa" />

            <div className="slider-desc">
              <h1>Solo Leveling</h1>
              <p>Sung Jin-Woo, um caçador E-rank. Alguém que tem que arriscar sua vida no mais baixo dos calabouços, o “mais fraco do mundo”. Não tendo nenhuma habilidade para mostrar, mal ganha o dinheiro necessário lutando em masmorras de baixo nível… </p>
  
              <ul className="slider-category">
                <li>
                  <span>Ação</span>
                </li>
                <li>
                  <span>Aventura</span>
                </li>
                <li>
                  <span>Fantasia</span>
                </li>
                <li>
                  <span>Shounen</span>
                </li>
              </ul>
              <button className="btn-buy">Comprar</button>
            </div>

            {/* Image in focus on slider  */}
            <img className="slider-focus-image" src="https://www.actuabd.com/local/cache-vignettes/L700xH990/arton30196-5ca1d.jpg?1665394583" alt="Capa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-wrapper">
            {/* Image in background  */}
            <img className="slider-bg-image" src="https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg" alt="Capa" />

            <div className="slider-desc">
              <h1>Jujutsu Kaisen</h1>
              <p>No universo de Jujutsu Kaisen, escondido à vista de todos, um conflito milenar continua. Monstros sobrenaturais conhecidos como “Maldições” aterrorizam a humanidade das sombras, e humanos poderosos conhecidos como feiticeiros “Jujutsu” usam...</p>
  
              <ul className="slider-category">
                <li>
                  <span>Ação</span>
                </li>
                <li>
                  <span>Drama</span>
                </li>
                <li>
                  <span>Sobrenatural</span>
                </li>
                <li>
                  <span>Shounen</span>
                </li>
              </ul>
              <button className="btn-buy">Comprar</button>
            </div>

            {/* Image in focus on slider  */}
            <img className="slider-focus-image" src="https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg" alt="Capa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-wrapper">
            {/* Image in background  */}
            <img className="slider-bg-image" src="https://lojamonstra.com.br/loja/wp-content/uploads/2021/08/berserk-9.jpg" alt="Capa" />

            <div className="slider-desc">
              <h1>Berserk</h1>
              <p>Guts, um ex-mercenário agora conhecido como o “Espadachim Negro”, está em busca de vingança. Depois de uma infância tumultuada, ele finalmente encontra alguém que respeita e acredita que pode confiar, apenas para ver tudo desmoronar quando essa pessoa tira tudo que é imp...</p>
  
              <ul className="slider-category">
                <li>
                  <span>Ação</span>
                </li>
                <li>
                  <span>Horror</span>
                </li>
                <li>
                  <span>Sobrenatural</span>
                </li>
                <li>
                  <span>Tragédia</span>
                </li>
              </ul>
              <button className="btn-buy">Comprar</button>
            </div>

            {/* Image in focus on slider  */}
            <img className="slider-focus-image" src="https://lojamonstra.com.br/loja/wp-content/uploads/2021/08/berserk-9.jpg" alt="Capa" />
          </div>
        </SwiperSlide>
      </Swiper>








      {/*  
      <div className="slider-wrapper">
         Image in background 
        <img className="slider-bg-image" src="https://www.actuabd.com/local/cache-vignettes/L700xH990/arton30196-5ca1d.jpg?1665394583" alt="Capa" />

<div className="slider-desc">
  <h1>Solo Leveling</h1>
  <p>Sung Jin-Woo, um caçador E-rank. Alguém que tem que arriscar sua vida no mais baixo dos calabouços, o “mais fraco do mundo”. Não tendo nenhuma habilidade para mostrar, mal ganha o dinheiro necessário lutando em masmorras de baixo nível… </p>
  
  <ul className="slider-category">
    <li>
      <span>Ação</span>
    </li>
    <li>
      <span>Aventura</span>
    </li>
    <li>
      <span>Fantasia</span>
    </li>
    <li>
      <span>Shounen</span>
    </li>
  </ul>
  <button className="btn-buy">Comprar</button>
</div>

 Image in focus on slider 
<img className="slider-focus-image" src="https://www.actuabd.com/local/cache-vignettes/L700xH990/arton30196-5ca1d.jpg?1665394583" alt="Capa" />
</div>

      

      <div className="slider-controls">
        <button className="btn-control"></button>
        <button className="btn-control"></button>
        <button className="btn-control"></button>
        <button className="btn-control"></button>
      </div>
      */}
    </div>

  );
};

export default Slider;
