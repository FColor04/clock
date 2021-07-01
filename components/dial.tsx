/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import styled from 'styled-components';

import { TimeContext, TimeInterface } from './timeDisplay/timeProvider';

const StyledDial = styled.div<{ theme: any, type: string, rotation: number }>`
  left: 50%;
  top: 50%;
  height: 100%;
  position: absolute;
  transform: translate(-50%, -50%)
    rotateZ(${({ rotation }) => `${rotation}deg`});
  &::after {
    --color: ${({ type, theme }) => {
    switch (type) {
      case 'hour':
        return theme.hourDialColor;
      case 'minute':
        return theme.minuteDialColor;
      case 'second':
        return theme.secondDialColor;
      default:
        return theme.primaryColor;
    }
  }};
    --size: ${({ type }) => {
    switch (type) {
      case 'hour':
        return '1.2rem';
      case 'minute':
        return '0.8rem';
      case 'second':
        return '0.6rem';
      default:
        return '1rem';
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

const Dial = (props: any) => {
  const time = useContext(TimeContext) as TimeInterface;
  let rotation = 0;
  switch (props.type) {
    case 'hour':
      rotation = (time.hours / 12 + time.minutes / 1440) * 360;
      break;
    case 'minute':
      rotation = (time.minutes / 60 + time.seconds / 3600) * 360;
      break;
    case 'second':
      rotation = (time.seconds / 60) * 360;
      break;
    default:
      break;
  }
  return <StyledDial rotation={rotation} {...props} />;
};

export default Dial;
