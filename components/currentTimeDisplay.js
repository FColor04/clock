import React, { useContext } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { TimeContext } from "./timeProvider";

const NumberWrapper = styled.div`
  display: relative;
  width: 2ch;
  height: 4rem;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8ch;
  font-family: "Courier Prime", monospace;
`;

const CurrentTimeDisplay = () => {
  const time = useContext(TimeContext) ?? ["12", "00", "00"];

  const motionProps = {
    initial: {
      rotateX: "-90deg",
      translateY: "1.5rem",
    },
    animate: {
      position: "absolute",
      rotateX: "0deg",
      translateY: "0rem",
    },
    exit: {
      rotateX: "90deg",
      translateY: "-1.5rem",
      opacity: 0,
    },
    transition: { stiffness: 120, type: "spring" },
  };

  return (
    <TimeWrapper>
      {time.map((number, index) => (
        <React.Fragment key={"Time number " + index}>
          <NumberWrapper>
            <AnimatePresence>
              <motion.div {...motionProps} key={"h-" + number}>
                {number}
              </motion.div>
            </AnimatePresence>
          </NumberWrapper>
          {index < 2 && ":"}
        </React.Fragment>
      ))}
    </TimeWrapper>
  );
};

export default CurrentTimeDisplay;
