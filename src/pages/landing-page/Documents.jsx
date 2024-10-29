import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const docs = [
  {
    topic: 'Topic Assesment',
    subTopic: 'DementiaGuard',
    submittedOn: '2024/07/01',
    avatar: [
      <Avatar alt="Remy Sharp" src="./public/assets/team-avatar/vidusha.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/assets/team-avatar/hasindu.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/assets/team-avatar/sanjana.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/assets/team-avatar/shabeer.jpeg" />,
    ],
    name: 'Group Work',
  },
  {
    topic: 'Project Proposal',
    subTopic: 'Voice Enabled Theraphy Assistant',
    submittedOn: '2024/07/01',
    avatar: [<Avatar alt="Travis Howard" src="./public/images/team-avatar/vidusha.jpeg" />],
    name: 'Jayaweera J. A. V. T.',
  },
  {
    topic: 'Project Proposal',
    subTopic: 'Dementia Prediction',
    submittedOn: '2024/07/01',
    avatar: [<Avatar alt="Travis Howard" src="./public/images/team-avatar/hasindu.jpeg" />],
    name: 'Ranasinghe R. A. H. B.',
  },
  {
    topic: 'Project Proposal',
    subTopic: 'Cognitive Helth Improving Activities',
    submittedOn: '2024/07/01',
    avatar: [<Avatar alt="Travis Howard" src="./public/images/team-avatar/sanjana.jpeg" />],
    name: 'Perera K. A. S. N.',
  },
  {
    topic: 'Project Proposal',
    subTopic: '',
    submittedOn: '2024/07/01',
    avatar: [<Avatar alt="Travis Howard" src="./public/images/team-avatar/shabeer.jpeg" />],
    name: 'Shabeer M. S. M.',
  },
  {
    topic: 'Research Paper',
    subTopic: '',
    submittedOn: '',
    avatar: [
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/vidusha.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/hasindu.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/sanjana.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/shabeer.jpeg" />,
    ],
    name: 'Group Work',
  },
  {
    topic: 'Final Report',
    subTopic: '',
    submittedOn: '',
    avatar: [
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/vidusha.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/hasindu.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/sanjana.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/shabeer.jpeg" />,
    ],
    name: 'Group Work',
  },
  {
    topic: 'Final Report',
    subTopic: 'Voice Enabled Theraphy Assistant',
    submittedOn: '',
    avatar: [<Avatar alt="Travis Howard" src="./public/images/team-avatar/vidusha.jpeg" />],
    name: 'Jayaweera J. A. V. T.',
  },
  {
    topic: 'Final Report',
    subTopic: 'Dementia Prediction',
    submittedOn: '',
    avatar: [<Avatar alt="Travis Howard" src="./public/images/team-avatar/hasindu.jpeg" />],
    name: 'Ranasinghe R. A. H. B.',
  },
  {
    topic: 'Final Report',
    subTopic: 'Cognitive Helth Improving Activities',
    submittedOn: '',
    avatar: [<Avatar alt="Travis Howard" src="./public/images/team-avatar/sanjana.jpeg" />],
    name: 'Perera K. A. S. N.',
  },
  {
    topic: 'Final Report',
    subTopic: '',
    submittedOn: '',
    avatar: [<Avatar alt="Travis Howard" src="./public/images/team-avatar/shabeer.jpeg" />],
    name: 'Shabeer M. S. M.',
  },
  {
    topic: 'Promotion Poster',
    subTopic: '',
    submittedOn: '',
    avatar: [
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/vidusha.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/hasindu.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/sanjana.jpeg" />,
      <Avatar alt="Remy Sharp" src="./public/images/team-avatar/shabeer.jpeg" />,
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
                <Button>Download</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
