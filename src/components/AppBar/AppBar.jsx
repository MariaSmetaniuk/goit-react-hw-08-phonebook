import { Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <h1>AppBar</h1>

      <Outlet />
    </>
  );
};
