import React from 'react';
import { Box, Typography, Divider, Container, LinearProgress, linearProgressClasses, Badge, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.primary[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.primary[200],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary[500],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.primary[200],
    }),
  },
}));

const milestones = [
  {
    date: "August 2024",
    title: "Project Proposal",
    description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    marksAllocated: 6,
    percentage: 6,
  },
  {
    date: "December 2024",
    title: "Progress Presentation I",
    description: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    marksAllocated: 6,
    percentage: 6,
  },
  {
    date: "March 2025",
    title: "Research Paper",
    description: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
    marksAllocated: 10,
    percentage: 10,
  },
  {
    date: "April 2025",
    title: "Progress Presentation II",
    description: "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
    marksAllocated: 18,
    percentage: 18,
  },
  {
    date: "May 2024",
    title: "Website Assessment",
    description: "The Website helps to promote our research project and reveals all details related to the project.",
    marksAllocated: 2,
    percentage: 2,
  },
  {
    date: "June 2024",
    title: "Logbook",
    description: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.",
    marksAllocated: 3,
    percentage: 3,
  },
  {
    date: "June 2024",
    title: "Final Report",
    description: "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
    marksAllocated: 19,
    percentage: 19,
  },
  {
    date: "June 2024",
    title: "Final Presentation & Viva",
    description: "Viva is held individually to assess each member's contribution to the project.",
    marksAllocated: 20,
    percentage: 10,
  },
];

const Milestone = () => {
  return (
    <Container
      id="milestone"
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
          Milestone
        </Typography>
      </Box>
      <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Box>
          <Divider 
            orientation="vertical" 
            sx={{ borderRightWidth: 2, borderColor: '#0aad0a', mx: 2, width: '100px' }} 
          />
          {[...Array(8)].map((_, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                left: 349,
                transform: 'translateX(-50%)',
                width: 18,
                height: 18,
                backgroundColor: '#0aad0a',
                borderRadius: '50%',
                top: `${8.5+(index * 12)}%`, // 7 evenly spaced points
              }}
            />
          ))}
        </Box>
        
        <Box sx={{ width: '100%', maxWidth: 600, margin: 'auto' }}>
          {milestones.map((milestone, index) => (
            <Box key={index} sx={{ mb: 3, pl: 2 }}>
              <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold' }}>
                {milestone.date}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: '200' }}>
                {milestone.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {milestone.description}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                <Chip
                  key={index}
                  label={`Marks Allocated: ${milestone.marksAllocated}`}
                />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                
                {/*<BorderLinearProgress variant="determinate" value={milestone.percentage} />*/}
              </Typography>
              {index < milestones.length - 1 && <Divider sx={{ mt: 2 }} />}
            </Box>
          ))}
        </Box>
      </Box>
      
      
    </Container>
  );
};

export default Milestone;
