import React from 'react';
import styled from 'styled-components';
import FormField from './FormField';
import SectionTitle from '../titles/SectionTitle';
import PrimaryButton from '../Buttons/PrimaryButton';
import ParagraphText from '../paragraphTexts/ParagraphText';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .contact__info {
    margin-bottom: 4rem;
  }

  .contact__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
    .contact__field--fullWidth {
      grid-column: span 2;
    }
    .contact__submit {
      width: max-content;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact__form {
      grid-template-columns: 1fr;
      row-gap: 2rem;
      .contact__field--fullWidth {
        grid-column: span 1;
      }
    }
  }
`;
const ContactSection = () => (
  <ContactSectionStyles id="contact">
    <div className="container">
      <div className="contact__wrapper">
        <div className="contact__info">
          <SectionTitle>Get In Touch</SectionTitle>
          <ParagraphText>We would love to hear from you.</ParagraphText>
        </div>
        <form className="contact__form">
          <FormField
            className="contact__field--fullWidth"
            type="text"
            label="name"
            name="name"
            id="name"
            required
          />
          <FormField
            type="email"
            label="Email"
            name="email"
            id="email"
            required
          />
          <FormField
            type="text"
            label="Subject"
            name="subject"
            id="subject"
            required
          />
          <FormField
            className="contact__field--fullWidth"
            label="Message"
            name="message"
            id="message"
            rows="6"
          />
          <PrimaryButton
            type="submit"
            buttonType="button"
            className="contact__submit"
          >
            Submit
          </PrimaryButton>
        </form>
      </div>
    </div>
  </ContactSectionStyles>
);

export default ContactSection;
