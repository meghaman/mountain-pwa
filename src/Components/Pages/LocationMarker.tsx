import React from "react";
import { Marker, useMapEvents } from "react-leaflet";
import { geolocated, GeolocatedProps } from "react-geolocated";
import { LatLngLiteral } from "leaflet";

const LocationMarker: React.FC<GeolocatedProps> = (props) => {
  const map = useMapEvents({
    click() {
      map.flyTo(position, map.getZoom());
    },
  });
  let position: LatLngLiteral = { lat: 0, lng: 0 };

  if (props && props.coords) {
    position.lng = props.coords.longitude;
    position.lat = props.coords.latitude;
  }

  return position === null ? null : <Marker position={position}></Marker>;
};

export default geolocated({
  watchPosition: true,
})(LocationMarker);
