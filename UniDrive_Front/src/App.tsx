import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registrar from './Pages/Registrar/Registrar';
import BuscarRide from './Pages/CrearRide/CrearRide';
import CrearRide from './Pages/CrearRide/CrearRide';
import Sidebar from './Pages/Dashboard/Dashboard';
import QuienesSomos from './Pages/QuienesSomos/QuienesSomos';
import HistorialViaje from './Pages/HistorialViaje/HistorialViaje'; // Nueva importación

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/dash';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/registrar"
          element={<Registrar onRegister={(data) => console.log('Datos de registro:', data)} />}
        />
        <Route path="/BuscarRide" element={<BuscarRide />} />
        <Route path="/crear-ride" element={<CrearRide />} />
        <Route path="/dash" element={<Sidebar />} />
        <Route path="/historial-viajes" element={<HistorialViaje />} /> {/* Nueva ruta */}
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
