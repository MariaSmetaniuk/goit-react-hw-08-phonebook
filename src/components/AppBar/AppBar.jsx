import { Navigation } from './Navigation/Navigation';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { Header } from './AppBar.styled';
import { Box } from 'components/Box';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
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
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </Header>
  );
};
