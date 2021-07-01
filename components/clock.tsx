import React, { useContext } from "react";
import styled from "styled-components";

import TimeProvider, { TimeContext, TimeInterface } from "./timeDisplay/timeProvider";

import TimeDisplay from "./timeDisplay/timeDisplay";
import Dial from "./dial";

const StyledClockFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3.7rem;
  margin: 1rem;
`;
const StyledClock = styled.div`
  --radius: min(90vw, 60vh, 500px);
  border-radius: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: var(--radius);
  height: var(--radius);
  ${({ theme }) => theme.outset};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 2rem auto;
`;
const StyledPip = styled.div<{theme: any, rotation: number}>`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  transform: translate(-50%, -50%)
    rotateZ(${({ rotation }) => rotation + "deg"});
  &::after {
    content: "";
    position: absolute;
    top: 1rem;
    height: ${({ rotation }) => (rotation % 90 == 0 ? "2rem" : "1rem")};
    width: 4px;
    border-radius: 100vw;
    background-color: ${({ rotation, theme }) =>
      rotation % 30 == 0 ? theme.primaryColor : theme.secondaryColor};
    transform: translateX(-50%);
  }
`;

let pips: number[] = [];
for (let i = 0; i < 60; i++) {
  pips[i] = i;
}

const CurrentTimeDisplay = () => {
  const time = useContext(TimeContext);
  return <TimeDisplay {...(time as TimeInterface)} size={3.7} animate />;
};

const Clock = () => (
  <StyledClockFrame>
    <TimeProvider>
      <StyledClock>
        {pips.map((pip) => (
          <StyledPip key={"pip-" + pip} rotation={pip * 6} />
        ))}
        <Dial type="hour" />
        <Dial type="minute" />
        <Dial type="second" />
        <CurrentTimeDisplay />
      </StyledClock>
    </TimeProvider>
  </StyledClockFrame>
);

export default Clock;
