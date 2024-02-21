import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext'; 
import "./CartContainerStyle.css";
import { Link } from 'react-router-dom';


function CartContainer(props) {
    const { cart, removeItem, clearCart} =useContext(cartContext);
    const {discount} =props;

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + (item.price *(1-item.discount/100)) * item.quantity, 0);
    };

    const stylePrice = {
        color: discount ? "green" : "black"
    };
    
    const stylePriceDiscount = {
        color: "gray",
        textDecoration: "line-through"  
    };

   return (
    <div className='body'>
      <h1>Cart</h1>
      <div className="cart-table">
        {cart.length > 0 ? (
          <>
            <div className="cart-header">
              <div>Product</div>
              <div className='txt-right'>Quantity</div>
              <div className='txt-right'>Price</div>
              <div className='txt-right'>Total</div>
            </div>
            {cart.map((item) => (
              <div className="cart-row" key={item.id}>
                <div className="product">
                  <img src={item.img} alt="articulo" />
                  <span>{item.title}</span>
                  <button className='deleteButton' onClick={() => removeItem(item.id)}>Delete</button>
                </div>
                <div className="quantity txt-right">{item.quantity}</div>
                <div className="price">
                  {item.discount ? (
                    <div className='discountCart txt-right'>
                      <p style={stylePriceDiscount}>$ {item.price} </p>
                      <p style={stylePrice}>$ {item.price * (1 - item.discount / 100)} </p>
                    </div>
                  ) : (
                    <p className='discountCart txt-right'>$ {item.price} </p>
                  )}
                </div>
                <div className="total txt-right">${(item.price * (1 - item.discount / 100)) * item.quantity}</div>

              </div>
            ))}
          </>
        ) : (
          <div className='emptyCart'>
            <img src="https://i.ibb.co/r5KBpRZ/Captura-de-Pantalla-2023-08-11-a-la-s-17-42-36.png" alt="" />
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className='lastRow column'>
          <div className='column'>
            <button className="goCartButton" onClick={() => clearCart()}>Clear cart</button>
            <Link className="checkoutButton" to="/checkout">Proceed to checkout</Link>
          </div>
          <p><b>Subtotal: ${calculateSubtotal()}</b></p>
        </div>
      )}
    </div>
  );
}; 
    
 

export default CartContainer