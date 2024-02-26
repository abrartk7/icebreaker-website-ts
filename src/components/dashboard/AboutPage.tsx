import React from 'react';
import { Container, Grid, Typography, Box, Stack, Link, Card } from '@mui/material';
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
        component={Card}
        sx={{
          borderRadius: 0,
          clipPath: {
            xl: 'polygon(0 0, calc(-49% - 31px) 0, 148% 95px, 106% 96%, 0 87%)',
            lg: 'polygon(0 0, calc(1% - 19px) 0, 190% 81px, 100% 96%, 0 86%)',
            md: 'polygon(0 0, calc(-1% - -8px) 0, 219% 91px, 111% 94%, 0 83%)',
            sm: 'polygon(0 0, calc(2% - 31px) 0, 201% 82px, 100% 98%, 0 93%)',
            xs: 'polygon(0 0, calc(2% - 31px) 0, 201% 82px, 100% 98.5%, 0 96%)',
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
            px: { lg: 4, md: '11px', sm: 4, xs: 2 },
            pt: { xl: 6, lg: 0, md: 0, sm: 7, xs: 5 },
            display: 'flex',
            justifyContent: { sm: 'center', xs: 'center' },
          }}
        >
          <Box
            sx={{
              width: { xs: '80%', sm: '50%', md: '100%' },
              pt: { md: 5, lg: 0 },
            }}
          >
            <img alt="profile-1" src="../assets\images\person5.png" />
          </Box>
        </Grid>
        <Grid
          item
          xl={8}
          lg={8}
          md={8}
          sm={12}
          xs={12}
          sx={{
            my: { lg: 4, sm: 0 },
            p: 4,
            pt: { xl: 6 },
            pb: { xs: 10, lg: 5 },
          }}
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
                David Sackler
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                CEO, CO-FOUNDER
              </Typography>
            </Box>
            <Stack flexDirection="row">
              <Link href="https://www.facebook.com/" target="_blank">
                <Iconify
                  icon="devicon-plain:facebook"
                  sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
                />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <Iconify
                  icon="bi:instagram"
                  sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
                />
              </Link>
              <Link href="https://twitter.com/" target="_blank">
                <Iconify
                  icon="iconoir:twitter"
                  sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
                />
              </Link>
            </Stack>
          </Box>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            David, a recent Computer Science graduate from Los Angeles, California, finds joy in the
            fast-paced world of racing his car on the track, reading books, meeting new people, and
            skiing. Along with that, beyond his professional pursuits, he has a passion for coding,
            dedicating his free time to it.
            <br /> With a solid foundation in software engineering, David spent two years at
            Genentech, specializing in automation and data science. His proficiency in handling
            complex projects efficiently earned him numerous awards.
            <br /> While immersed in the tech world, David recognized a gap in the social landscape.
            Despite the camaraderie during his academic years, post-graduation life posed challenges
            in making new connections. Struggling to approach strangers and forge friendships in his
            current environment, he identified a need for a solution. This realization led him to
            develop an app that facilitates in-person connections, driven by his desire to enrich
            lives through meaningful friendships. In an increasingly virtual world, David aims to
            counteract the trend, offering a platform that fosters genuine and nourishing social
            interactions.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        component={Card}
        sx={{
          borderRadius: 0,
          clipPath: {
            xl: 'polygon(0 0, calc(1% - 80px) 0, 180% 95px, 117% 100%, 0 92%)',
            lg: 'polygon(0 0, calc(1% - 80px) 0, 180% 103px, 117% 101%, 0 84%)',
            md: 'polygon(0 0, calc(-49% - 31px) 0, 148% 95px, 106% 100%, 0 87%)',
            sm: 'polygon(0 0, calc(2% - 31px) 0, 201% 82px, 100% 100%, 0 94%)',
            xs: 'polygon(0 0, calc(2% - 119px) 0, 201% 82px, 100% 98%, 0 95%)',
          },
        }}
      >
        <Grid
          item
          xl={8}
          lg={8}
          md={8}
          sm={12}
          xs={12}
          sx={{
            my: 4,
            pt: 3,
            px: 4,
          }}
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
                Lucas Bladua
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary' }}>
                CREATIVE DIRECTOR, CO-FOUNDER
              </Typography>
            </Box>
            <Stack flexDirection="row">
              <Link href="https://www.facebook.com/" target="_blank">
                <Iconify
                  icon="devicon-plain:facebook"
                  sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
                />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <Iconify
                  icon="bi:instagram"
                  sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
                />
              </Link>
              <Link href="https://twitter.com/" target="_blank">
                <Iconify
                  icon="iconoir:twitter"
                  sx={{ m: 1, cursor: 'pointer', color: 'primary.main' }}
                />
              </Link>
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
