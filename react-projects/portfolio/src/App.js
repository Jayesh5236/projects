import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar/index";
import Hero from "./components/Herosection";
import Skills from "./components/Skills/index";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
backgrouund:linear-gradient{
  38.73,
  rgba(204,0,187,0.15)0%,
  rgba(201,32,184,0)50%
},
linear-gradient{
  141.27deg,
  rgba(0,70,209,0)50%,
  rgba(0,70,209,0.15)100%,
}
width:100%;
clip-path : polygon(0 0,100% 0,100% 100%,30% 98% ,0 100%,)
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        <Hero />
        <Wrapper><Skills /></Wrapper>
        
      </Body>
    </ThemeProvider>
  );
}

export default App;