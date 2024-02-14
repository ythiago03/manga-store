import './Slider.css';

type Props = {}

const Slider = (props: Props) => {
  return (
    <div className="slider-container">
      <div className="slider-wrapper">
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
          <button>Comprar</button>
        </div>
        <div className="slider-focus">
          <img src="https://www.actuabd.com/local/cache-vignettes/L700xH990/arton30196-5ca1d.jpg?1665394583" alt="Capa" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
