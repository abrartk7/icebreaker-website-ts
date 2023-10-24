// @mui
import { Box } from '@mui/material';
// auth
// components
import Main from './Main';
import Header from './header';
import Footer from './Footer';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <Header />

      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        <Main>{children}</Main>
      </Box>

      <Footer />
    </>
  );
}
