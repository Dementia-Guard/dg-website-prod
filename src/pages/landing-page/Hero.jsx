import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? `linear-gradient(180deg, ${alpha('#0aad0a', 0.15)}, #FFF)`
            : `linear-gradient(${alpha('#0aad0a', 0.15)}, ${alpha('#033e03', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative',
      })}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          pl: { xs: 8, sm: 12 },
          height: '100%',
          position: 'fixed',
          zIndex: -1,
          width: '90%',
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '100%' } }}>
          <Typography
            variant="h2"
            sx={{
              display: { xs: 'block', md: 'flex' },
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: '',
              textAlign: '',
            }}
          >
            Empowering Dementia Care with&nbsp;
            <Typography
              component="span"
              variant="h2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Innovation
            </Typography>
          </Typography>
          <Typography
            textAlign=""
            color="text.secondary"
            sx={{ alignSelf: '', width: { sm: '100%', md: '80%' } }}
          >
            Welcome to DementiaGuard, your trusted companion in dementia care and support. Designed to enhance the quality of life for dementia patients and their caregivers, our app offers cutting-edge tools and compassionate assistance. From early dementia prediction using MRI brain imaging and a voice-activated therapy assistant to cognitive exercises and geo-fencing for added safety, DementiaGuard combines science and technology to deliver a personalized care experience. Start your journey with DementiaGuard and discover a world where advanced care meets compassionate support.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf=""
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant="contained" color="primary">
              Learn More
            </Button>
            <Button variant="contained" color="primary">
              Explore Project &nbsp;<LaunchIcon />
            </Button>
          </Stack>
        </Stack>
        {/*<Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        />*/}
        
      </Box>
      <Box sx={{ height: '80vh', position: 'fixed', bottom: 0, right: 60, zIndex: -1, display: {sm:'none', md: 'block'} }}>
        <img
          src="assets/animated/dementia-patient.png"
          alt="hero-light"
          height="100%"
        />
      </Box>
    </Box>
  );
}
