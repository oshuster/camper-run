import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Box } from '@chakra-ui/react';

const SharedLayout = () => {
  return (
    <Box height="100%">
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default SharedLayout;
