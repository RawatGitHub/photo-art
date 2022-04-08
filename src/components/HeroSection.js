import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import HeroTitle from './titles/HeroTitle';
import ParagraphText from './paragraphTexts/ParagraphText';
import PrimaryButton from './Buttons/PrimaryButton';
import HeroImg from '../assets/images/hero.png';

const HeroSectionStyles = styled.div`
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  .hero__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    .hero__info {
      flex: 3;
    }
    .hero__img {
      flex: 4;
      img {
        object-fit: contain;
      }
    }
    .hero__title {
      margin-bottom: 1.5rem;
      max-width: 400px;
    }
    .hero__desc {
      margin-bottom: 1.5rem;
      max-width: 300px;
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
    .hero__img {
      display: flex;
      justify-content: flex-end;
      img {
        max-width: 400px;
        margin-top: auto;
      }
    }
  }
`;
const HeroSection = () => (
  <HeroSectionStyles id="home">
    <div className="container">
      <div className="hero__wrapper">
        <div className="hero__info">
          <HeroTitle className="hero__title">A Click of Artistic Joy</HeroTitle>
          <ParagraphText className="hero__desc">
            Because every picture tells a story, let us help you tell yours
          </ParagraphText>
          <PrimaryButton
            buttonType={Link}
            smooth
            to="contact"
            className="hero__cta"
          >
            Get In Touch
          </PrimaryButton>
        </div>
        <div className="hero__img">
          <img src={HeroImg} alt="hero-img" />
        </div>
      </div>
    </div>
  </HeroSectionStyles>
);

export default HeroSection;
