import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode,
  size?: number
};

const StyledHeader = styled.h1<{size: number}>`
  font-size: ${({ size }) => size + "rem"};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ children, size = 4 } : Props) => (
  <StyledHeader size={size}>{children}</StyledHeader>
);

export default Header;
