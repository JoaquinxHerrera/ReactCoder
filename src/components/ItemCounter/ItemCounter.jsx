import React from "react";
import { useState} from "react";
import "../ItemCounter/ItemCounterStyles.css";
import { Link } from "react-router-dom";


const ItemCounter =  (props) => {
    const [quantity, setQuantity] = useState(1)

    function handleQuantity(){
        if(quantity < props.stock)
        setQuantity(quantity+1);
    }

    function handleQuantityResta(){
        if(quantity >1){
            setQuantity(quantity - 1);
        }
    }

    return(

    <div>
        <div className="counter">
            <button disabled={props.stock === 0 } className="counterButton-" onClick={handleQuantityResta}>
                <h1>-</h1>
            </button>
            <h3>Quantity {quantity} </h3>
            <button disabled={props.stock === 0 } className="counterButton" onClick={handleQuantity}>
                <h1>+</h1>
            </button>
        </div>
        <div>
            <p className="stock">Stock available: {props.stock} </p>
        </div>
        <div className="buttons">
            <button className="agregarButton" disabled={props.stock === 0 } onClick={()=> props.onAdd(quantity)} >
                Add to cart
            </button>
            <Link to="/"className="homeButton">Homepage</Link>
        </div>
        
    </div>
        
    )
}

export default ItemCounter;