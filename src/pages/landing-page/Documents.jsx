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

import "../styles/Download.css"

const docs = [
  {
    topic: 'Topic Assesment',
    subTopic: 'DementiaGuard',
    submittedOn: '2024/07/01',
    avatar: [
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/vidusha.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/hasindu.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/sanjana.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/shabeer.jpeg" />,
    ],
    name: 'Group Work',
  },
  {
    topic: 'Project Proposal',
    subTopic: 'Voice Enabled Theraphy Assistant',
    submittedOn: '2024/07/01',
    avatar: [<Avatar alt="Travis Howard" src="./assets/team-avatar/vidusha.jpeg" />],
    name: 'Jayaweera J. A. V. T.',
  },
  {
    topic: 'Project Proposal',
    subTopic: 'Dementia Prediction',
    submittedOn: '2024/07/01',
    avatar: [<Avatar alt="Travis Howard" src="./assets/team-avatar/hasindu.jpeg" />],
    name: 'Ranasinghe R. A. H. B.',
  },
  {
    topic: 'Project Proposal',
    subTopic: 'Cognitive Helth Improving Activities',
    submittedOn: '2024/07/01',
    avatar: [<Avatar alt="Travis Howard" src="./assets/team-avatar/sanjana.jpeg" />],
    name: 'Perera K. A. S. N.',
  },
  {
    topic: 'Project Proposal',
    subTopic: 'Geolocation Fencing',
    submittedOn: '2024/07/01',
    avatar: [<Avatar alt="Travis Howard" src="./assets/team-avatar/shabeer.jpeg" />],
    name: 'Shabeer M. S. M.',
  },
  {
    topic: 'Research Paper',
    subTopic: '',
    submittedOn: '',
    avatar: [
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/vidusha.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/hasindu.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/sanjana.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/shabeer.jpeg" />,
    ],
    name: 'Group Work',
  },
  {
    topic: 'Final Report',
    subTopic: '',
    submittedOn: '',
    avatar: [
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/vidusha.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/hasindu.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/sanjana.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/shabeer.jpeg" />,
    ],
    name: 'Group Work',
  },
  {
    topic: 'Final Report',
    subTopic: 'Voice Enabled Theraphy Assistant',
    submittedOn: '',
    avatar: [<Avatar alt="Travis Howard" src="./assets/team-avatar/vidusha.jpeg" />],
    name: 'Jayaweera J. A. V. T.',
  },
  {
    topic: 'Final Report',
    subTopic: 'Dementia Prediction',
    submittedOn: '',
    avatar: [<Avatar alt="Travis Howard" src="./assets/team-avatar/hasindu.jpeg" />],
    name: 'Ranasinghe R. A. H. B.',
  },
  {
    topic: 'Final Report',
    subTopic: 'Cognitive Helth Improving Activities',
    submittedOn: '',
    avatar: [<Avatar alt="Travis Howard" src="./assets/team-avatar/sanjana.jpeg" />],
    name: 'Perera K. A. S. N.',
  },
  {
    topic: 'Final Report',
    subTopic: 'Geolocation Fencing',
    submittedOn: '',
    avatar: [<Avatar alt="Travis Howard" src="./assets/team-avatar/shabeer.jpeg" />],
    name: 'Shabeer M. S. M.',
  },
  {
    topic: 'Promotion Poster',
    subTopic: '',
    submittedOn: '',
    avatar: [
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/vidusha.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/hasindu.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/sanjana.jpeg" />,
      <Avatar alt="Remy Sharp" src="./assets/team-avatar/shabeer.jpeg" />,
    ],
    name: 'Group Work',
  },
];

export default function Documents() {

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
          Documents
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {docs.map((doc, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="h4" color="text.secondary">
                  {doc.topic? doc.topic : "No Title"}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {doc.subTopic? `${doc.subTopic}`: "DementiaGuard"}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {doc.submittedOn? `Submitted On ${doc.submittedOn}`: "Awaiting Submission"}
                </Typography>
              </CardContent>
              <Divider/>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {doc.avatar.map((avatarComponent, index) => (
                        <Box
                          key={index}
                          sx={{
                            position: 'relative',
                            zIndex: doc.avatar.length - index, // Ensure first avatar is on top
                            marginLeft: index === 0 ? 0 : '-12px', // Adjust overlap
                          }}
                        >
                          {avatarComponent}
                        </Box>
                      ))}
                    </Box>
                  }
                  title={doc.name}
                  subheader={doc.occupation}
                />
                <button class="down-button" type="button">
                  <span class="button__text">Download</span>
                  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                </button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
