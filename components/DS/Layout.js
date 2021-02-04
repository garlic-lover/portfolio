import styled, { ThemeProvider, keyframes } from "styled-components";
import { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import GlobalStyles from "./GlobalStyles";

import Cursor from "./Cursor/index";

export default function Layout({ children }) {
  const [theme, themeChange] = useState({
    background: "#f6f5f5",
    main: "#1687a7",
    color2: "#d3e0ea",
    color3: "#276678",
  });

  // white : #f6f5f5
  // less white : #f0e5d8

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main data-scroll data-scroll-container id="stick">
        <Cursor />
        <Header />
        <Container>{children}</Container>
        <Footer />
      </Main>
    </ThemeProvider>
  );
}

const AppearAnim = keyframes`
from {
    background-color : #276678;
    color : #f6f5f5;
}
to {
    background-color : #f6f5f5;
    color : #1687a7;
}
`;

const Main = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.main};
  animation: ${AppearAnim} 1.5s;
`;

const Container = styled.div``;
