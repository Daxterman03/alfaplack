import React from "react";
import './navbar.css';
import logo from '../img/logo-alfaplack.png'

export const Navbar = () => {
    return(
        <nav className="navbar">
            <section className="nav-logo">
                <img id="logoNav" src={logo} alt="logo nav navegacion alfaplack"/>
            </section>
            <section className="links-nav">
                <a href="#">Inicio</a>
                <a href="#">Nosotros</a>
                <a href="#">Obras</a>
                <a href="#">Productos</a>
                <a href="#">Pedir presupuesto</a>
            </section>
        </nav>
    );
};