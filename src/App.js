import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import LandingPage from './pages/LandingPage';
import ThemeContext from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext); // get the context
  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <LandingPage />
      </ThemeProvider>
    </>
  );
}
export default App;
