import React from 'react';
import styled from 'styled-components';
import Digit from './digit';

const TimeWrapper = styled.div<{ size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Courier Prime", monospace;
  font-size: ${({ size = 3.7 }) => `${size}rem`};
  & > span {
    height: ${({ size = 3.7 }) => `${size}rem`};
  }
`;

type TimeDisplayProps = {
  hours?: number,
  minutes: number,
  seconds: number,
  milliSeconds?: number,
  animate?: boolean,
  size: number,
};

const TimeDisplay = ({
  hours = 0,
  minutes,
  seconds,
  milliSeconds,
  animate = false,
  size,
}: TimeDisplayProps) => (
  <TimeWrapper size={size}>
    {hours > 0 && <Digit digit={hours} animate={animate} />}
    {hours > 0 && ':'}
    <Digit digit={minutes ?? 0} animate={animate} />
    :
    <Digit digit={seconds ?? 0} animate={animate} />
    {milliSeconds != null && '.'}
    {milliSeconds != null && (
    <Digit digit={milliSeconds} length={3} animate={animate} />
    )}
  </TimeWrapper>
);

export default TimeDisplay;
