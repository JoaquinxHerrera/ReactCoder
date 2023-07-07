import "./styles.css";
import "./CartWidget"
import CartWidget from "./CartWidget";
function NavBar () {
    return (
        <div className="header">
            <div className="logo">
                <img  src="https://i.ibb.co/khMRpSh/Captura-de-Pantalla-2023-07-04-a-la-s-17-16-01.png" alt="" />
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Trends</a></li>
                    <li><a href="#">SALE</a></li>   
                </ul>     
            </nav>
            <div>
                <CartWidget/>
            </div>
             
            
        </div>
        

        
    )
}

export default NavBar;