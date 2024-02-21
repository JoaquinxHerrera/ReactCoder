import { Link } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import "../Item/ItemStyle.css";

function Item(props) {
  const {id, title, img, price, discount} = props;
  const stylePrice = {
    color: discount ? "green" : "black"
  }

  const stylePriceDiscount = {
    color: "gray",
    textDecoration: "line-through"  
  }

  return (
    <div className="itemCard">
      <div className="itemCardHeader">
        <h2>{title}</h2>
      </div>
      <div>
        <img className="itemCardImg" src={img} alt="imagen" />
      </div>
      <div className="itemCardDetail">
        {
          discount ? 
          <div className='discount'>
          <p style={stylePriceDiscount}>$ {price} </p>
          <p style={stylePrice}>$ {price *(1-discount/100)} </p>
          </div>
          : <p>$ {price} </p>
        }
        { discount ? <p>Discount: {discount}% </p> : ""}
      </div>
      <Link to={`/product/${id}`}><ButtonComponent colorFondo="gray" textcolor="white">Ver Producto</ButtonComponent></Link>
      
    </div>

  )
}

export default Item