import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import SliderCards from '../../components/SliderCards/SliderCards';

//Data
import productsData from '../../data/products';
import { CartContext } from '../../context/CartContext'; 

//Utils
import toReal from '../../utils/convertReal';

//Styles
import 'react-toastify/dist/ReactToastify.css';
import './ItemSelected.css';


interface CardInterface {
  id: number,
  title: string,
  coverImg: string,
  price: number,
  oldPrice: number,
}

const ItemSelected = () => {

  const {id} =  useParams();
  const {cart, setCart} = useContext(CartContext);
  const [card, setCard] = useState<CardInterface>({
    id: 0,
    title: '0',
    coverImg: '0',
    price: 0,
    oldPrice: 0,
  });
  const [focusedImg, setFocusedImg] = useState('');
  const relateds = productsData.slice(0, 10);

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

  const addToCart = () => {
    if(cart){
      setCart([...cart, {...card, quantity: 1}]);
    }
    
    toast.success('Produto Adicionado ao Carrinho!');
  };

  return (
    <main className="itemSelected-container">
      <ToastContainer />

      <section className="itemSelected-wrapper">
        <section className="item-photos-wrapper">
          <div className="focusedImg">
            <img
              alt="Manga photo"
              src={focusedImg}
              width="300"
            />
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
              <span className="oldPrice">
                De:<span>{toReal(card.oldPrice)}</span>
              </span>
              <span className="newPrice">
                Por:<span>{toReal(card.price)}</span>
              </span>
            </div>
          </div>
          
          <div className="action-buttons">
            <button className="btn">Comprar</button>
            <button 
              onClick={() => addToCart()}  
              className="btn"
            >
              Colocar no Carrinho
            </button>
          </div>
        </section>
      </section>

      <section className="related">
        <h1 className="title">Produtos Relacionados</h1>
        <SliderCards cards={relateds}/>
      </section>
    </main>
  );
};

export default ItemSelected;
