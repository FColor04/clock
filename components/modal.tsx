import React from 'react';
import styled from 'styled-components';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './button';

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
  z-index: 8;
`;
const StyledModal = styled.div`
  border-radius: 4rem;
  background-color: white;
  min-width: 40ch;
  min-height: 16rem;
  padding: 2rem 2.5rem;
  font-size: 1.3rem;
  & > h2 {
    margin-top: 0;
  }
  z-index: 9;
  display: grid;
  grid-template-columns: auto 3rem;
  grid-template-rows: 1fr;
`;

const Modal = ({ children, callback }:{ children: React.ReactNode, callback: Function }) => (
  <StyledModalBackground>
    <StyledModal>
      <div>
        { children }
      </div>
      <Button
        type="button"
        onClick={() => {
          callback();
        }}
        size={3}
        square
      >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </StyledModal>
  </StyledModalBackground>
);

export default Modal;
