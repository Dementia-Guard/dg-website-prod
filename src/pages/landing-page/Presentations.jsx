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

const presentations = [
  {
    topic: 'Project Proposal',
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
    topic: 'Progress Presentation I',
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
    topic: 'Progress Presentation II',
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
    topic: 'Final Presentation',
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

export default function Presentations() {

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
          Presentations
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {presentations.map((presentation, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
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
                  {presentation.topic? presentation.topic : "No Title"}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {presentation.submittedOn? `Submitted On ${presentation.submittedOn}`: "Awaiting Submission"}
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
                      {presentation.avatar.map((avatarComponent, index) => (
                        <Box
                          key={index}
                          sx={{
                            position: 'relative',
                            zIndex: presentation.avatar.length - index, // Ensure first avatar is on top
                            marginLeft: index === 0 ? 0 : '-12px', // Adjust overlap
                          }}
                        >
                          {avatarComponent}
                        </Box>
                      ))}
                    </Box>
                  }
                  subheader={presentation.occupation}
                />
                <Button>Download</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
