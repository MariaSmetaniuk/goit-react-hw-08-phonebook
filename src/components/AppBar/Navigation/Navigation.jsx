import { Link } from './Navigation.styled';
import { Box } from 'components/Box';

export const Navigation = () => {
  return (
    <Box display="flex" gridGap={4} as="nav">
      <Link to="/">Home</Link>
      <Link to="contacts">Contacts</Link>
    </Box>
  );
};
