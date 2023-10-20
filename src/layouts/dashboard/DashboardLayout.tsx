// @mui
import { Box } from '@mui/material';
// auth
import AuthGuard from '../../auth/AuthGuard';
// components
import Main from './Main';
import Header from './header';
import Footer from './Footer';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const renderContent = () => (
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

  return <AuthGuard> {renderContent()} </AuthGuard>;
}
