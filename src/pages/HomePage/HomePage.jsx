import { Box } from 'components/Box';
import { useAuth } from 'hooks/useAuth';
import { Title } from './HomePage.styled';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box p={5} as="main">
      <Title>
        {'Welcome to the Phonebook! '}
        {isLoggedIn
          ? 'Save all your contacts here.'
          : 'Please, sing up to continue:)'}
      </Title>
    </Box>
  );
};

export default HomePage;
