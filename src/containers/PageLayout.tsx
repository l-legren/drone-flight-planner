import React, {ReactNode} from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styled from "styled-components";

const Body = styled.div`
  flex: 1;
`;

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const PageLayout = ({children}: {children: ReactNode}) => {
  return (
    <AppWrapper>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </AppWrapper>
  );
};
