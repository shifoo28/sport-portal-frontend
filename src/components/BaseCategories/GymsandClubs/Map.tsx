import React from "react";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./css/Map.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IGymsAndClubs } from "../../../redux/interfaces/gymsclubs";

const markerIcon = new Icon({ iconUrl: "/icons/gymsclubs/location.png" });

const Map = () => {
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const gymsclubs: IGymsAndClubs[] = useSelector(
    (state: RootState) => state.gymsclubs.gymsclubs
  );

  // Function
  const handleClick = () => {
    window.scrollTo({ top: 2000, behavior: "smooth" });
  };

  return (
    <MapContainer center={[37.9502, 58.3832]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {gymsclubs.map((gc, index) => {
        return (
          <Marker
            position={[gc.latitude, gc.longitude]}
            icon={markerIcon}
            key={index}
            alt=""
            riseOnHover
            eventHandlers={{
              click: handleClick,
            }}
          >
            <Popup>{prefLang === "Tm" ? gc.nameTm : gc.nameRu}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
