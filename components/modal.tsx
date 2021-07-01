import React from 'react';
import styled from 'styled-components';

const StyledModalBackground = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
const StyledModal = styled.div`
  border-radius: 4rem;
  background-color: white;
  min-width: 40ch;
  min-height: 16rem;
  padding: 2rem 3.5rem;
  font-size: 1.3rem;
  & > h2 {
    margin-top: 0;
  }
`;

const Modal = () => (
  <StyledModalBackground>
    <StyledModal>
      <h2>Set timer</h2>
    </StyledModal>
  </StyledModalBackground>
);

export default Modal;
