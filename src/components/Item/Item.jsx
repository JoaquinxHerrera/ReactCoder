import { Link } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

function Item(props) {
  const {id, title, img, price, description} = props;

  return (
    <div className="itemCard">
      <div className="itemCardHeader">
        <h2>{title}</h2>
      </div>
      <div>
        <img className="itemCardImg" src={img} alt="imagen" />
      </div>
      <div className="itemCardDetail">
        <h4>$ {price}</h4>
        <small>{description}</small>
      </div>
      <Link to={`/product/${id}`}><ButtonComponent colorFondo="purple">Ver Producto</ButtonComponent></Link>
      
    </div>

  )
}

export default Item