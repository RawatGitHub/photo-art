import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import SectionTitle from './titles/SectionTitle';
import AboutImg from '../assets/images/about.png';
import PrimaryButton from './Buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .about__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
  }
  .about__title {
    margin-bottom: 2rem;
    max-width: 350px;
  }
  .about__desc {
    margin-bottom: 2rem;
    max-width: 300px;
  }
  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
    .about__img {
      max-width: 400px;
    }
  }
`;
const AboutSection = () => (
  <AboutSectionStyles id="about">
    <div className="container">
      <div className="about__wrapper">
        <div className="about__img">
          <img src={AboutImg} alt="about-us" />
        </div>
        <div className="about__info">
          <ParagraphText className="about__subtitle">Who are we</ParagraphText>
          <SectionTitle className="about__title">
            Capturing life as it happens
          </SectionTitle>
          <ParagraphText className="about__desc">
            “Artistic” is a studio of some passionate photographer. Our Goal is
            to capture your experience.
          </ParagraphText>
          <PrimaryButton buttonType={Link} to="contact" smooth>
            Get In Touch
          </PrimaryButton>
        </div>
      </div>
    </div>
  </AboutSectionStyles>
);

export default AboutSection;
