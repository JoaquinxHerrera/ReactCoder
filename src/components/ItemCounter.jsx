import React from "react";
import { useState} from "react";
import "./styles.css";


const ItemCounter =  ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    function handleQuantity(){
        if(quantity < stock)
        setQuantity(quantity+1);
    }

    function handleQuantityResta(){
        if(quantity >1){
            setQuantity(quantity - 1);
        }
    }

    return(

    <div>
        <p>Stock available: {stock} </p>
        <div>
            <button onClick={handleQuantity}>
                <h1>Sumar</h1>
            </button>
            <h3>Quantity {quantity} </h3>
            <button onClick={handleQuantityResta}>
                <h1>Restar</h1>
            </button>
        </div>
        <div>
            <button onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    </div>
        
    )
}

export default ItemCounter;