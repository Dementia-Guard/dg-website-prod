import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from '../../features/toggle-mode/ToggleColorMode';
import { alpha } from '@mui/material';

const logoStyle = {
  width: 'auto',
  height: '40px',
  cursor: 'pointer',
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  // Track scroll position to toggle hero section styling
  useEffect(() => {
    const handleScroll = () => {
      // Consider hero section as top ~50px to allow small buffer
      setIsHeroSection(window.scrollY <= 220);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
        }}
      >
        <Box>
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              bgcolor: isHeroSection
                ? 'transparent'
                : theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: isHeroSection ? 'none' : 'blur(24px)',
              maxHeight: 40,
              border: isHeroSection ? 'none' : '1px solid',
              borderBottom: 'none',
              borderColor: 'divider',
              boxShadow: isHeroSection
                ? 'none'
                : theme.palette.mode === 'light'
                ? `0 0 1px ${alpha('#0aad0a', 0.1)}, 1px 1.5px 2px -1px ${alpha('#0aad0a', 0.15)}, 4px 4px 12px -2.5px ${alpha('#0aad0a', 0.15)}`
                : `0 0 1px ${alpha('#033e03', 0.7)}, 1px 1.5px 2px -1px ${alpha('#033e03', 0.65)}, 4px 4px 12px -2.5px ${alpha('#033e03', 0.65)}`,
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                px: 0,
                gap: 1,
              }}
            >
              <img
                src={'assets/logo/logo.png'}
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('features')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('testimonials')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Project Scope
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('highlights')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Milestones
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('pricing')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Downloads
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    About Us
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Contact Us
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem onClick={() => scrollToSection('features')}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}>
                    Project Scope
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('highlights')}>
                    Milestones
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('pricing')}>
                    Downloads
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>
                    About Us
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>
                    Contact Us
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;