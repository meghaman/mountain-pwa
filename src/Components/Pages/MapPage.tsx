import React from "react";
import { geolocated, GeolocatedProps } from "react-geolocated";

const MapPage: React.FC<GeolocatedProps> = (props) => {
  let longitude = 0;
  let latitude = 0;

  if (props && props.coords) {
    longitude = props.coords.longitude;
    latitude = props.coords.latitude;
  }

  return (
    <div>
      Longitude: {longitude}, Latitude: {latitude}
    </div>
  );
};

export default geolocated({
  watchPosition: true,
})(MapPage);
