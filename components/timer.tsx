import React, { useState } from 'react';
import styled from 'styled-components';
import {
  faPlay,
  faPause,
  faHistory,
} from '@fortawesome/free-solid-svg-icons';
import Modal from './modal';
import TimeDisplay from './timeDisplay/timeDisplay';
import Button from './button';

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  width: 60ch;
  & > * {
    flex-grow: 1;
    margin: 0 0.5rem;
  }
`;

const Timer = () => {
  const [modalToggled, setModalToggle] = useState(false);
  const [timerStatus, setTimerStatus] = useState(false);
  return (
    <CenterWrapper>
      {modalToggled && (
      <Modal callback={() => setModalToggle(false)}>
        <h2>Set Timer</h2>
        <br />
        00:00:00
      </Modal>
      )}
      <TimeDisplay minutes={0} seconds={0} size={5} />
      <Row>
        <Button type="button" onClick={() => setModalToggle(true)} size="4">
          Set Timer
        </Button>
        <Button type="button" onClick={() => setTimerStatus(!timerStatus)} size="4" icon={timerStatus ? faPause : faPlay} />
        <Button type="button" onClick={() => setTimerStatus(!timerStatus)} size="4" icon={faHistory} />
      </Row>
    </CenterWrapper>
  );
};

export default Timer;
