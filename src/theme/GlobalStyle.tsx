import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Courier New', 'sans-serif';
  }

  .sr-only {
    display: none;
  }

  // Not using the delete and edit button, therefore not needed to render them
  .leaflet-draw.leaflet-control > .leaflet-draw-section ~ .leaflet-draw-section {
    display: none;
 }
`;
