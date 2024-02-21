import { useState, createContext} from "react";
import Toastify from 'toastify-js';



const cartContext = createContext ({ cart: [ ]});

function CartContextProvider (props){
  const [cart, setCart] = useState([]);
  const prueba = "otra prueba";

  function addToCart(product, quantity){
    const newCart = [...cart];
    if (isInCart(product.id)){
      const indexUpdate = cart.findIndex(item => item.id === product.id)
      newCart[indexUpdate].quantity += quantity;
      setCart(newCart);
    }


    else{
      const newItemInCart = {...product, quantity};
      newCart.push(newItemInCart);
      setCart(newCart);
    }
  }

  function isInCart(id){
    return cart.some(item => item.id === id)
  }

  function getItemInCart(id){
    return cart.find((item) => item.id === id)
  }

  function removeItem(id){
    setCart (cart.filter(product => product.id !== id));
    Toastify({
      text: ` The product was deleted from cart`,
      duration: 3000,
      gravity: "bottom",
      position:"right",
      style: {
          background: "#F19A17",
          color: "white",
      }
    }).showToast();

  }

  
  
  function clearCart(){
    const newCart = [];
    setCart(newCart);
  }

  function getTotalItemsInCart(){
    let total=0;
    cart.forEach((item)=> {
      total += item.quantity;
    });
    return total;
  }

  function getTotalPriceInCart(){
    let total = 0;
    cart.forEach((item)=> {
      total += item.quantity * item.price;
    });
    return total;
  }

  return(
    <cartContext.Provider value= {{cart, prueba, addToCart, removeItem, clearCart, getTotalItemsInCart,getItemInCart, getTotalPriceInCart}} >
      {props.children}
    </cartContext.Provider>
  )
}

export {cartContext, CartContextProvider};