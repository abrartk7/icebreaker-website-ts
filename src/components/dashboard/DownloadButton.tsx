import React from 'react';
import { Container, Button } from '@mui/material';

export default function DownloadButton() {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        variant="contained"
        sx={{ height: 60, width: 220, fontSize: '20px', borderRadius: 15 }}
      >
        Download Now
      </Button>
    </Container>
  );
}
