import Head from 'next/head';
import React from 'react';
import DashboardLayout from 'src/layouts/dashboard/DashboardLayout';
import LandingPage from 'src/components/dashboard/LandingPage';
import AboutPage from 'src/components/dashboard/AboutPage';
import { GetStaticProps } from 'next';

// ----------------------------------------------------------------------

Index.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function Index() {
  return (
    <>
      <Head>
        <title>Ice Breaker</title>
        <meta property="og:title" content="Ice Breaker" />
        <meta
          property="og:description"
          content="Join our Ice Breaker community and break the ice with those peoples who are just a stone's away and share your enthusiasm with similar favorite topics!"
        />
        <meta property="og:url" content="https://icebreaker-website-ts.vercel.app/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dsvcw2svb/image/upload/v1698158483/Ice-breaker-website/v1grm02lbkkip6cxbu2b.png"
        />
      </Head>
      <LandingPage />
      <AboutPage />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    return {
      props: {
        notFound: true,
        data: [],
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
};
