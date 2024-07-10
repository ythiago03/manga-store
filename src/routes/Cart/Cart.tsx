import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

//Utils
import toReal from '../../utils/convertReal';

//Styles
import './Cart.css';

interface CartObject {
  id: number;
  title: string;
  coverImg: string;
  oldPrice: number;
  price: number;
  quantity?: number;
}

const Cart = () => {
  const {cart, setCart} = useContext(CartContext);
  const [amount, setAmount] = useState(1);


  const sumAllValues = () => {
    const subtotal: number[] = [];
    cart.forEach((item) => {
      if(item.quantity > 1){
        subtotal.push(item.price * item.quantity);
      }else{
        subtotal.push(item.price);
      }  
    });
    
    const total = subtotal.reduce((acc, cur) => acc + cur, 0);
    return total;
  };

  const deleteItem = (cartItem: CartObject) => {
    const arrayDeleted = cart.filter((item) => item.id != cartItem.id );
    setCart(arrayDeleted);
    sumAllValues();
  };

  const incrementQuantity = (cartItem: CartObject) => {
    const arrayDeleted = cart.filter((item) => item.id != cartItem.id );
    cart.forEach((item) => {
      if(item.id === cartItem.id){
        cartItem.quantity && cartItem.quantity++;
        arrayDeleted.push(cartItem);
        arrayDeleted.reverse();
      } 
    });
    setCart(arrayDeleted);
    setAmount(amount + 1);
    sumAllValues();
  };


  const decrementQuantity = (cartItem: CartObject) => {
    const arrayDeleted = cart.filter((item) => item.id != cartItem.id );
    cart.forEach((item) => {
      if(item.id === cartItem.id){
        cartItem.quantity && cartItem.quantity--;
        arrayDeleted.push(cartItem);
        arrayDeleted.reverse();
      } 
    });
    setCart(arrayDeleted);
    setAmount(amount - 1);
    sumAllValues();
  };

  const getCartQuantity = () => {
    const subtotal = [];
    cart.forEach((item) => {
      if(item.quantity > 1){
        subtotal.push(item.quantity);
      }else{
        subtotal.push(1);
      }  
    });
    
    const total = subtotal.reduce((acc, cur) => acc + cur, 0);
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
          <span className="subtotal-title">Subtotal({getCartQuantity()} produtos):</span>
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
                    <span>
                      {toReal(cartItem.price*(cartItem.quantity ? cartItem.quantity : 1))}
                    </span>
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
