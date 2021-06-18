import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setLightTheme, setDarkTheme, setPearTheme } from "../utils/store";
import { lightTheme, darkTheme, pearTheme } from "../utils/themes";
const StyledWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  @media screen and (max-width: 600px) {
    bottom: 3.5rem;
  }
  right: 2rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.highlightColor};
  ${({ theme }) => theme.outset};
  border-radius: 1rem;
`;

const Theme = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100vw;
  margin: 0.25rem;
  ${({ theme }) => theme.outset};
  background-image: url(${({ path }) => path});
  background-size: contain;
  border: 2px solid grey;
  transform: scale(100%);
  ${({ fixed }) =>
    fixed &&
    `
    position: fixed;
    bottom: 0.2rem;
    @media screen and (max-width: 600px) {
      bottom: 3.5rem;
    }
    right: 1.5rem;
    transform: scale(80%);
  `}
`;

const ThemeToggle = () => {
  const [toggled, toggle] = useState(false);
  const dispatch = useDispatch();
  let theme = useSelector((state) => state.themeSlice.theme) || {};

  return (
    <>
      {toggled ? (
        <StyledWrapper>
          <Theme
            onClick={() => {
              dispatch(setLightTheme());
              toggle(!toggled);
            }}
            path={lightTheme.iconPath}
          />
          <Theme
            onClick={() => {
              dispatch(setDarkTheme());
              toggle(!toggled);
            }}
            path={darkTheme.iconPath}
          />
          <Theme
            onClick={() => {
              dispatch(setPearTheme());
              toggle(!toggled);
            }}
            path={pearTheme.iconPath}
          />
        </StyledWrapper>
      ) : (
        <Theme
          onClick={() => {
            toggle(!toggled);
          }}
          fixed
          path={theme.iconPath}
        ></Theme>
      )}
    </>
  );
};
export default ThemeToggle;
