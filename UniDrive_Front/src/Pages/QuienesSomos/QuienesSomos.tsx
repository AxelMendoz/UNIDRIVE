import React from 'react';
import './QuienesSomos.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>¿Quiénes Somos?</h1>
        <p>
          En UniDrive, somos un equipo comprometido con hacer que tus viajes universitarios sean más fáciles, económicos y sostenibles. 
          A través de nuestra plataforma, buscamos conectar a estudiantes que comparten rutas similares para ofrecer una experiencia de transporte colaborativo, 
          segura y accesible.
        </p>
      </header>

      <div className="about-us-section-block">
        <section className="about-us-section">
          <h2>Visión</h2>
          <p>
            Nuestra visión es ser la plataforma líder en movilidad estudiantil, proporcionando una alternativa de transporte compartido para estudiantes 
            que sea no solo económica, sino también respetuosa con el medio ambiente.
          </p>
        </section>

        <section className="about-us-section">
          <h2>Propósito</h2>
          <p>
            El propósito de **UniDrive** es facilitar la conexión entre estudiantes universitarios que viajan por rutas similares, ofreciendo una plataforma 
            segura y fácil de usar para compartir viajes.
          </p>
        </section>

        <section className="about-us-section">
          <h2>Términos y Condiciones</h2>
          <p>
            Los Términos y Condiciones de **UniDrive** se aplican a todos los usuarios de nuestra plataforma, regulando el uso de nuestros servicios y asegurando 
            que todos los viajes sean realizados de acuerdo con nuestras normativas de seguridad. 
            <a href="/terminos-y-condiciones">Lee nuestros Términos y Condiciones completos aquí.</a>
          </p>
        </section>

        <section className="about-us-section">
          <h2>Política de Privacidad</h2>
          <p>
            En **UniDrive**, nos tomamos muy en serio tu privacidad. Recopilamos solo la información necesaria para ofrecerte un servicio óptimo y seguro. 
            Tu información personal será tratada con la mayor confidencialidad y se utilizará exclusivamente para los fines de la plataforma. 
            <a href="/politica-de-privacidad">Consulta nuestra Política de Privacidad aquí.</a>
          </p>
        </section>

        <section className="about-us-section">
          <h2>Contacto</h2>
          <p>
            Si tienes alguna pregunta o inquietud, no dudes en contactarnos. Estamos aquí para ayudarte.
            <br />
            Correo electrónico: <a href="mailto:contacto@unidrive.com">contacto@unidrive.com</a>
            <br />
            Teléfono: +52 123 456 7890
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

