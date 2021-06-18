import React, { useContext } from "react";
import styled from "styled-components";
import CurrentTimeDisplay from "./currentTimeDisplay";
import TimeProvider, { TimeContext } from "./timeProvider";

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
const StyledDot = styled.div`
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

const StyledDial = styled.div`
  left: 50%;
  top: 50%;
  height: 100%;
  position: absolute;
  transform: translate(-50%, -50%)
    rotateZ(${({ rotation }) => rotation + "deg"});
  &::after {
    --color: ${({ type, theme }) => {
      switch (type) {
        case "hour":
          return theme.hourDialColor;
        case "minute":
          return theme.minuteDialColor;
        case "second":
          return theme.secondDialColor;
      }
    }};
    --size: ${({ type }) => {
      switch (type) {
        case "hour":
          return "1.2rem";
        case "minute":
          return "0.8rem";
        case "second":
          return "0.6rem";
      }
    }};
    content: "";
    position: absolute;
    top: 4rem;
    height: var(--size);
    width: var(--size);
    border-radius: 100vw;
    transform: translate(-50%, -50%);
    background-color: var(--color);
    box-shadow: 0 0 1rem -0.1rem var(--color);
    z-index: 1;
  }
`;

const Dial = (props) => {
  const Time = useContext(TimeContext);
  let rotation = 0;
  switch (props.type) {
    case "hour":
      rotation = (Time[0] / 12 + Time[1] / 1440) * 360;
      break;
    case "minute":
      rotation = (Time[1] / 60 + Time[2] / 3600) * 360;
      break;
    case "second":
      rotation = (Time[2] / 60) * 360;
      break;
  }
  return <StyledDial rotation={rotation} {...props} />;
};

let pips = [];
for (let i = 0; i < 60; i++) {
  pips[i] = i;
}

const Clock = () => (
  <StyledClockFrame>
    <TimeProvider>
      <StyledClock>
        {pips.map((pip) => (
          <StyledDot key={"pip-" + pip} rotation={pip * 6} />
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
