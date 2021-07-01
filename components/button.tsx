import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled.button<{ onClick?: any, size?: number, square?: boolean, icon?: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size = 2, square = false }) => (square ? `${size}rem` : '30ch')};
  height: ${({ size = 2 }) => `${size}rem`};
  font-size: ${({ size = 2 }) => `${size / 2}rem`};
  border-radius: 100vw;
  border: none;
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.navigationColor};
  padding: ${({ size = 2 }) => `${size / 2}rem`};
`;

const Button = ({
  onClick = () => {}, size = 2, square = false, icon, children,
} : any) => (
  <StyledButton onClick={onClick} size={size} square={square}>
    {children}
    {icon && <FontAwesomeIcon icon={icon} />}
  </StyledButton>
);

export default Button;
