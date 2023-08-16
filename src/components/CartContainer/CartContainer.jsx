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
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                {cart.length > 0 ? (
                    
                    cart.map ((item) => (               
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={item.img} alt="articulo" />
                                        <td className='titleProduct'>{item.title}  
                                            <button className='deleteButton' onClick={() => removeItem(item.id)}>Delete product</button>
                                        </td>
                                        <svg className="divisionLine" viewBox="0 0 1156 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="1156" y2="0.5" stroke="#6A6A6A" stroke-opacity="0.8"/>
                                        </svg>
                                    </td>
                                    
                                    <td>{item.quantity}</td>
                                    <td>
                                        {item.discount ? 
                                        <div className='discountCart'>
                                            <p style={stylePriceDiscount}>$ {item.price} </p>
                                            <p style={stylePrice}>$ {item.price *(1-item.discount/100)} </p>
                                        </div>
                                        : <p className='discountCart'>$ {item.price} </p>}
                                    </td>
                                    <td>${(item.price *(1-item.discount/100))*item.quantity}</td>
                                </tr>     
                            </tbody>
                                
                            
                        ))
                    ) : (
                        <div className='emptyCart'>                           
                            <img src="https://i.ibb.co/r5KBpRZ/Captura-de-Pantalla-2023-08-11-a-la-s-17-42-36.png" alt="" />
                            <p>Your cart is empty</p>
                        </div>
                        
                    )}
            </table> 
            {cart.length > 0 && (
            <div className='lastRow'>
                <div>
                    <button className="goCartButton"onClick={()=> clearCart()}>Clear cart</button>
                    <Link className="checkoutButton" to="/checkout">Proceed to checkout</Link>
                </div>
                <p><b>Subtotal: ${calculateSubtotal()}</b></p>
            </div>
        )}  
        </div>
    );
};
    
 

export default CartContainer