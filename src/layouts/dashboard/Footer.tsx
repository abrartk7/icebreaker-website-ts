import { Box, Grid, Link, Stack, Divider, Container, Typography, IconButton } from '@mui/material';
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    name: 'FaceBook',
    icon: 'eva:facebook-fill',
    color: '#1877F2',
    path: 'https://www.facebook.com/',
  },
  {
    value: 'instagram',
    name: 'Instagram',
    icon: 'ant-design:instagram-filled',
    color: '#E02D69',
    path: 'https://www.instagram.com/',
  },

  {
    value: 'twitter',
    name: 'Twitter',
    icon: 'eva:twitter-fill',
    color: '#00AAEC',
    path: 'https://twitter.com/',
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container sx={{ pt: 5 }}>
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>

          <Grid item xs={10} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Join our Ice Breaker community and break the ice with those peoples who are just a
              stone&apos;s away and share your enthusiasm with similar favorite topics!
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              justifyContent="space-between"
              direction={{ xs: 'column', md: 'row' }}
            >
              <Box>
                <Typography variant="body2" sx={{ mb: 1, mt: { xs: 3, md: 0, lg: 0, xl: 0 } }}>
                  CONTACT US
                </Typography>
                <Typography variant="body2">support@icebreaker.cc</Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="body2" sx={{ ml: 1, mb: 1 }}>
                  ICE BREAKER APP
                </Typography>
                <Link href="https://apps.apple.com/us/genre/mac/id39?mt=12" target="_blank">
                  <img
                    src="../assets/images/appstore.png"
                    alt="appStore-icon"
                    style={{ width: 120, cursor: 'pointer', marginBottom: 3 }}
                  />
                </Link>
                <Link href="https://play.google.com/store/games?hl=en&gl=US" target="_blank">
                  <img
                    src="../assets/images/playstore.png"
                    alt="playstore-icon"
                    style={{ width: 120, cursor: 'pointer' }}
                  />
                </Link>
              </Box>
              <Box flexDirection="row">
                <Typography variant="body2" sx={{ ml: 1.5 }}>
                  FOLLOW US
                </Typography>
                <Stack
                  spacing={1}
                  direction="row"
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                  sx={{
                    mt: 1,
                    mb: { xs: 5, md: 0 },
                  }}
                >
                  {_socials.map((social) => (
                    <Link href={social.path} target="_blank">
                      <IconButton key={social.name}>
                        <Iconify icon={social.icon} color={social.color} />
                      </IconButton>
                    </Link>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="caption"
          component="div"
          sx={{
            mt: 10,
            pb: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2023. All rights reserved
        </Typography>
      </Container>
    </Box>
  );

  return mainFooter;
}
