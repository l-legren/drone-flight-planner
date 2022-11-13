import { LatLng } from "leaflet";
import React from "react";
import styled from "styled-components";

interface SideBarProps {
  routes: LatLng[];
}

const SideBarContainer = styled.div`
  display: flex;
`;

export const SideBar = ({ routes }: SideBarProps) => {
  return (
    <SideBarContainer>
      <div>SideBar</div>
    </SideBarContainer>
  );
};
