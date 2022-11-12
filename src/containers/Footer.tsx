import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 55px;
  background-color: black;
`;

const FooterText = styled.h4`
  color: white;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>This is my footer</FooterText>
    </FooterWrapper>
  );
};
