import {useState, useEffect} from 'react';
import { getData, getCategoryData } from '../../firebase';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import "./ItemListContainerStyle.css"


function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {categoryId} = useParams();
  

  

  useEffect(()=>{
    setIsLoading(true);
    async function requestProducts () {
      let respuesta = categoryId? await getCategoryData(categoryId) : await getData();
      setProducts(respuesta);
      setIsLoading(false);
    }
    requestProducts();
  },[categoryId]);
    
  if (isLoading) {
    return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border mt-5"  role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    )
  }else{
    return products.length ===0 ? (
      <p>No hay productos disponibles</p>
    ) : (
      <div>
        <ItemList products={products} />
      </div>

      
    );
  }
}

export default ItemListContainer;