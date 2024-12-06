import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CrearRide.css";

// Definir las ubicaciones y las coordenadas
const locations = {
  "Universidad Tecnológica": [21.04966687410658, -86.84687016055352],
  "Plaza Las Américas": [21.14693396934119, -86.82236789178282],
  "Mercado 23": [21.168892924238012, -86.82726258623381],
  "Bonfil": [21.088043273148816, -86.84411226624552],
};

interface Ride {
  id: number;
  from: string;
  to: string;
  driver: string;
  price: number;
  duration: string;
  description: string;
  coordinates: [number, number];
}

const CrearRide: React.FC = () => {
  const [origin, setOrigin] = useState<string>("Universidad Tecnológica");
  const [destination, setDestination] = useState<string>("Plaza Las Américas");
  const [rides, setRides] = useState<Ride[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<Ride | null>(null); // Para la ruta seleccionada

  // Lista de viajes predeterminados
  useEffect(() => {
    const mockRides: Ride[] = [
      {
        id: 1,
        from: "Universidad Tecnológica",
        to: "Plaza Las Américas",
        driver: "Juan Pérez",
        price: 150,
        duration: "20 minutos",
        description: "Viaje cómodo y seguro",
        coordinates: locations["Plaza Las Américas"],
      },
      {
        id: 2,
        from: "Universidad Tecnológica",
        to: "Mercado 23",
        driver: "María López",
        price: 100,
        duration: "15 minutos",
        description: "Espacio para 3 personas",
        coordinates: locations["Mercado 23"],
      },
      {
        id: 3,
        from: "Universidad Tecnológica",
        to: "Bonfil",
        driver: "Carlos Gómez",
        price: 200,
        duration: "25 minutos",
        description: "Confortable y rápido",
        coordinates: locations["Bonfil"],
      },
    ];
    setRides(mockRides);
  }, []);

  const handleRouteSelect = (from: string, to: string) => {
    const selected = rides.find(
      (ride) => ride.from === from && ride.to === to
    );
    setSelectedRoute(selected || null);
    setOrigin(from);
    setDestination(to);
  };

  // Calcular el punto medio entre el origen y el destino
  const getCenter = () => {
    const originCoords = locations[origin];
    const destinationCoords = locations[destination];
    const lat = (originCoords[0] + destinationCoords[0]) / 2;
    const lng = (originCoords[1] + destinationCoords[1]) / 2;
    return [lat, lng];
  };

  return (
    <div className="search-ride-container">
      <div className="search-bar">
        <div className="search-input-container">
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="select-box"
          >
            {Object.keys(locations).map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="search-input-container">
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="select-box"
          >
            {Object.keys(locations).map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <button
          className="search-button"
          onClick={() => handleRouteSelect(origin, destination)}
        >
          Seleccionar Ruta
        </button>
      </div>

      {/* Mostrar el mapa solo cuando una ruta haya sido seleccionada */}
      {selectedRoute && (
        <MapContainer
          key={`${origin}-${destination}`} // Asegura que el mapa se vuelva a renderizar
          center={getCenter()} // Centra el mapa en el punto medio
          zoom={13}
          style={{ height: "500px", width: "100%", marginTop: "20px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marcador de Origen */}
          <Marker position={locations[origin]}>
            <Popup>{origin}</Popup>
          </Marker>
          {/* Marcador de Destino */}
          <Marker position={locations[destination]}>
            <Popup>{destination}</Popup>
          </Marker>

          {/* Dibuja una línea entre el origen y el destino */}
          <Polyline
            positions={[locations[origin], locations[destination]]}
            color="blue"
          />
        </MapContainer>
      )}

      {/* Información del viaje seleccionado */}
      {selectedRoute && (
        <div className="ride-info">
          <h3>Detalles del Viaje</h3>
          <p><strong>Conductor:</strong> {selectedRoute.driver}</p>
          <p><strong>Precio:</strong> ${selectedRoute.price}</p>
          <p><strong>Duración:</strong> {selectedRoute.duration}</p>
          <p><strong>Descripción:</strong> {selectedRoute.description}</p>
        </div>
      )}
    </div>
  );
};

export default CrearRide;
