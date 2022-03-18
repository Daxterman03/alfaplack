import React from "react";
import './footer.css';
import logo from '../img/logo-alfaplack.png';

export const Footer = () => {
    return(
        <footer className="footer">
            <section className="copyright">
                <img id="logoFoot" src={logo} alt="Logo Alfa Plack Placas Antihumedad"/>
                <p id="copyright">Copyright 2022 Diego Marmiroli <br/>Todos los derechos reservados</p>
            </section>
            <section className="info">
                <div className="contactos">
                    <h3>Contacto</h3>
                    <p>Celular: <a href="#">3462-696061</a></p>
                    <p>Mail: <a href="mailto:marcosdmansilla@hotmail.com" target="_blank" rel="noreferrer">marcosdmansilla@hotmail.com</a></p>
                </div>
                <div className="redes">
                    <h3>Redes</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/ALFA-PLACK-106803651236040" target="_blank" className="fab fa-facebook-f"></a>
                        <a href="https://www.instagram.com/alfaplack.elortondo" target="_blank" className="fab fa-instagram"></a>
                        <a href="https://wa.me/543462696061?text=¡Estoy+interesado!" target="_blank" className="fab fa-whatsapp"></a>
                    </div>
                </div>
            </section>
            <section className="ubicacion">
                <h3>Nos ubicamos en:</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10237.719567078973!2d-61.62663939888886!3d-33.704546463026446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13ce7f8895fb218e!2zMzPCsDQyJzI3LjgiUyA2McKwMzcnMjEuMyJX!5e0!3m2!1ses-419!2sar!4v1643641259326!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" title="Mapa Ubicación AlfaPlack"></iframe>
            </section>
        </footer>
    );
};

