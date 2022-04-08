import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const SectionTitleStyles = styled.h3`
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
const SectionTitle = ({ children, ...rest }) => (
  <SectionTitleStyles {...rest}>{children}</SectionTitleStyles>
);

export default SectionTitle;
