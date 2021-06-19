import React from "react";
import styled from "styled-components";

import Navigation from "../components/navigation";
import ThemeToggle from "../components/themeToggle";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8rem auto 8rem;
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const MainLayout = ({ children }) => (
  <StyledWrapper>
    {children}
    <Navigation />
    <ThemeToggle />
  </StyledWrapper>
);

export default MainLayout;
