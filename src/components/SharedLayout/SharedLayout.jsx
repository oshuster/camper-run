import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Box } from '@chakra-ui/react';
import { Fotter } from '../Fotter/Fotter';

const SharedLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Box height="100%">
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
      {!(pathname === '/favorites') && <Fotter />}
    </>
  );
};

export default SharedLayout;
