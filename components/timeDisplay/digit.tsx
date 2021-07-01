import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const DigitWrapper = styled.span<{length: number}>`
  width: ${({ length }) => length + "ch"};
  display: inline;
  position: relative;
`;

type DigitProps = {digit: number, length?: number, animate?: boolean};
const Digit = ({ digit, length = 2, animate = false } : DigitProps) => {
  const formattedDigit = "0"
    .repeat(length - 1)
    .concat(digit.toString())
    .slice(-length);

  return (
    <React.Fragment>
      {animate ? (
        <DigitWrapper length={length}>
          <AnimatePresence>
            <motion.span 
              key={"digit-" + digit}
              initial={{
                position: "absolute",
                rotateX: "90deg",
                translateY: "-1.5rem",
              }}
              animate={{
                position: "absolute",
                rotateX: "0deg",
                translateY: "0rem",
              }}
              exit={{
                position: "absolute",
                rotateX: "-90deg",
                translateY: "1.5rem",
                opacity: 0,
              }}
              transition={{ stiffness: 120, type: "spring" }}
            >
              {formattedDigit}
            </motion.span>
          </AnimatePresence>
        </DigitWrapper>
      ) : (
        <>{formattedDigit}</>
      )}
    </React.Fragment>
  );
};

export default Digit;
