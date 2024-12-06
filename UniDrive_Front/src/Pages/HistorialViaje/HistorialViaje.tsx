import React, { useState } from 'react';

interface Trip {
  date: string;
  time: string;
  user: string;
  origin: string;
  destination: string;
  price: number;
}

const tripData: Trip[] = [
  { date: '2024-12-01', time: '08:00', user: 'Juan Pérez', origin: 'Campus Norte', destination: 'Campus Sur', price: 50 },
  { date: '2024-12-02', time: '09:30', user: 'Ana García', origin: 'Campus Central', destination: 'Campus Este', price: 40 },
  { date: '2024-12-03', time: '11:00', user: 'Carlos López', origin: 'Residencias Universitarias', destination: 'Campus Oeste', price: 30 },
  { date: '2024-12-04', time: '13:00', user: 'María Fernández', origin: 'Campus Sur', destination: 'Campus Norte', price: 60 },
];

const TravelHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>(tripData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = tripData.filter(
      trip =>
        trip.date.toLowerCase().includes(value) ||
        trip.origin.toLowerCase().includes(value) ||
        trip.destination.toLowerCase().includes(value) ||
        trip.user.toLowerCase().includes(value) ||
        trip.price.toString().includes(value)
    );

    setFilteredTrips(filtered);
  };

  return (
    <div style={styles.fullPage}>
      <div style={styles.container}>
        <h1 style={styles.header}>Unidrive - Historial de Viajes</h1>
        <div style={styles.searchFilterContainer}>
          <input
            type="text"
            placeholder="Buscar por fecha, lugar, usuario o precio..."
            value={searchTerm}
            onChange={handleSearch}
            style={styles.searchBar}
          />
        </div>
        <div style={styles.tripsContainer}>
          {filteredTrips.length > 0 ? (
            filteredTrips.map((trip, index) => (
              <div key={index} style={styles.tripCard}>
                <p style={styles.tripCardText}><strong>Fecha:</strong> {trip.date}</p>
                <p style={styles.tripCardText}><strong>Hora:</strong> {trip.time}</p>
                <p style={styles.tripCardText}><strong>Usuario:</strong> {trip.user}</p>
                <p style={styles.tripCardText}><strong>Origen:</strong> {trip.origin}</p>
                <p style={styles.tripCardText}><strong>Destino:</strong> {trip.destination}</p>
                <p style={styles.tripCardText}><strong>Precio:</strong> ${trip.price}</p>
              </div>
            ))
          ) : (
            <p style={styles.noResults}>No se encontraron viajes para la búsqueda.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// CSS en formato de objeto JavaScript
const styles = {
  fullPage: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#E3F2FD', // Azul cielo claro
    display: 'flex',
    justifyContent: 'center', // Centrado horizontal
    alignItems: 'flex-start', // Alineación al inicio para que no se quede centrado verticalmente
    padding: '20px',
  },
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '30px', // Agregado espacio para mayor comodidad
    maxWidth: '1000px', // Mayor espacio en el contenedor
    width: '100%',
    backgroundColor: '#FFFFFF', // Fondo blanco del contenedor
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '30px',
    color: '#000000', // Letras negras
  },
  searchFilterContainer: {
    display: 'flex',
    marginBottom: '20px',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
    padding: '12px',
    border: '1px solid #90CAF9', // Azul claro para bordes
    borderRadius: '4px',
    width: '100%',
    outline: 'none',
  },
  tripsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px', // Espacio entre las tarjetas
  },
  tripCard: {
    border: '1px solid #BBDEFB', // Azul suave para bordes de tarjeta
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#FFFFFF', // Fondo blanco
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  tripCardText: {
    marginBottom: '8px',
    fontSize: '16px',
    color: '#000000',
  },
  noResults: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#757575',
    gridColumn: 'span 2',
  },
};

export default TravelHistory;