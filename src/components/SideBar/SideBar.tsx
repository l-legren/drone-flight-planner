import { LatLng } from "leaflet";
import React from "react";
import * as S from './SideBar.styles'

interface SideBarProps {
  flightPlans: LatLng[][];
  selectPlan: (val: LatLng[]) => void;
}

export const SideBar = ({ flightPlans, selectPlan }: SideBarProps) => {

  return (
    <S.SideBarContainer>
      <S.SideBarHeader>Choose your route</S.SideBarHeader>
      {flightPlans.length > 0 ? (
        <S.RoutesList>
          {flightPlans.map((route, idx) => (
            <S.SingleRoute onClick={() => selectPlan(route)} key={idx*2}>{`Route ${idx + 1}`}</S.SingleRoute>
          ))}
        </S.RoutesList>
      ) : (
        <S.RouteText>No routes available</S.RouteText>
      )}
      <div>SideBar</div>
    </S.SideBarContainer>
  );
};
