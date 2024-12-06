import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header: React.FC = () => (
  <header className="header">
    <div className="header-left">
      <img
        src="/Images/Logo-texto.png"
        alt="UniDrive Logo"
        className="logo" />
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Inicio
        </Link>
        <Link to="/quienes-somos" className="nav-link">
          ¿Quiénes somos?
        </Link>
      </nav>
    </div>
    <div className="auth-links">
      <Link to="/login" className="auth-button">
        Iniciar Sesión
      </Link>
    </div>
  </header>
);

export default Header;

