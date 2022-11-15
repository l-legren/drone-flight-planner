import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  Polyline,
} from "react-leaflet";
import { PathDrawer } from "./PathDrawer/PathDrawer";
import * as L from "leaflet";
import { SideBar } from "../SideBar/SideBar";
import * as S from './MapFrame.styles'

export const MapFrame = () => {
  const [initialPoint] = useState<L.LatLngExpression>([52.51028, 13.40789]);
  const [flightPlans, setFlightPlans] = useState<L.LatLng[][]>([]);
  const [selectedPlan, setSelectedPlan] = useState<L.LatLng[] | undefined>(
    undefined
  );
  const [isBarVisible, setIsBarVisible ] = useState<boolean>(true);

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
        <PathDrawer addNewFlightPlan={setFlightPlans} />
        <ZoomControl position={"bottomleft"} />
        {selectedPlan && <Polyline positions={selectedPlan} />}
      </MapContainer>
      <S.ButtonContainer>
        <S.ShowHideButton onClick={() => setIsBarVisible(!isBarVisible)}>
          {isBarVisible ? "Hide Plans" : "Show Plans"}
        </S.ShowHideButton>
        <S.RestartButton onClick={() => window.location.reload()}>
          Reset
        </S.RestartButton>
      </S.ButtonContainer>
      {isBarVisible && (
        <SideBar flightPlans={flightPlans} selectPlan={setSelectedPlan} />
      )}
    </>
  );
};
