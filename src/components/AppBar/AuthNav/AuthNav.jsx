import { Link } from './Authnav.styled';
import { Box } from 'components/Box';

export const AuthNav = () => {
  return (
    <Box display="flex" gridGap={3}>
      <Link to="login">SingIn</Link>
      <Link to="register">SingUp</Link>
    </Box>
  );
};
