import React from 'react';
import { Container, Grid, Typography, Box, Stack } from '@mui/material';
import Iconify from '../iconify';

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <Container
      sx={{
        p: 4,
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: 'black',
          clipPath: 'polygon(0 0, calc(1% - 19px) 0, 190% 81px, 100% 100%, 0 87%)',
        }}
      >
        <Grid item xl={12} lg={4} md={12} sm={12} xs={12} sx={{ my: 4, p: 4 }}>
          <img
            style={{ maxWidth: '100%' }}
            alt="profile-1"
            src="https://today.duke.edu/sites/default/files/styles/story_body_inline_horizontal/public/inline-images/Adrienne%20Stiff-Roberts.jpg?itok=Lay-eRGn"
          />
        </Grid>
        <Grid item xl={12} lg={8} md={12} sm={12} xs={12} sx={{ my: 4, p: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h3" sx={{ color: 'white' }}>
                Alice john
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: 'white' }}>
                CEO, CO-FOUNDER
              </Typography>
            </Box>
            <Stack flexDirection="row">
              <Iconify
                icon="devicon-plain:facebook"
                sx={{ m: 1, cursor: 'pointer', color: 'white' }}
              />
              <Iconify icon="bi:instagram" sx={{ m: 1, cursor: 'pointer', color: 'white' }} />
              <Iconify icon="iconoir:twitter" sx={{ m: 1, cursor: 'pointer', color: 'white' }} />
            </Stack>
          </Box>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perspiciatis corporis
            necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            perspiciatis corporis necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Debitis perspiciatis corporis necessitatibus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Debitis perspiciatis corporis necessitatibus? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Debitis perspiciatis corporis
            necessitatibus?
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          backgroundColor: 'black',
          clipPath: 'polygon(0 0, calc(1% - 19px) 0, 190% 81px, 100% 100%, 0 87%)',
        }}
      >
        <Grid item xl={12} lg={8} md={12} sm={12} xs={12} sx={{ my: 4, p: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h3" sx={{ color: 'white' }}>
                Lucas Bladua
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: 'white' }}>
                CREATIVE DIRECTOR, CO-FOUNDER
              </Typography>
            </Box>
            <Stack flexDirection="row">
              <Iconify
                icon="devicon-plain:facebook"
                sx={{ m: 1, cursor: 'pointer', color: 'white' }}
              />
              <Iconify icon="bi:instagram" sx={{ m: 1, cursor: 'pointer', color: 'white' }} />
              <Iconify icon="iconoir:twitter" sx={{ m: 1, cursor: 'pointer', color: 'white' }} />
            </Stack>
          </Box>

          <Typography sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perspiciatis corporis
            necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            perspiciatis corporis necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Debitis perspiciatis corporis necessitatibus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Debitis perspiciatis corporis necessitatibus? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Debitis perspiciatis corporis
            necessitatibus?
          </Typography>
        </Grid>
        <Grid item xl={12} lg={4} md={12} sm={12} xs={12} sx={{ my: 4, p: 4 }}>
          <img
            style={{ maxWidth: '100%' }}
            alt="profile-2"
            src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits_jpg.webp"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
