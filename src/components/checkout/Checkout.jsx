import { createOrder } from '../../firebase';
import { useContext, useState } from 'react';
import { cartContext, CartContextProvider} from '../../context/CartContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import "./CheckoutStyle.css";


function Checkout() {
    const context = useContext(cartContext)
    const navigate = useNavigate();
    const {cart, getTotalPriceInCart} = useContext(cartContext);

    const [buyer, setBuyer] = useState({
        firstname: "",
        surname:"",
        age:"",
    })
  
    async function handleCheckout (evt){
        evt.preventDefault();
        const orderData = {
            items: cart,
            buyer: buyer,
            date: new Date(),
            total: getTotalPriceInCart(),
        };
        try{
            const idOrder = await createOrder(orderData);
            
            Swal.fire({
                icon: 'success',
                title: 'Thanks for your purchase',
                text: `Order number: # ${idOrder}` ,
                color: "white",
                background:"#17252D",
            });
            navigate(`/order-confirmation/${idOrder}`)
            context.clearCart();
            
        } catch (error) {
            alert(`We couldn't process your payment ${error.message}`)
        }
    }
        
    function onInpturChange(evt) {
        const value = evt.target.value;
        const field = evt.target.name;
        const newState = {...buyer}
        newState[field] = value;
        setBuyer(newState);
    }
    function resetForm(e){
        e.preventDefault();
        setBuyer({
            firstname: "",
            surname:"",
            age:"",
        })
    }

    return(
        <div className='infoSection'>
            <form>
                <h2>Fill your information to proceed with checkout </h2>
                <div className="contactBox">
                    <div className='infoContacto'>
                        <label htmlFor="First name" >First Name</label>
                        <input value={buyer.firstname} name="firstname" onChange={onInpturChange} type="text" required />
                    </div>
                
                    <div className='infoContacto'>
                        <label htmlFor="surname" >Surname</label>
                        <input value={buyer.surname} name="surname" onChange={onInpturChange} type="text" required/>
                    </div>

                    <div className='infoContacto'>
                        <label >Age</label>
                        <input value={buyer.age} name="age" onChange={onInpturChange} type="number" required/>
                    </div>
                </div>
                

                <button
                    className="checkoutButton"
                    disabled={!(buyer.firstname !== "" && buyer.surname !== ""&& buyer.age !== "")}
                    onClick={handleCheckout}>
                    Checkout
                </button>
                <button className="goCartButton" onClick={resetForm}>Cancel</button>
            </form>
            <svg className="lineaCheckout" width="1" height="250" viewBox="0 0 1 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" x2="0.5" y2="500" stroke="#9C9C9C"/>
            </svg>

            <div>
                <h3>Payment options</h3>
                <img className="paymentOptions" src="https://i.ibb.co/Tr1Kksb/popular-online-payment-methods-logo-with-white-background-transparent-with-logotype-gateway-icon-set.jpg" alt="" />
            </div>
        </div>
        
    
    );

}

export default Checkout