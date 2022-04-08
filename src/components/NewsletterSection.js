import React from 'react';
import styled from 'styled-components';
import SectionTitle from './titles/SectionTitle';
import ParagraphText from './paragraphTexts/ParagraphText';

const NewsletterSectionStyles = styled.div`
  padding: 10rem 0;
  .newsletter__wrapper {
    padding: 5rem 3rem;
    border-radius: 12px;
    max-width: 500px;
    margin: 0 auto;
    background: var(--mediumSlateBlue);
    text-align: center;
  }
  .newsletter__title {
    margin-bottom: 0.2rem;
    color: var(--lightBlue_1);
  }
  .newsletter__subtitle {
    color: var(--lightBlue_1);
    margin-bottom: 2rem;
  }
  .newsletter__form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    input {
      width: 100%;
      max-width: 300px;
      height: 40px;
      padding-left: 1rem;
      background-color: var(--lightBlue_1);
      border: none;
      border-radius: 4px;
      font-size: 1.6rem;
      border: none;
      outline: none;
      font-weight: 500;
    }
    button {
      height: 40px;
      font-size: 1.6rem;
      cursor: pointer;
      padding: 0 1.5rem;
      text-transform: capitalize;
      color: var(--darkBlue_1);
      background-color: var(--lightBlue_1);
      border: none;
      border-radius: 4px;
      transition: 0.3s ease background-color;
    }
  }
  @media only screen and (max-width: 768px) {
    .newsletter__wrapper {
      padding: 3rem 2rem;
    }
    .newsletter__form {
      flex-direction: column;
      input {
        font-size: 1.4rem;
      }
      button {
        font-size: 1.4rem;
      }
    }
  }
`;
const NewsletterSection = () => (
  <NewsletterSectionStyles id="newsletter">
    <div className="container">
      <div className="newsletter__wrapper">
        <SectionTitle className="newsletter__title">
          Join Our Newsletter
        </SectionTitle>
        <ParagraphText className="newsletter__subtitle">
          Get regular updates every week
        </ParagraphText>
        <form className="newsletter__form">
          <input type="email" placeholder="Your email" />
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  </NewsletterSectionStyles>
);

export default NewsletterSection;
