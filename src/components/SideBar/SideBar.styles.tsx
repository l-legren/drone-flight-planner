import styled from "styled-components";

export const SideBarContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 10px;
  background-color: black;
  display: flex;
  flex-direction: column;
  width: 150px;
  min-height: 100px;
  max-height: 250px;
  z-index: 10000;
  border-radius: 5px;
`;

export const SideBarHeader = styled.h4`
  color: white;
  font-size: larger;
  padding: 10px;
  margin: 0 auto;
  cursor: default;
`;

export const RouteText = styled.p`
  color: white;
  cursor: default;
  padding: 5px;
`;

export const RoutesList = styled.ul`
    padding: 5px;
`;

export const SingleRoute = styled.div`
  cursor: pointer;
  color: white;
  padding: 5px;
`;