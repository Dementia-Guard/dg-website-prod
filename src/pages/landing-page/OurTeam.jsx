import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Chip, Divider, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';

const members = [
  {
    image: 'assets/team-avatar/vidusha.jpeg',
    role: 'Group Leader',
    name: 'Jayaweera J. A. V. T.',
    linkedin: '',
    email: '',
  },
  {
    image: 'assets/team-avatar/hasindu.jpeg',
    role: 'Group Memeber',
    name: 'Ranasinghe R. A. H. B.',
    linkedin: '',
    email: '',
  },
  {
    image: 'assets/team-avatar/sanjana.jpeg',
    role: 'Group Memeber',
    name: 'Perera K. A. S. N.',
    linkedin: '',
    email: '',
  },
  {
    image: 'assets/team-avatar/shabeer.jpeg',
    role: 'Group Memeber',
    name: 'Shabeer M. S. M.',
    linkedin: '',
    email: '',
  },
];

const lectures = [
  {
    image: 'assets/team-avatar/supervisor.jpg',
    role: 'Supervisor',
    name: 'Ms. Sanjeevi Chandrasiri',
    linkedin: 'https://www.linkedin.com/in/sanjeevi-chandrasiri-6154b319/',
    email: 'sanji.c@sliit.lk',
    gScholar: 'https://scholar.google.com/citations?hl=en&user=MoE8SVkAAAAJ&view_op=list_works&gmla=AJsN-F5AQEo_WKBNe9lEBEoI8DqhT_EsBZBSHNl5GsHo6Q7Dx1WrNHstjT5tdAWLrqo6A5dyM69Y9EhM-ixX3mPRdiCt44bUvcNtFFwSbCPw64tJCxTPTCo',
    department: 'Information Technology',
    occupation: 'Senior Lecturer'
  },
  {
    image: 'assets/team-avatar/co-supervisor.jpg',
    role: 'Co-Supervisor',
    name: 'Dr. Dharshana Kasthurirathna',
    linkedin: 'https://www.linkedin.com/in/dharshana-kasthurirathna-a4a3275/',
    email: 'dharshana.k@sliit.lk',
    gScholar: 'https://scholar.google.com/citations?hl=en&user=yXNciNUAAAAJ&view_op=list_works',
    department: 'Computer Science',
    occupation: 'Assistant Professor'
  },
];

export default function OurTeam() {

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
          About Us
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {lectures.map((member, index) => (
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
              <Box>
                <img src={member.image}  width="100%" style={{borderRadius: 5}}/>
              </Box>
              <CardContent>
                <Typography variant="h5" sx={{fontSize: 17}} color="text.secondary">
                  {member.name? member.name : "No Title"}
                </Typography>
                <Chip
                  label={member.role}
                  sx={{ borderRadius: 2, py: 0, px: 0, mt: 1 }}
                  size='small'
                />
                
                <Typography variant="body1" color="text.secondary" sx={{mt: 2}}>
                  {member.occupation}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  At&nbsp;
                  <Link href="https://www.sliit.lk" sx={{ padding: -5}} target="_blank" rel="noopener noreferrer" variant="text">
                    SLIIT
                  </Link>
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{mt: 1}}>
                  Department
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.department}
                </Typography>
              </CardContent>
              <Divider/>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: 1
                }}
              >
                
                <Button
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="text"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 14
                  }}
                >
                  <LinkedInIcon  sx={{width: 18}}/>
                  &nbsp;Linkedin
                </Button>
                <Button href={member.gScholar} target="_blank" rel="noopener noreferrer" variant="text" sx={{fontSize: 12}}><GoogleIcon sx={{width: 18}}/>&nbsp;G-Scholar</Button>
                <Button href={member.email} target="_blank" rel="noopener noreferrer" variant="text" sx={{fontSize: 12}}><EmailIcon sx={{width: 18}}/>&nbsp;Email</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        {members.map((member, index) => (
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
              <Box>
                <img src={member.image}  width="100%" style={{borderRadius: 5}}/>
              </Box>
              <CardContent>
                <Typography variant="h5" color="text.secondary">
                  {member.name? member.name : "No Title"}
                </Typography>
                <Chip
                  label={member.role}
                  sx={{ borderRadius: 2, py: 0, px: 0, mt: 1 }}
                  size='small'
                />
                
                <Typography variant="body1" color="text.secondary" sx={{mt: 2}}>
                  Undergraduate Student
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  At&nbsp;
                  <Link href="https://www.sliit.lk" sx={{ padding: -5}} target="_blank" rel="noopener noreferrer" variant="text">
                    SLIIT
                  </Link>
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{mt: 1}}>
                  Department
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Software Engineering
                </Typography>
              </CardContent>
              <Divider/>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: 1
                }}
              >
                
                <Button
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="text"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <LinkedInIcon />
                  &nbsp;Linkedin
                </Button>
                <Button href={member.email} target="_blank" rel="noopener noreferrer" variant="text"><EmailIcon/>&nbsp;Email</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
