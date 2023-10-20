// next
import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import HomePage from 'src/components/dashboard/HomePage';
import MinimalAbout from 'src/components/dashboard/MinimalAbout';
import DashboardLayout from 'src/layouts/dashboard/DashboardLayout';
import { m, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import HomeMinimal from 'src/components/dashboard/HomeMinimal';

// ----------------------------------------------------------------------

MinimalPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function MinimalPage() {
  const theme = useTheme();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progress = (
    <m.div
      style={{
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1999,
        position: 'fixed',
        transformOrigin: '0%',
        backgroundColor: theme.palette.primary.main,
        scaleX,
      }}
    />
  );

  return (
    <>
      <Head>
        <title>Ice Breaker | Dashboard</title>
      </Head>

      {progress}

      <HomePage />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeMinimal />
        <MinimalAbout />
      </Box>
    </>
  );
}
