import React, { useState, useEffect } from "react";

export const TimeContext = React.createContext({});

export interface TimeInterface {
  hours: number,
  minutes: number,
  seconds: number
}

const TimeProvider = ({ children }: { children: React.ReactNode }) => {
  const [Time, setTime] = useState<TimeInterface>({hours: 0, minutes: 0, seconds: 0});

  const updateTime = () => {
    const date = new Date();
    setTime({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 250);
    return () => clearInterval(interval);
  }, []);

  return <TimeContext.Provider value={Time as TimeInterface}>{children}</TimeContext.Provider>;
};

export default TimeProvider;
