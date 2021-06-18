import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TimeDisplay = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Courier Prime", monospace;
`;

const stopwatch = () => {
  const [time, setTime] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState("00:00.00"); //hh:mm:ss.ms
  const [measuring, setMeasuring] = useState(false);
  let interval;
  let startMeasurement;
  let stopMeasurement;
  let pauseMeasurement;
  let lapTime;

  //Start
  useEffect(() => {
    const update = () => {
      setStartTime(new Date());
      interval = setInterval(() => {
        setTime(new Date());
      }, 10);
      setMeasuring(true);
    };
    window.addEventListener("start-measurement", update);
    return () => {
      window.removeEventListener("start-measurement", update);
      clearInterval(interval);
    };
  }, []);

  //Stop
  useEffect(() => {
    const stop = () => {
      setTime(new Date());
      clearInterval(interval);
      setMeasuring(false);
    };
    window.addEventListener("stop-measurement", stop);
    return () => window.removeEventListener("stop-measurement", stop);
  }, []);

  //Render Time
  useEffect(() => {
    let timeDiff = new Date(time - startTime - 3600000);

    let h = timeDiff.getHours();
    let m = timeDiff.getMinutes();
    let s = timeDiff.getSeconds();
    let ms = timeDiff.getMilliseconds();

    const t = [h, m, s, ms];

    //Format Time, works because const means constant reference in this case
    t.forEach((number, index) => {
      if (index === 3) {
        t[3] = ("00" + number.toString()).slice(-3);
      } else {
        t[index] = ("0" + number.toString()).slice(-2);
      }
    });
    if (t[0] > 0) setFormattedTime(`${t[0]}:${t[1]}:${t[2]}.${t[3]}`);
    else setFormattedTime(`${t[1]}:${t[2]}.${t[3]}`);
  }, [time]);

  return (
    <div>
      <TimeDisplay>{formattedTime}</TimeDisplay>
      {measuring === true ? (
        <div
          onClick={() => {
            window.dispatchEvent(new Event("stop-measurement"));
          }}
        >
          Stop
        </div>
      ) : (
        <div
          onClick={() => {
            window.dispatchEvent(new Event("start-measurement"));
          }}
        >
          Start
        </div>
      )}
      <div>Lap</div>
    </div>
  );
};

export default stopwatch;
