import { Box, Container, Typography } from '@mui/material';
import Logo from '../../components/logo';

// ----------------------------------------------------------------------

export default function Footer() {
  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Logo sx={{ mb: 1, mx: 'auto' }} />

        <Typography variant="caption" component="div">
          © 2023 All rights reserved
          <br /> made with&nbsp;❤
        </Typography>
      </Container>
    </Box>
  );

  return simpleFooter;
}
