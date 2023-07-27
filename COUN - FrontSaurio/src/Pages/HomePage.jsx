import React from 'react';
import logo from '../assets/logo.png';
import '../CSS/HomePage.css';

export const HomePage = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>GuateUni</h1>
        </div>
      </header>
      <main>
        <section id="inicio" className="inicio">
          <div className="contenido-inicio">
            <h1>Bienvenido al Blog de GuateUni</h1>
            <p>Explora las diversas universidades en Guatemala y mantente actualizado con las últimas noticias y eventos.</p>
            <a href="#universidades" className="boton-explorar">Explorar</a>
          </div>
        </section>
        <section id="universidades" className="universidades">
          <h2>Universidades en Guatemala</h2>
          {/* Aquí puedes agregar imágenes y descripciones de las universidades */}
        </section>
        <section id="noticias" className="noticias">
          <h2>Noticias Recientes</h2>
          {/* Aquí puedes agregar las noticias */}
        </section>
        <section id="contacto" className="contacto">
          <h2>Contacto</h2>
          <p>Email: info@guateuni.com</p>
          <p>Teléfono: +1 123-456-7890</p>
          <div className="redes-sociales">
            <a href="#" className="icono-facebook"></a>
            <a href="#" className="icono-twitter"></a>
            <a href="#" className="icono-instagram"></a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="contenido-footer">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
            <span>GuateUni</span>
          </div>
          <div className="contacto">
            <h2>Contacto</h2>
            <p>Email: info@guateuni.com</p>
            <p>Teléfono: +1 123-456-7890</p>
          </div>
          <div className="redes-sociales">
            <h2>Síguenos</h2>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="derechos">
          <p>&copy; {new Date().getFullYear()} GuateUni - Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

