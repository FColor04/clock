import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../utils/store';
import { Themes } from '../utils/themes';

const StyledWrapper = styled.div<{ ref: any }>`
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
  opacity: 0;
  transition: opacity 0.1s;
  pointer-events: none;
  z-index: 3;
  &:focus-within {
    opacity: 1;
    pointer-events: auto;
  }
`;

const Theme = styled.button<{ theme: any, path: string, fixed?: boolean, tabindex?: number }>`
  width: 3rem;
  height: 3rem;
  border-radius: 100vw;
  margin: 0.25rem;
  ${({ theme }) => theme.outset};
  background-image: url(${({ path }) => path});
  background-size: contain;
  border: 2px solid grey;
  transform: scale(100%);
  ${({ fixed }) => fixed
    && `
    position: fixed;
    bottom: 0.2rem;
    @media screen and (max-width: 600px) {
      bottom: 3.5rem;
    }
    right: 1.5rem;
    transform: scale(80%);
    z-index: 2;
  `}
`;

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const Wrapper = useRef<HTMLButtonElement>(null);
  const currentTheme = useSelector((state: any) => state.themeSlice.theme) || {};

  return (
    <>
      <Theme
        onClick={() => {
          (Wrapper.current?.childNodes[0] as HTMLElement).focus();
        }}
        fixed
        path={currentTheme.iconPath}
      />
      <StyledWrapper ref={Wrapper}>
        {Themes.map((theme, index) => (
          <Theme
            onClick={() => {
              dispatch(setTheme(index));
            }}
            key={theme.name}
            path={theme.iconPath}
            tabindex={4 + index}
          />
        ))}
      </StyledWrapper>
    </>
  );
};
export default ThemeToggle;
