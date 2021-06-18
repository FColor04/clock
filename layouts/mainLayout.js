import React from "react";
import styled from "styled-components";

import Navigation from "../components/navigation";
import ThemeToggle from "../components/themeToggle";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8rem auto 8rem;
  height: 100vh;
  width: 100vw;
`;

const MainLayout = ({ children }) => (
  <StyledWrapper>
    {children}
    <Navigation />
    <ThemeToggle />
  </StyledWrapper>
);

export default MainLayout;
