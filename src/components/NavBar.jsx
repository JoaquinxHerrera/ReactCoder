import "./styles.css";
import "./CartWidget"
import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <div className="header">
            <div className="logo">
                <NavLink to="/"><img  src="https://i.ibb.co/khMRpSh/Captura-de-Pantalla-2023-07-04-a-la-s-17-16-01.png" alt="" /></NavLink>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><NavLink to="/" activeClassName="active" >Home</NavLink></li>
                    <li><NavLink to="*" activeClassName="active">Categories</NavLink></li>
                    <li><NavLink to="/category/trends" activeClassName="active">Trends</NavLink></li>
                    <li><NavLink to="/category/sale" activeClassName="active">SALE</NavLink></li>   
                </ul>     
            </nav>
            <div>
                <NavLink to="/cart"><CartWidget/></NavLink>               
            </div>         
        </div>
    )
}

export default NavBar;