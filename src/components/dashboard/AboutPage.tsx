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
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h2" gutterBottom color="primary.main">
          About Us
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          backgroundColor: 'black',
          clipPath: {
            xl: 'polygon(0 0, calc(-49% - 31px) 0, 148% 95px, 106% 100%, 0 87%)',
            lg: 'polygon(0 0, calc(1% - 19px) 0, 190% 81px, 100% 100%, 0 87%)',
            md: 'polygon(0 0, calc(-1% - -8px) 0, 219% 91px, 111% 100%, 0 87%)',
            sm: 'polygon(0 0, calc(2% - 31px) 0, 201% 82px, 100% 100%, 0 94%)',
            xs: 'polygon(0 0, calc(2% - 31px) 0, 201% 82px, 100% 98%, 0 94%)',
          },
        }}
      >
        <Grid
          item
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{
            my: { lg: 4, sm: 0 },
            px: { lg: 4, sm: 4, xs: 2 },
            pt: { xl: 6, lg: 3, md: 4, sm: 7, xs: 5 },

            display: 'flex',
            justifyContent: { sm: 'center', xs: 'center' },
          }}
        >
          <img
            style={{ maxWidth: '100%', height: '300px' }}
            alt="profile-1"
            src="../assets\images\person5.png"
          />
        </Grid>
        <Grid
          item
          xl={8}
          lg={8}
          md={8}
          sm={12}
          xs={12}
          sx={{ my: { lg: 4, sm: 0 }, p: 4, pb: { xs: 10 } }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: { xs: 'left', sm: 'center', lg: 'center', xl: 'center' },
              flexDirection: { xs: 'column', lg: 'row', md: 'row', sm: 'row' },
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ color: 'primary.main' }}>
                Alice john
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                CEO, CO-FOUNDER
              </Typography>
            </Box>
            <Stack flexDirection="row">
              <Iconify
                icon="devicon-plain:facebook"
                sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
              />
              <Iconify
                icon="bi:instagram"
                sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
              />
              <Iconify
                icon="iconoir:twitter"
                sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
              />
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
          clipPath: {
            xl: 'polygon(0 0, calc(1% - 80px) 0, 180% 95px, 117% 100%, 0 92%)',
            lg: 'polygon(0 0, calc(1% - 80px) 0, 180% 103px, 117% 101%, 0 84%)',
            md: 'polygon(0 0, calc(-49% - 31px) 0, 148% 95px, 106% 100%, 0 87%)',
            sm: 'polygon(0 0, calc(2% - 31px) 0, 201% 82px, 100% 100%, 0 94%)',
            xs: 'polygon(0 0, calc(2% - 119px) 0, 201% 82px, 100% 98%, 0 95%)',
          },
        }}
      >
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12} sx={{ my: 4, pt: 2, px: 4 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: { xs: 'left', sm: 'center', lg: 'center', xl: 'center' },
              flexDirection: { xs: 'column', lg: 'row', md: 'row', sm: 'row' },
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ color: 'primary.main' }}>
                Lucas Bladua
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                CREATIVE DIRECTOR, CO-FOUNDER
              </Typography>
            </Box>
            <Stack flexDirection="row">
              <Iconify
                icon="devicon-plain:facebook"
                sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
              />
              <Iconify
                icon="bi:instagram"
                sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
              />
              <Iconify
                icon="iconoir:twitter"
                sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
              />
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
        <Grid
          item
          xl={4}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{
            mt: { lg: 7, sm: 0 },
            mb: { lg: 0, sm: 0 },
            px: { lg: 4, sm: 4, xs: 2 },
            pt: { xl: 6, lg: 5, md: 10, sm: 0, xs: 0 },
            display: 'flex',
            justifyContent: { sm: 'center', xs: 'center' },
          }}
        >
          <img
            style={{ maxWidth: '100%', height: '300px' }}
            alt="profile-2"
            src="../assets\images\person6.png"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
