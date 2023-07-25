import React from 'react';
import Item from "../Item/Item";

function ItemList(props) {
    const {products} = props;
  return (
    <div>
      <div className="flex-container">
          {products.map((item) => (
          <Item key={item.id} {...item}/>
          ))}
      </div>
    </div>
  )
}

export default ItemList