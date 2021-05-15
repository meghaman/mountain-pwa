import { LatLngLiteral } from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";

interface IProps {
  center: LatLngLiteral;
}

const MapLeaflet: React.FC<IProps> = (props) => {
  return (
    <div>
      <MapContainer
        center={props.center}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        {props.children}
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;
