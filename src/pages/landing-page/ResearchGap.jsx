import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

import "../styles/ResearchGap.css"



export default function ResearchGap() {
  const theme = useTheme();
  const gaps = [
    {
      topic: 'Lack of Interactive Therapy',
      description: 'Traditional reminiscence therapy relies on in-person sessions with therapists or caregivers, which are costly and difficult to scale due to limited access and caregiver burden. DementiaGuard’s AI-driven Voice-Enabled Therapy Assistant automates personalized, adaptive conversations, enabling consistent therapy without constant human intervention.',
      icon: <ChatBubbleOutlineIcon style={{fontSize:'150px', color: '#0cad05'}}/>
    },
    {
      topic: 'Inadequate Comprehensive Monitoring',
      description: 'Existing tracking systems lack precise indoor and outdoor monitoring, compromising patient safety due to unreliable real-time alerts. DementiaGuard integrates RF-based indoor tracking and GPS-based geo-fencing with multi-modal alerts to ensure accurate, timely safety monitoring.',
      icon: <LocationOnIcon style={{fontSize:'150px', color: '#0cad05'}} />
    },
    {
      topic: 'Non-Personalized Cognitive Exercises',
      description: 'Most cognitive health solutions provide static, pre-defined exercises not tailored to AD patients’ specific needs, reducing engagement and effectiveness. DementiaGuard uses reinforcement learning to generate dynamic, personalized questions based on MMSE/MoCA standards and patient performance.',
      icon: <PsychologyIcon style={{fontSize:'150px', color: '#0cad05'}} />
    },
    {
      topic: 'Fragmented MRI Analysis and Treatment Planning',
      description: 'Current MRI analysis tools often lack integration with disease progression tracking and personalized treatment planning, leading to incomplete care strategies. DementiaGuard combines CNN-based classification, LSTM progression prediction, and rule-based expert systems for comprehensive, tailored treatment plans.',
      icon: <MedicalServicesIcon style={{fontSize:'150px', color: '#0cad05'}} />
    },
  ];
  return (
    <Container
      id="testimonials"
      sx={{
        mt: { xs: 4, sm: 8 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          color="text.primary"
          sx={{
            fontWeight: 500,
          }}
        >
          Research Gaps
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {gaps.map((gap, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
            <div class="card" style={{
              backgroundColor: theme.palette.mode === 'light' ? '#fbfcfe' : '#0f1619',
              boxShadow: theme.palette.mode === 'light' ? '0 4px 8px rgba(0, 0, 0, 0.4)' : '0 4px 8px rgba(255, 255, 255, 0.1)',
            }}>
              <div>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100px',
                    fontSize: '10px',
                  }}
                >
                  {gap.icon}
                </Box>
                <Typography
                  variant="h4"
                  color="text.primary"
                  sx={{
                    fontSize: '1.5rem',
                    marginBottom: '10px',
                    px: 2,
                    textAlign: 'center',
                    fontWeight: 700,
                  }}
                >
                  {gap.topic}
                </Typography>
              </div>
              <div 
                class="card__content"
                style={{
                  padding: '16px',
                  color: theme.palette.mode === 'light' ? '#fbfcfe' : '#fff',
                  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#090e10',
                }}
              >
                <p class="card__title" style={{color: theme.palette.mode === 'light' ? '#000' : '#fff'}}>{gap.topic}</p>
                <p 
                  class="card__description"
                  style={{
                    fontSize: '0.9rem',
                    color: theme.palette.mode === 'light' ? '#4c5967' : '#94a6b8',
                  }}
                >{gap.description}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
