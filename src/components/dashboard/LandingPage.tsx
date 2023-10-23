import React from 'react';
import { Grid, Stack, Container, Typography, Button } from '@mui/material';

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" mb={6}>
        <Grid
          item
          xl={4}
          lg={4}
          md={4}
          xs={12}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            pl: 2,
            pr: { xl: 2, lg: 2, md: 0, xs: 2 },
            minHeight: { lg: 485, xl: 565 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: { xs: '32px', sm: '38px', md: '55px' },
              lineHeight: '1.10',
              color: 'primary.main',
            }}
          >
            SpeakEZ
          </Typography>

          <Typography
            sx={{
              fontSize: { lg: '1.175rem', xs: '16px', sm: '20px' },
              letterSpacing: '-.03125rem',
              lineHeight: '1.45',
              color: 'text.secondary',
              margin: '10px 0 30px',
            }}
          >
            <span style={{ color: 'black', fontWeight: 600 }}>Join our </span>
            Ice Breaker community and break the ice with those peoples who are just a stone&apos;s
            away and share your enthusiasm with similar favorite topics!
          </Typography>

          <Stack
            sx={{
              display: 'flex',
              justifyContent: {
                xl: 'flex-start',
                lg: 'flex-start',
                md: 'flex-start',
                sm: 'center',
                xs: 'center',
              },
              flexDirection: { sm: 'row', xs: 'row' },
            }}
          >
            <Button
              variant="contained"
              sx={{
                fontSize: '16px',
                textTransform: 'uppercase',
                width: '130px',
                height: '50px',
                mr: 2,
              }}
            >
              Register
            </Button>
            <Button
              variant="outlined"
              sx={{
                fontSize: '16px',
                textTransform: 'uppercase',
                width: '130px',
                height: '50px',
              }}
            >
              Login
            </Button>
          </Stack>
        </Grid>

        <Grid
          item
          xl={8}
          lg={8}
          md={8}
          xs={12}
          sx={{
            display: { xs: 'none', md: 'block', lg: 'block' },
            pl: 5,
          }}
        >
          <img
            style={{ maxWidth: '100%' }}
            alt="landingImage"
            src="../assets/images/landingPng4.png"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
