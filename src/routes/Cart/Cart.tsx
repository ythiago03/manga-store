import React, { useState } from 'react';
import './Cart.css';
type Props = {}

const Cart = (props: Props) => {
  const [amount, setAmount] = useState(0);

  return (
    <main className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-title-wrapper">
          <h1 className="cart-title">Carrinho de Compras</h1>
          <span>Selecionar todos os items</span>
        </div>
        <div className="cart-total-wraper">
          <span className="subtotal-title">Subtotal(1 produto):</span>
          <span className="subtotal">R$29,99</span>
          <button className="btn-buy">Comprar</button>
        </div>
      </div>
      
      <section className="cart-items-wrapper">
        <div className="cart-item">
          <input type="checkbox" name="" id="" />
          <img src="https://www.jbchost.com.br/editorajbc/wp-content/uploads/2022/10/neon-genesis-evangelion-collectors-edition-01-capa.jpg" alt="" />
          <h2 className="cart-item-title">Neon Genesis Evangelion Deluxe Edition Vol.1</h2>
          <div className="cart-totalItems">
            <span>Item(s)</span>
            <div className="cart-total-wrapper">
              <button 
                style={{cursor: amount === 0 ? 'default' : 'pointer'}}
                className="cart-total-btn"
                onClick={() => amount === 0 ? amount : setAmount(amount-1)}
              >-
              </button>
              <span>{amount}</span>
              <button 
                className="cart-total-btn"
                onClick={() => setAmount(amount+1)}
              >+
              </button>
            </div>
          </div>
          <div className="cart-price">
            <span>R$29,99</span>
            <span>Ou 6x de R$5,23</span>
          </div>
        </div>
        <div className="cart-item">
          <input type="checkbox" name="" id="" />
          <img src="https://m.media-amazon.com/images/I/61AsrEefexL.jpg" alt="" />
          <h2 className="cart-item-title">Morada do Desertor(mangá volume único), Junji Ito</h2>
          <div className="cart-totalItems">
            <span>Item(s)</span>
            <div className="cart-total-wrapper">
              <button 
                style={{cursor: amount === 0 ? 'default' : 'pointer'}}
                className="cart-total-btn"
                onClick={() => amount === 0 ? amount : setAmount(amount-1)}
              >-
              </button>
              <span>{amount}</span>
              <button 
                className="cart-total-btn"
                onClick={() => setAmount(amount+1)}
              >+
              </button>
            </div>
          </div>
          <div className="cart-price">
            <span>R$29,99</span>
            <span>Ou 6x de R$5,23</span>
          </div>
        </div>
        <div className="cart-item">

          <input type="checkbox" name="" id="" />

          <img src="https://http2.mlstatic.com/D_NQ_NP_809287-MLU50423414509_062022-O.webp" alt="" />

          <h2 className="cart-item-title">Berserk Vol.14 Edição de Luxo</h2>

          <div className="cart-totalItems">
            <span>Item(s)</span>
            <div className="cart-total-wrapper">
              <button 
                style={{cursor: amount === 0 ? 'default' : 'pointer'}}
                className="cart-total-btn"
                onClick={() => amount === 0 ? amount : setAmount(amount-1)}
              >-
              </button>
              <span>{amount}</span>
              <button 
                className="cart-total-btn"
                onClick={() => setAmount(amount+1)}
              >+
              </button>
            </div>
          </div>

          <div className="cart-price">
            <span>R$29,99</span>
            <span>Ou 6x de R$5,23</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
