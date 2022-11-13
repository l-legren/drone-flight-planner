import React, { useState, SetStateAction, Dispatch } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, Polyline } from "react-leaflet";
import { PathDrawer } from "./PathDrawer/PathDrawer";
import * as L from 'leaflet'

interface MapFrameProps {
    addNewFlightPlan: Dispatch<SetStateAction<L.LatLng[][]>>
    selectedPlan: L.LatLng[] | undefined
}

export const MapFrame = ({addNewFlightPlan, selectedPlan}: MapFrameProps) => {
  const [initialPoint] = useState<L.LatLngExpression>([52.51028, 13.40789]);

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
        <PathDrawer addNewFlightPlan={addNewFlightPlan} />
        <ZoomControl position={'bottomleft'} />
        {selectedPlan && <Polyline positions={selectedPlan} />}
      </MapContainer>
    </>
  );
};
