import { LatLngExpression } from "leaflet";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PathDrawer } from "./PathDrawer/PathDrawer";
export const MapFrame = () => {
  const [initialPoint] = useState<LatLngExpression>([52.51028, 13.40789]);

  return (
    <>
      <MapContainer
        center={initialPoint}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={initialPoint}>
          <Popup>
            Welcome to our Berlin office <br /> Enjoy the views.
          </Popup>
        </Marker>
        <PathDrawer />
      </MapContainer>
    </>
  );
};
