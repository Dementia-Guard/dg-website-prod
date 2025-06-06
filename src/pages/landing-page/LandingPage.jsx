import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Hero from './Hero';
import TechnologiesUsed from './TechnologiesUsed';
import Documents from './Documents';
import Presentations from './Presentations';
import Milestone from './Milestone';
import OurTeam from './OurTeam';
import ContactUs from './ContactUs';
import HeroWithCover from './HeroWithCover';
import Methodology from './Methodology';
import ResearchGap from './ResearchGap';

export default function LandingPage() {



  return (
    <div>
      <CssBaseline />
      {/*<Hero />*/}
      <HeroWithCover />
      <Box sx={{ bgcolor: 'background.default' }}>
        {/*<Divider />*/}
        <ResearchGap />
        <Methodology />
        <TechnologiesUsed />
        <Milestone/>
        <Documents />
        <Presentations />
        <OurTeam />
        <ContactUs />
        <Divider/>
      </Box>
    </div>
  );
}
