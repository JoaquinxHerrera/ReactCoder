import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../firebase";
import { useParams, useNavigate } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import { cartContext } from "../../context/CartContext"; 
import "./ItemDetailStyle.css";
import { Link } from "react-router-dom";
import Toastify from 'toastify-js';

function ItemDetailContainer(){
    const [product, setProduct] = useState ({});
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [errorsText, setErrorsText] = useState (null)
    const [isLoading, setIsLoading] =useState(true);
    const {id} = useParams();
    const {addToCart, getItemInCart} = useContext(cartContext);
    const navigate = useNavigate();

    const stylePrice = {
        color: product.discount ? "green" : "black"
    }
    
    const stylePriceDiscount = {
        color: "gray",
        textDecoration: "line-through"  
    }

    const itemInCart = getItemInCart(id)
    const maxItems = itemInCart? product.stock - itemInCart.quantity : product.stock;

    useEffect(()=> {
        async function requestProduct() {
            setIsLoading (true);
            try{
                const respuesta = await getProductData(id);
                setProduct(respuesta);
                setIsLoading(false);
            }
            catch (error){
                setErrorsText(error.message)
                setIsLoading(false);
            }
            finally{
                setIsLoading(false)
            }
            
        }
        requestProduct();
    }, [id]);

    function handleOnAdd(quantity) {
        addToCart(product, quantity)
        setIsAddedToCart(true);
        Toastify({
            text: `${quantity} units of ${product.title} were added to your cart`,
            duration: 3000,
            gravity: "bottom",
            position:"right",
            style: {
                background: "#F19A17",
                color: "white",
            }
          }).showToast();
    }
    
    if(errorsText){
        navigate("/notfound")
    }
       
    
    if(isLoading){
        return (
            <div class="d-flex justify-content-center">
              <div class="spinner-border mt-5"  role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            )
    }else{
        return (
            <div className="itemDetailBody">
                <div className="itemDetailLeft">   
                    <img className="detailImg"src={product.img} alt="imagen" />
                </div>
                <div className="itemDetailRight">
                    <div>
                        <h2>{product.title}</h2>
                    </div>
                    
                    <div>
                        <h4 className="detailPrice"> {
                            product.discount ? 
                            <div className='discountDetail'>
                                <h4 style={stylePrice}>$ {product.price *(1-product.discount/100)} </h4>
                                <p style={stylePriceDiscount}>$ {product.price} </p> 
                            </div>
                            : <p className="noDiscountDetail">$ {product.price} </p>
                            }
                            { product.discount ? <p>Discount: {product.discount}% </p> : ""}
                        </h4>
                    </div>
                    {product.stock > 0 ? (
                        isAddedToCart ? (
                            <div className="buttons">
                                <Link className="goCartButton"to="/cart">Go to cart</Link>
                                <Link to="/"className="homeButton">Homepage</Link>
                            </div>
                        ) : (
                            <ItemCounter initial={1} stock={maxItems} onAdd={handleOnAdd} />
                        )
                    ) : (
                        <p>Out of stock</p>
                    )}
                    {itemInCart && (
                        <div>
                            <p>You have added {itemInCart.quantity} units of this product </p>
                        </div>
                        )}
                    <p className="detailDescription">{product.description}</p>
                </div>
                
            </div>
        )
    }
    
}

export default ItemDetailContainer;