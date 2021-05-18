import { LatLngLiteral } from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { geolocated, GeolocatedProps } from "react-geolocated";
import { Grid } from "@material-ui/core";

interface IProps extends GeolocatedProps {
  center: LatLngLiteral;
  displayCoordinates?: boolean;
}

const MapLeaflet: React.FC<IProps> = (props) => {
  let position: LatLngLiteral = { lat: 0, lng: 0 };

  if (props && props.coords) {
    position.lng = props.coords.longitude;
    position.lat = props.coords.latitude;
  }

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
      {props.displayCoordinates && (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            Latitude: {position.lat}
          </Grid>
          <Grid item xs={12}>
            Longitude: {position.lng}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default geolocated({
  watchPosition: true,
})(MapLeaflet);
