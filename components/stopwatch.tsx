/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useEffect, useState, useRef, Children,
} from 'react';
import styled from 'styled-components';
import {
  faPlay,
  faFlag,
  faPause,
  faHistory,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import TimeDisplay from './timeDisplay/timeDisplay';

const StopwatchWrapper = styled.div`
  display: grid;
  justify-items: center;
  max-height: calc(100vh - 16rem);
  grid-template-rows: 1fr 1fr 8fr;
`;
const ButtonsWrapper = styled.div`
  height: 6rem;
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100vw;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.navigationColor};
`;

const StyledLapList = styled.ol<{ theme: any, scale: number, ref?: any }>`
  width: 37rem;
  @media screen and (max-width: 400px), screen and (max-height: 400px) {
    width: 95vw;
  }
  background: ${({ theme }) => theme.dimBackgroundColor};
  border-radius: 2rem;
  overflow: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transform: scale(${({ scale }) => `${scale ?? 100}%`});
  transition: transform 0.4s;
  & > li {
    width: 100%;
    height: 5rem;
    margin: 0.5rem auto;
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.dimmerBackgroundColor};
    font-size: 2rem;
    font-family: "Courier Prime", monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    & > span {
      margin-left: auto;
      width: 3rem;
      height: 3rem;
      background-color: ${({ theme }) => theme.dimBackgroundColor};
      color: ${({ theme }) => theme.secondDialColor};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100vw;
      cursor: pointer;
    }
  }
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.secondDialColor};
    border-radius: 100vw;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.minuteDialColor};
  }
`;

const LapList = ({ scale, children } : { scale: number, children: React.ReactNode }) => {
  const LapListRef = useRef<HTMLElement>(null);
  const [lastChildCount, setLastChildCount] = useState(0);
  useEffect(() => {
    if (lastChildCount < Children.count(children)) {
      const ref: HTMLElement = LapListRef.current as any;
      ref.scrollTop = ref.scrollHeight;
    }
    setLastChildCount(Children.count(children));
  }, [children]);
  return (
    <StyledLapList ref={LapListRef} scale={scale}>
      {children}
    </StyledLapList>
  );
};

const stopwatch = () => {
  interface TimeObjectInterface {
    hours?: number,
    minutes: number,
    seconds: number,
    milliSeconds?: number
  }
  const [time, setTime] = useState(0);
  const [timeObj, setTimeObj] = useState<TimeObjectInterface>();
  const [measuring, setMeasuring] = useState(false);
  const [laps, setLaps] = useState<TimeObjectInterface[]>([]);
  let interval: any;
  let counter: number = 0;// For some reason didn't work when time state was used in place of this

  // Reset stopwatch
  useEffect(() => {
    const reset = () => {
      counter = 0;
      setTime(0);
    };
    window.addEventListener('reset-sw', reset);
    return () => {
      window.removeEventListener('reset-sw', reset);
    };
  }, []);

  // Resume stopwatch
  useEffect(() => {
    const update = () => {
      interval = setInterval(() => {
        counter += 13;
        setTime(counter); // setTime(time + 13); does not work
      }, 13);
      setMeasuring(true);
    };
    window.addEventListener('resume-sw', update);
    return () => {
      window.removeEventListener('resume-sw', update);
      clearInterval(interval);
    };
  }, []);

  // Pause stopwatch
  useEffect(() => {
    const pause = () => {
      clearInterval(interval);
      setMeasuring(false);
    };
    window.addEventListener('pause-sw', pause);
    return () => window.removeEventListener('pause-sw', pause);
  }, []);
  // Lap time
  useEffect(() => {
    const lapTime = () => {
      setLaps([...laps, timeObj] as TimeObjectInterface[]);
    };
    window.addEventListener('lap-sw', lapTime);
    return () => window.removeEventListener('lap-sw', lapTime);
  }, [laps, setLaps, timeObj]);

  useEffect(() => {
    const timeDiff = new Date(time);
    timeDiff.setUTCHours(-1);
    setTimeObj({
      hours: timeDiff.getHours(),
      minutes: timeDiff.getMinutes(),
      seconds: timeDiff.getSeconds(),
      milliSeconds: timeDiff.getMilliseconds(),
    });
  }, [time]);

  return (
    <StopwatchWrapper>
      <TimeDisplay {...(timeObj as TimeObjectInterface)} size={4.5} />
      <ButtonsWrapper>
        {measuring === true ? (
          <>
            <Icon onClick={() => window.dispatchEvent(new Event('pause-sw'))}>
              <FontAwesomeIcon icon={faPause} />
            </Icon>
            <Icon onClick={() => window.dispatchEvent(new Event('lap-sw'))}>
              <FontAwesomeIcon icon={faFlag} />
            </Icon>
          </>
        ) : (
          <>
            <Icon onClick={() => window.dispatchEvent(new Event('resume-sw'))}>
              <FontAwesomeIcon icon={faPlay} />
            </Icon>
            <Icon onClick={() => window.dispatchEvent(new Event('reset-sw'))}>
              <FontAwesomeIcon icon={faHistory} />
            </Icon>
          </>
        )}
      </ButtonsWrapper>
      <LapList scale={laps.length !== 0 ? 100 : 0}>
        {laps.map((lapTime, index) => (
          <motion.li
            initial={{ scaleX: '0%' }}
            animate={{ scaleX: '100%' }}
            // eslint-disable-next-line react/no-array-index-key
            key={`lap-${index}`}
          >
            {index + 1}
            {'. '}
            <TimeDisplay {...lapTime} size={2.8} />
            <span
              onClick={() => {
                const filteredLaps = laps.filter(
                  (element, fIndex) => fIndex !== index,
                );
                setLaps(filteredLaps);
              }}
              aria-hidden="true"
            >
              <FontAwesomeIcon icon={faMinus} />
            </span>
          </motion.li>
        ))}
      </LapList>
    </StopwatchWrapper>
  );
};

export default stopwatch;
