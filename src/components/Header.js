import React, { useEffect, useState, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import themeList from '../data/themeList';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
  border-bottom: 1px solid var(--mediumSlateBlue);
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
  nav ul li {
    display: inline-block;
    margin: 0 0.5rem;
    a {
      font-size: 1.6rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
    }
    &:hover {
      a {
        text-decoration: underline;
      }
    }
    a.active {
      text-decoration: underline;
    }
  }
  .navMenu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .menuIcon,
  .closeIcon {
    height: 30px;
    width: 30px;
    cursor: pointer;
    padding: 3px;
    margin-left: 10px;
    transition: all 0.2s ease;
    svg {
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
    }
    &:hover {
      background-color: #8080803b;
      border-radius: 4px;
    }
  }
  .closeIcon {
    position: absolute;
    top: 10px;
    right: 10px;
    &:hover {
      background-color: #8080803b;
      svg {
        color: white;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      width: 90%;
      max-width: 250px;
      top: 0;
      right: 0;
      height: 100vh;
      z-index: 100;
      background-color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--lightBlue_2)' : 'var(--darkBlue_4)'};
      transition: 0.3s ease-in-out transform;
      overflow: hidden;
      z-index: 100;
      transform: translateX(100%);
    }
    nav.open {
      box-shadow: -1px 4px 10px 3px rgb(0 0 0 / 16%);
      transform: translateX(0);
    }
    nav ul li {
      display: block;
      text-align: center;
      width: 100%;
      margin: 0.5rem 0;
      a {
        display: block;
        width: 100%;
      }
    }
  }
`;
const Header = () => {
  const headerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
      document.body.style.overflow = '';
    };

    if (isNavOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isNavOpen]);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      window.addEventListener('scroll', () => {
        if (headerRef.current && window.scrollY >= 100) {
          headerRef.current.style.boxShadow =
            '0px 0px 10px 0px rgba(0, 0, 0, 0.5)';
        } else {
          headerRef.current.style.boxShadow = 'none';
        }
      });
    });
  }, []);
  return (
    <HeaderStyles ref={headerRef}>
      <div className="container">
        <div className="navigation">
          <Logo />
          <div className="navMenu">
            <nav className={isMobile && isNavOpen ? 'open' : undefined}>
              {isMobile && (
                <div
                  className="closeIcon"
                  role="button"
                  tabIndex="0"
                  onClick={() => setIsNavOpen(false)}
                  onKeyDown={() => setIsNavOpen(false)}
                >
                  <FiX />
                </div>
              )}
              <ul>
                <li>
                  <Link to="home" smooth activeClass="active" spy>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="services" smooth activeClass="active" spy>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth activeClass="active" spy>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth activeClass="active" spy>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <ThemeSwitcher />
            {isMobile && (
              <div
                className="menuIcon"
                role="button"
                tabIndex="0"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <FiMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
