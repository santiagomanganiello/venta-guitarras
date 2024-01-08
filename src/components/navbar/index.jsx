import React from "react";
import carrito from "../../assets/img/carrito.png";
import logo from "../../assets/img/logo.png";
import './index.css';

function NavBar() {
    return (
        <>  
            <header className="container">
                <div className="logo">
                    <img className="guitarra" src={logo}></img>
                </div>
                <nav className="nav">
                    <ul className="nav_list">
                        <li>
                            <a className="nav_link" href="#">Productos</a>
                        </li>
                        <li>
                            <a className="nav_link" href="#">Contacto</a>
                        </li>
                        <li>
                            <a className="nav_link" href="#">Sobre Nosotros</a>
                        </li>
                    </ul>
                </nav>
                <div className="logo">
                    <a href="#"><img className="carrito" src={carrito}></img></a>
                </div>
            </header> 
        </>
    )
}

export default NavBar;