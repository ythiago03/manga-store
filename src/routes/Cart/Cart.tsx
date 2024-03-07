import React, { useContext, useState } from 'react';
import './Cart.css';

import dividerPrice from '../../utils/dividerPrice';
import { CartContext } from '../../context/CartContext';
import toReal from '../../utils/convertReal';
type Props = {}

const Cart = (props: Props) => {
  const {cart, setCart} = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  const sumAllValues = () => {
    let total = 0;
    for(let i = 0; i < cart.length; i++){
      total+=cart[i].price;
    }
    return total;
  };

  return (
    <main className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-title-wrapper">
          <h1 className="cart-title">Carrinho de Compras</h1>
          <span>Selecionar todos os items</span>
        </div>
        <div className="cart-total-wraper">
          <span className="subtotal-title">Subtotal({cart.length} produtos):</span>
          <span className="subtotal">{toReal(sumAllValues())}</span>
          <button className="subtotal-buy">Comprar</button>
        </div>
      </div>
      
      <section className="cart-items-wrapper">
        {
          cart.length === 0 
            ? <span>Não há items no carrinho!</span>
            : cart.map((cartItem) => {
              return (
                <div key={cartItem.id} className="cart-item">
                  <div className="cart-item-wrapper">
                    <input type="checkbox" name="" id="" />
                    <img src={cartItem.coverImg} alt="" />
            
                    <div className="cart-item-desc">
                      <h2 className="cart-item-title">{cartItem.title}</h2>
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
                    </div>
                  </div>
          
                  <div className="cart-price">
                    <span>{toReal(cartItem.price)}</span>
                  </div>
                </div>
              );
            })
        }

      </section>
    </main>
  );
};

export default Cart;
