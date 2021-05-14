import React, { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";

const LocationMarker: React.FC = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
};

export default LocationMarker;
