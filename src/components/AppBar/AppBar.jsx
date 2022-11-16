import { Navigation } from './Navigation/Navigation';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { Header } from './AppBar.styled';
import { Box } from 'components/Box';

export const AppBar = () => {
  return (
    <Header>
      <Box
        width="1200px"
        mx="auto"
        px={4}
        display="flex"
        justifyContent="space-between"
      >
        <Navigation />
        <AuthNav />
        <UserMenu />
      </Box>
    </Header>
  );
};
