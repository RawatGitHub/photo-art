import React, { useContext } from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

import themeList from '../data/themeList';
import ThemeContext from '../context/ThemeContext';

const ThemeSwitcherStyles = styled.div`
  label {
    --gap: 5px;
    --size: 20px;
    height: 30px;
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0 var(--gap);
    background: #cfc8f4;
    border-radius: 50px;
    position: relative;
    z-index: 1;
    .icon {
      height: var(--size);
      width: var(--size);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 75%;
      color: var(--white);
    }
  }
  input {
    height: 0;
    width: 0;
    display: none;
    visibility: hidden;
  }
  label::after {
    position: absolute;
    content: '';
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    left: var(--gap);
    height: var(--size);
    width: var(--size);
    background-color: var(--mediumSlateBlue);
    transition: 0.4s ease left;
    z-index: -1;
  }
  input:checked + label::after {
    /* transform: translateX(); */
    left: calc(100% - var(--size) - var(--gap));
  }
`;
function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeSwitcherStyles>
      <input
        type="checkbox"
        id="switcher"
        onChange={toggleTheme}
        checked={theme === themeList.dark}
      />
      <label htmlFor="switcher">
        <div className="icon">
          <FiSun />
        </div>
        <div className="icon">
          <FiMoon />
        </div>
      </label>
    </ThemeSwitcherStyles>
  );
}

export default ThemeSwitcher;
