import React, { useState, useEffect } from "react";

export const TimeContext = React.createContext();

const TimeProvider = ({ children }) => {
  const [Time, setTime] = useState([12, 0, 0]);

  const updateTime = () => {
    const date = new Date();
    let currentTime = [date.getHours(), date.getMinutes(), date.getSeconds()];
    //Format Time
    currentTime.forEach((number, index) => {
      currentTime[index] = ("0" + number.toString()).slice(-2);
    });
    setTime(currentTime);
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 250);
    return () => clearInterval(interval);
  }, []);

  return <TimeContext.Provider value={Time}>{children}</TimeContext.Provider>;
};

export default TimeProvider;
