import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.a`
  display: inline-block;
  background: var(--mediumSlateBlue);
  padding: 1.5rem 2rem;
  color: var(--white);
  font-size: 1.6rem;
  text-transform: capitalize;
  border-radius: 8px;
  border: none;
  @media only screen and(max-width: 768px) {
    font-size: 1.4rem;
    padding: 1.2rem 1.5rem;
  }
`;
const PrimaryButton = ({ children, buttonType, ...rest }) => (
  <ButtonStyles as={buttonType} {...rest}>
    {children}
  </ButtonStyles>
);

export default PrimaryButton;
