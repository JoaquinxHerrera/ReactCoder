import "./styles.css";
import "./CartWidget"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/"><img  src="https://i.ibb.co/khMRpSh/Captura-de-Pantalla-2023-07-04-a-la-s-17-16-01.png" alt="" /></Link>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Categories</Link></li>
                    <li><Link to="/category/trends">Trends</Link></li>
                    <li><Link to="/category/sale">SALE</Link></li>   
                </ul>     
            </nav>
            <div>
                <Link to="/cart"><CartWidget/></Link>
                
            </div>
             
            
        </div>
        

        
    )
}

export default NavBar;