import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

// Dentro de tu componente Home
const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <div className="home-header-content">
          <img
            src="/Images/Home-Image.png"
            alt="UniDrive"
            className="home-image"
          />
          <div className="home-welcome">
            <h1>¡Bienvenido a UniDrive!</h1>
            <p>
              UniDrive es la solución perfecta para los estudiantes universitarios que buscan compartir un ride de manera fácil y segura. 
              A través de nuestra plataforma, puedes encontrar otros estudiantes que viajan por la misma ruta, ¡y lo mejor es que puedes 
              ganar dinero al ofrecer tu servicio de ride! Conecta, organiza y viaja.
            </p>
          </div>
        </div>
      </header>
      
      <section className="home-section">
        <h2>¿Cómo Funciona?</h2>
        <div className="home-steps">
          <div className="home-step">
            <img 
              src="/Images/icon-registro.png" 
              alt="Registro Icono" 
              className="home-step-icon"
            />
            <h3>1. Regístrate</h3>
            <p>Crea una cuenta con tu correo institucional y accede a nuestra plataforma exclusiva para estudiantes universitarios.</p>
          </div>
          <div className="home-step">
            <img 
              src="/Images/icon-publicar.png" 
              alt="Publicar Icono" 
              className="home-step-icon"
            />
            <h3>2. Publica tu Ride</h3>
            <p>Publica tu ruta de viaje en el mapa, indicando punto de salida y destino, y deja que otros estudiantes se sumen a tu ride.</p>
          </div>
          <div className="home-step">
            <img 
              src="/Images/icon-conducir.png" 
              alt="Conducir Icono" 
              className="home-step-icon"
            />
            <h3>3. ¡Conduce y Gana!</h3>
            <p>Ofrece tu servicio y cobra por el ride. ¡Ayuda a tus compañeros y haz que tu viaje sea más económico!</p>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <h2>Únete a la Comunidad UniDrive</h2>
        <p>Descubre cómo UniDrive puede transformar tu manera de viajar y compartir gastos. ¡Empieza a compartir tu ride hoy mismo!</p>
        <img
          src="/Images/Unete.jpg"
          alt="Únete a UniDrive"
          className="home-unete-image"
        />
        <Link to="/registrar">
          <button>
            ¡Regístrate Ahora!
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Home;


