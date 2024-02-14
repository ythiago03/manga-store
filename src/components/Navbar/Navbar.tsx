import './Navbar.css';
import searchIcon from '../../assets/icons/Search.svg';
import cartIcon from '../../assets/icons/Cart.svg';
import userIcon from '../../assets/icons/User.svg';

const Navbar = () => {
  return (
    <nav>
      {/* Top */}
      <div className="navbar-top">
        <div className="logo">
          <span>logo</span>
        </div>

        <div className="searchbar">
          <input type="text" placeholder="O que você está procurando?" />
          <button>
            <img src={searchIcon} alt="Icone de Lupa" />
          </button>
        </div>

        <ul className="icons">
          <li className="cart">
            <img src={cartIcon} alt="Icone de Carrinho de Compras" />
            <span>01</span>
          </li>
          <li>
            <img src={userIcon} alt="Icone de Usuário" />
          </li>
        </ul>
      </div>
      {/* Bottom */}
      <div className="navbar-bottom">
        <ul className="navigations">
          <li>
            <a href="/">Início</a>
          </li>
          <li >
            <a href="/">Categorias</a>
          </li>
          <li >
            <a href="/">Contato</a>
          </li>
          <li >
            <a href="/">Perguntas Frequentes</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
