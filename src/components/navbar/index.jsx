import React from "react";
import styles from "./index.module.css";
import carrito from "../../assets/img/carrito.png";
import logo from "../../assets/img/logo.png";

function NavBar() {
    return (
        <>  
            <header className={styles.container}>
                <div className="logo">
                    <img className={styles.guitarra} src={logo}></img>
                </div>
                <nav className="nav">
                    <ul className={styles.nav_list}>
                        <li>
                            <a className={styles.nav_link} href="#">Inicio</a>
                        </li>
                        <li>
                            <a className={styles.nav_link} href="#">Productos</a>
                        </li>
                        <li>
                            <a className={styles.nav_link} href="#">Contacto</a>
                        </li>
                        <li>
                            <a className={styles.nav_link} href="#">Sobre Nosotros</a>
                        </li>
                    </ul>
                </nav>
                <div className="logo">
                    <a href="#"><img className={styles.carrito} src={carrito}></img></a>
                </div>
            </header> 
        </>
    )
}
export default NavBar;