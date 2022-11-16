import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import { Box } from 'components/Box';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      {/* <Suspense fallback={null}> */}
      <Box width="1200px" mx="auto" px={4}>
        <Outlet />
        {/* </Suspense> */}
      </Box>
    </>
  );
};
