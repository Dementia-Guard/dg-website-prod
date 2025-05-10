import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button, CssBaseline } from '@mui/material';
import customTheme from './customTheme';
import LandingPage from './pages/landing-page/LandingPage';
import '@fontsource/roboto';
import AppAppBar from './components/appbar/AppAppBar';
import Footer from './components/footer/Footer';
import Chatbot from './components/chatbot/Chatbot';

const App = () => {
  const [themeMode, setThemeMode] = React.useState('light')
  const currentTheme = createTheme(customTheme(themeMode),);

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem('theme');
    if (themeFromLocalStorage) {
      setThemeMode(themeFromLocalStorage);
    } else {
      setThemeMode('light');
    }
  }, []);
  
  const theme = useTheme();
  const toogleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark')
      localStorage.setItem('theme', 'dark');
    } else {
      setThemeMode('light')
      localStorage.setItem('theme', 'light');
    }
    
  }
  
  const [is404, setIs404] = React.useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = React.useState(false);
  const [isFooterHiddden, setIsFooterHidden] = React.useState(false);
  const currentLocation = window.location.pathname;
  
  useEffect(() => {
    if (currentLocation === '/') {
      setIs404(false)
    } else if (currentLocation === '/') {
      setIs404(false)
    } else if (currentLocation === '/') {
      setIs404(false)
    } else {
      setIs404(true)
    }

  }, []);
  
  useEffect(() => {
    if (currentLocation === '/') {
      setIs404(false)
    } else if (currentLocation === '/') {
      setIs404(false)
    } else if (currentLocation === '/') {
      setIs404(false)
    } else {
      setIs404(true)
    }

  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <header>
        <AppAppBar toggleColorMode={toogleTheme} mode={themeMode} />
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage toggleTheme={toogleTheme} />} />
          </Routes>
        </Router>
      </main>
      <footer>
        <Footer/>
      </footer>
      <Chatbot themeMode={themeMode} />
    </ThemeProvider>
  );
}

export default App;