import { useState, useEffect } from "react";
import { getProductData } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemCounter from "../ItemCounter";

function ItemDetailContainer(props){
    const [product, setProduct] = useState ({});
    const {id} = useParams();

   

    useEffect(()=> {
        async function requestProduct() {
            const respuesta = await getProductData(id);
            setProduct(respuesta);
        }
        requestProduct();
    }, [id]);

    function handleOnAdd(count) {
        alert(`Agregaste ${count} unidades de${product.title} al carrito`);
    }
 
    return (
        <>
            <div>
                <h2>{product.title}</h2>
            </div>
            <div>   
                <img src={product.img} alt="imagen" />
            </div>
            <div>
                <h4>$ {product.price}</h4>
                <small>{product.description}</small>
            </div>
            <ItemCounter initial={1} stock={product.stock} onAdd={handleOnAdd} />
        </>
    )
}

export default ItemDetailContainer;