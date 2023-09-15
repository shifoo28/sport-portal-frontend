import React from "react";
import { Popup, Marker, TileLayer, MapContainer } from "react-leaflet";
import "./Map.css";

const Map = () => {
  return (
    <MapContainer
      center={[37.9133, 58.3753]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[37.95034, 58.39011]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
