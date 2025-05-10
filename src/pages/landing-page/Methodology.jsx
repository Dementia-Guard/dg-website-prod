import * as React from 'react';
import { Box, Container, Grid, Typography, CardMedia } from '@mui/material';

const Methodology = ({ themeMode }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        mt: { xs: 4, sm: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 500,
            mb: 4,
          }}
        >
          Methodology
        </Typography>
        <Grid container spacing={4} alignItems="start">
          {/* Left Side: Image */}
          <Grid item xs={12} md={6}>
            <img
              src="assets/diagram/system-overview.jpg"
              alt="System Overview"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: themeMode === 'light' ? '0 4px 12px rgba(0,0,0,0.1)' : '0 4px 12px rgba(255,255,255,0.1)',
                maxHeight: { xs: 300, md: 500 },
                objectFit: 'contain',
              }}
            />
          </Grid>
          {/* Right Side: Content */}
          <Grid item xs={12} md={6}>
            <Box >
              <Typography variant="body1" paragraph style={{ textAlign: 'justify' }}>
                This research aims to provide a smart solution by 
                integrating a web and mobile platform tailored to the needs of 
                doctors, patients, and caregivers. The system provides an 
                interactive web interface for doctors, enabling real-time 
                patient monitoring, MRI report analysis, and generating 
                personalized treatment plans. Additionally, the mobile 
                application supports patients and caregivers through AI-based 
                therapy assistance, cognitive health improvement activities, 
                and geolocation fencing for enhanced safety. The 
                infrastructure is managed using services offered by Firebase 
                with Google Cloud Platform (GCP) for storage, artifact 
                registry, hosting, databases and etc. ensuring scalability, 
                security, and seamless data management. Using the tools 
                available, caregivers can be involved in monitoring and 
                supporting patients' progress, fostering a team approach to care. 
              </Typography>

              <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 2 }}>
                Voice-Enabled Therapy Assistant
              </Typography>
              <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                Our AI-driven Voice-Enabled Therapy Assistant provides personalized reminiscence therapy. Caregivers input patient data, such as life stories and photos, which we use to generate tailored therapy questions. Using natural language processing, the assistant engages patients in adaptive conversations, tracks progress, and generates session reports to monitor cognitive health.
              </Typography>

              <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 2 }}>
                MRI Analysis and Personalized Treatment Plan Generation
              </Typography>
              <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                We built a system to analyze MRI scans and generate personalized treatment plans. A convolutional neural network classifies scans into cognitive states, while a predictive model tracks disease progression. A rule-based expert system combines these insights with patient data to create tailored treatment plans, which doctors can review and refine.
              </Typography>

              <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 2 }}>
                Cognitive Health Improvement
              </Typography>
              <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                Our cognitive health component delivers personalized exercises to slow cognitive decline. We generate questions based on standard cognitive assessments and recent news articles, adjusting difficulty dynamically using reinforcement learning. This ensures exercises match each patient’s abilities, enhancing engagement and effectiveness.
              </Typography>

              <Typography variant="h5" color="primary" gutterBottom sx={{  mt: 2 }}>
                Geo-Location Fencing
              </Typography>
              <Typography variant="body2" paragraph style={{ textAlign: 'justify' }}>
                To ensure patient safety, we implemented indoor and outdoor tracking. Indoor monitoring uses RF signals to detect movement within a home, while outdoor geo-fencing uses GPS and a point-in-polygon algorithm to define safe zones. Alerts (notifications, haptic feedback) are triggered if patients leave these zones, with an SOS button and health sensors for emergencies.
              </Typography>

              
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Methodology;