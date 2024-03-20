import React, { useContext, useState } from 'react';
import './Cart.css';

import dividerPrice from '../../utils/dividerPrice';
import { CartContext } from '../../context/CartContext';
import toReal from '../../utils/convertReal';


const Cart = () => {
  const {cart, setCart} = useContext(CartContext);
  const [amount, setAmount] = useState(1);
  const [totalValue, setTotalValue] = useState(0);
  const [itemsDuplicateds, setItemsDuplicateds] = useState([]);

  const sumAllValues = () => {
    cart.map((item) => {});
    
    return 10;
    
  };

  const deleteItem = (cartItem) => {
    const arrayDeleted = cart.filter((item) => item.id != cartItem.id );
    setCart(arrayDeleted);
    sumAllValues();
  };

  const incrementQuantity = (cartItem) => {
    const arrayDeleted = cart.filter((item) => item.id != cartItem.id );
    cart.forEach((item) => {
      if(item.id === cartItem.id){
        cartItem.quantity++;
        arrayDeleted.push(cartItem);
        arrayDeleted.reverse();
      } 
    });
    setCart(arrayDeleted);
    setAmount(amount + 1);
    sumAllValues();
  };


  const decrementQuantity = (cartItem) => {
    const arrayDeleted = cart.filter((item) => item.id != cartItem.id );
    cart.forEach((item) => {
      if(item.id === cartItem.id){
        cartItem.quantity--;
        arrayDeleted.push(cartItem);
        arrayDeleted.reverse();
      } 
    });
    setCart(arrayDeleted);
    setAmount(amount - 1);
    sumAllValues();
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
                            className="cart-total-btn"
                            onClick={() => cartItem.quantity === 1 ? deleteItem(cartItem) : decrementQuantity(cartItem)}
                          >-
                          </button>
                          <span>{cartItem.quantity}</span>
                          <button 
                            className="cart-total-btn"
                            onClick={() => incrementQuantity(cartItem)}
                          >+
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div className="cart-price">
                    <span>{toReal(cartItem.price*cartItem.quantity)}</span>
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
