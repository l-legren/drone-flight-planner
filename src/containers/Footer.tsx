import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 55px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.h4`
  color: white;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>Carlos Leret. November 2022 ©️</FooterText>
    </FooterWrapper>
  );
};
