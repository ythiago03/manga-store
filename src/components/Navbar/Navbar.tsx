import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

//Styles
import './Navbar.css';

//Icons
import searchIcon from '../../assets/icons/Search.svg';
import cartIcon from '../../assets/icons/Cart.svg';

const Navbar = () => {
  const {cart} = useContext(CartContext);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const toggleCheckbox = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <nav>
      {/* Top */}
      <section className="navbar-top">
        <input onClick={() => toggleCheckbox()} type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
        <div className="logo">
          <span>Manga Store</span>
        </div>

        <div className="searchbar">
          <input type="text" placeholder="O que você está procurando?" />
          <button>
            <img src={searchIcon} alt="Icone de Lupa de pesquisa" />
          </button>
        </div>

        <ul className="icons">
          <li className="cart">
            <Link to={'/cart'}>
              <img src={cartIcon} alt="Icone de Carrinho de Compras" />
              <span>{cart?.length}</span>
            </Link>
          </li>
        </ul>
      </section>

      {/* Bottom */}
      <section  className={'navbar-bottom ' + (isMenuOpened ? 'navbar-show' : '')}>
        <ul className="navigations">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li >
            <Link to="/category">Categorias</Link>
          </li>
          <li >
            <Link to="/contact">Contato</Link>
          </li>
          <li >
            <Link to="/questions">Perguntas Frequentes</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
