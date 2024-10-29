import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const logoStyle = {
  height: '50px',
  margin: '0 32px',
};

export default function TechnologiesUsed() {
  const logos = [
    './public/images/tech-logos/python.png',
    './public/images/tech-logos/react_logo.png',
    './public/images/tech-logos/node.png',
    './public/images/tech-logos/tensorflow-logo.png',
    './public/images/tech-logos/lockup.svg',
    './public/images/tech-logos/colab.png',
    './public/images/tech-logos/mongodb.png',
    './public/images/tech-logos/doker.png',
    './public/images/tech-logos/maps.png',
  ];

  return (
    <Container id="logoCollection" sx={{ py: 4 }}>
      <Box
        sx={{
        pt: { xs: 0, sm: 0 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
      >
        <Typography
          component="h1"
          variant="h3"
          color="text.primary"
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
            fontWeight: 500,
            mb: 2,
          }}
        >
          Technologies Used
        </Typography>
      </Box>
      
      <Grid container justifyContent="center" spacing={3} sx={{ mt: 0.5 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Used Technology ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
