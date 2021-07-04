import React, { useState, useRef } from 'react';
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

const TimeInput = styled.input`
  padding: 0 4ch;
  font-size: 2rem;
  border-radius: 100vw;
  border: 1px solid black;
  margin: 1rem;
`;

const Timer = () => {
  const [modalToggled, setModalToggle] = useState(false);
  const [timerStatus, setTimerStatus] = useState(false);
  const timeInputRef = useRef(null);
  return (
    <CenterWrapper>
      {modalToggled && (
      <Modal callback={() => setModalToggle(false)}>
        <h2>Set Timer</h2>
        <form>
          Work in progress.
          {/* TODO: Add functionality to the timer */}
          <TimeInput type="time" ref={timeInputRef} step="1" />
          <TimeInput type="submit" value="Set" />
        </form>
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
