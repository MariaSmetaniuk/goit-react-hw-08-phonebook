import { useAuth } from 'hooks/useAuth';
import { Link } from './Navigation.styled';
import { Box } from 'components/Box';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box display="flex" gridGap={4} as="nav">
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="contacts">Contacts</Link>}
    </Box>
  );
};
