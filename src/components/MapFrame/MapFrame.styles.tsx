import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 63px;
  left: 80px;
  z-index: 1000;
`;

export const ShowHideButton = styled.button`
  padding: 20px;
  background-color: black;
  color: white;
  border: 2px white solid;
  margin-right: 10px;
  width: 135px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  } 
`;

export const RestartButton = styled.button`
  padding: 20px;
  background-color: red;
  color: white;
  margin-left: 10px;
  border: 2px solid white;
  width: 135px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: red;
  } 
`;
