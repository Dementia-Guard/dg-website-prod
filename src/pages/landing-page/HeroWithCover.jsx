import { Box, Button, Typography, alpha, Link, Stack, TextField } from '@mui/material'
import React, {useEffect, useState} from 'react'
import LaunchIcon from '@mui/icons-material/Launch';

import "../styles/Hero.css"

export default function HeroWithCover() {

  return (
    <Box id="hero">
      <Box
        id="image"
        sx={(theme) => ({
        mt: { xs: 4, sm: 0 },
        alignSelf: 'center',
        height: '100vh',
        backgroundImage:
            theme.palette.mode === 'light'
            ? 'url("assets/covers/cover.png")'
            : 'url("assets/covers/cover.png")',
        backgroundSize: 'cover',
        
        })}
      >
        <Box
          sx={(theme) => ({
            width: '100%',
            height: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
               ? `linear-gradient(${alpha('#fff', 1)}, ${alpha('#fff', 0.8)}, ${alpha('#fff', 1)})`
                : `linear-gradient(${alpha('#090e10', 1)}, ${alpha('#090e10', 0.9)}, ${alpha('#090e10', 1)})`,
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: '20px', sm: '0',}
          })}
        >
           
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '100%' } }}>
                    {/*<div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '100px 0' }}>
                      <div class="container">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        
                      </div>
                      <div class="prof-image">
                        <img src="./assets/logo/logo1.png" style={{width: '100%', height: '100%', borderRadius:'50%', marginTop:'8px'}} />
                      </div>
                    </div>*/}
                    <div class="prof-image-witout-container" >
                      <img src="./assets/logo/logo1.png" style={{height: '150px'}} />
                    </div>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                            marginBottom: '20px',
                            fontFamily: 'Play',
                        }}
                    >
                        Empowering Dementia Care with&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                            fontSize: 'clamp(3rem, 10vw, 4rem)',
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >
                          Innovation
                        </Typography>
                    </Typography>
                    <Typography
                        textAlign="center"
                        
                          sx={{
                              alignSelf: 'center',
                              width: { sm: '100%', md: '70%' },
                              fontWeight: (theme) =>
                                theme.palette.mode === 'light' ? '500' : '',
                          }}
                    >
                      Welcome to DementiaGuard, your trusted companion in dementia care and support. Designed to enhance the quality of life for dementia patients and their caregivers, our app offers cutting-edge tools and compassionate assistance. From early dementia prediction using MRI brain imaging and a voice-activated therapy assistant to cognitive exercises and geo-fencing for added safety, DementiaGuard combines science and technology to deliver a personalized care experience. Start your journey with DementiaGuard and discover a world where advanced care meets compassionate support.
                    </Typography>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', gap: '20px'}}>
                      <button className="hero-button">
                        Learn More
                      </button>
                      <button className="hero-button" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        Explore Project &nbsp;<LaunchIcon />
                      </button>
                    </div>
                    
                </Stack>
               
        </Box>
      </Box>
    </Box>
  )
}
