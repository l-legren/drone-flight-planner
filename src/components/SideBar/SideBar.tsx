import { LatLng } from "leaflet";
import React from "react";
import * as S from './SideBar.styles'

interface SideBarProps {
  flightPlans: LatLng[][];
}

export const SideBar = ({ flightPlans }: SideBarProps) => {
  return (
    <S.SideBarContainer>
      <S.SideBarHeader>Choose your route</S.SideBarHeader>
      {flightPlans.length > 0 ? (
        <S.RoutesList>
          {flightPlans.map((route, idx) => (
            <S.SingleRoute key={idx*2}>{`Route ${idx + 1}`}</S.SingleRoute>
          ))}
        </S.RoutesList>
      ) : (
        <S.RouteText>No routes available</S.RouteText>
      )}
      <div>SideBar</div>
    </S.SideBarContainer>
  );
};
