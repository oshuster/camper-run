import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Box } from '@chakra-ui/react';
import { Fotter } from '../Fotter/Fotter';

const SharedLayout = () => {
  return (
    <Box height="100%">
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Fotter />
    </Box>
  );
};

export default SharedLayout;
