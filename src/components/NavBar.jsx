import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

function NavBar () {
    const context = useContext(cartContext);
    const [menuAbierto, setMenuAbierto] = useState(false);
    const menuRef = useRef(null);
    const cerrarMenu = () => {
        setMenuAbierto(false);
    };
    
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
              cerrarMenu();
            }
        };
        const handleResize = () => {
            cerrarMenu();
          };
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);
      
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <div className="header">
            <div className="logo">
                <NavLink to="/"><img  src="https://i.ibb.co/khMRpSh/Captura-de-Pantalla-2023-07-04-a-la-s-17-16-01.png" alt="" /></NavLink>
            </div>
            <nav className="nav-links">
            <button className="hamburguesa" onClick={() => setMenuAbierto(!menuAbierto)}>
                <img src="/imagenes/burgerMenu.png" alt="" />
            </button>
                <ul ref={menuRef} className={`menu ${menuAbierto ? 'abierto' : ''}`}>
                    <li><NavLink to="/" activeclassname="active"  onClick={cerrarMenu}>Home</NavLink></li>
                    <li><NavLink to="*" activeclassname="active" onClick={cerrarMenu}>Categories</NavLink></li>
                    <li><NavLink to="/category/trends" activeclassname="active" onClick={cerrarMenu}>Trends</NavLink></li>
                    <li><NavLink to="/category/sale" activeclassname="active" onClick={cerrarMenu}>SALE</NavLink></li>   
                </ul>     
            </nav>
            <div className="cartSection">
                <NavLink to="/cart">
                <div>
                    <svg className="cart" viewBox="0 0 74 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.75 55.66V50.6H21.275L24.05 45.54L66.6 41.4L74 13.8H17.1125L13.875 0H0V4.6H10.175L19.8875 43.24L13.875 55.2V62.1C13.875 65.78 17.1125 69 20.8125 69C24.5125 69 27.75 65.78 27.75 62.1C27.75 58.42 24.5125 55.2 20.8125 55.2H55.5V62.1C55.5 65.78 58.7375 69 62.4375 69C66.1375 69 69.375 65.78 69.375 62.1C69.375 58.88 67.525 56.58 64.75 55.66ZM18.5 18.4H67.9875L62.9 36.8L24.05 40.94L18.5 18.4Z" fill="black"/>
                    </svg>
                    {context.getTotalItemsInCart() > 0 && (
                        <span className="cartNumber"> {context.getTotalItemsInCart()} </span>
                    )}
                </div>    
                </NavLink>               
            </div>         
        </div>
    )
}

export default NavBar;