import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-top">
        <div className="logo"><span>logo</span></div>

        <div className="searchbar">
          <span>search</span>
        </div>

        <ul className="icons">
          <li className="cart">
            <span>cart</span>
          </li>
          <li className="user">
            <span>user</span>
          </li>
        </ul>
      </div>
      <div className="navbar-bottom">
        <ul >
          <li>
            <span>cagfgfrt</span>
          </li>
          <li >
            <span>ufgfger</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
