import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [emailName, setEmailName] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!emailName || !emailDomain || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Validar formato de correo electrónico
    const fullEmail = `${emailName}${emailDomain}`;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(fullEmail)) {
      setError('Por favor, introduce un correo válido.');
      return;
    }

    // Validar contraseña (al menos 6 caracteres)
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Hacer la solicitud de login al backend
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: fullEmail,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Si el login es exitoso, guardamos el token (si es necesario) y redirigimos
        localStorage.setItem('token', data.access_token);
        navigate('/dash'); // Redirige al dashboard
      } else {
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      setError('Error en la conexión con el servidor');
    }
  };

  return (
    <div className="login-container">
      <div className="back-to-home">
        <Link to="/">
          <button className="back-button">Regresar al Inicio</button>
        </Link>
      </div>

      <div className="login-content">
        <img
          src="/Images/imagen-login.jpg"
          alt="Imagen decorativa para login"
          className="login-image"
        />
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Iniciar Sesión</h2>
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="email-name">Correo electrónico:</label>
            {`${emailName}${emailDomain}` && (
              <p className="preview-email">Tu correo: {`${emailName}${emailDomain}`}</p>
            )}
            <div className="email-input-group">
              <input
                type="text"
                id="email-name"
                value={emailName}
                onChange={(e) => setEmailName(e.target.value)}
                placeholder="Introduce tu correo"
              />
              <select
                id="email-domain"
                value={emailDomain}
                onChange={(e) => setEmailDomain(e.target.value)}
              >
                <option value="" disabled>
                  Selecciona un dominio
                </option>
                <option value="@utcancun.edu.mx">@utcancun.edu.mx</option>
                <option value="@anahuac.mx">@anahuac.mx</option>
                <option value="@lasalle.mx">@lasalle.mx</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduce tu contraseña"
            />
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
