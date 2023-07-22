import {useState, useEffect} from 'react';
import getData, { getCategoryData } from '../../asyncMock';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();


  

  useEffect(()=>{
    async function requestProducts () {
      let respuesta = categoryId? await getCategoryData(categoryId) : await getData();
      setProducts(respuesta);
      
    }
    requestProducts();
  },[categoryId]);
    

  return (
    <div>
      <div className="flex-container">
          {products.map((item) => (
          <Item key={item.id} {...item}/>
          ))}
      </div>
    </div>
  );
}

export default ItemListContainer;