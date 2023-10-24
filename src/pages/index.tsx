import Head from 'next/head';
import React from 'react';
import DashboardLayout from 'src/layouts/dashboard/DashboardLayout';
import LandingPage from 'src/components/dashboard/LandingPage';
import AboutPage from 'src/components/dashboard/AboutPage';
import DownloadButton from 'src/components/dashboard/DownloadButton';

// ----------------------------------------------------------------------

Index.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function Index() {
  return (
    <>
      <Head>
        <title>Ice Breaker | Dashboard</title>
      </Head>
      <LandingPage />
      <AboutPage />
      <DownloadButton />
    </>
  );
}
