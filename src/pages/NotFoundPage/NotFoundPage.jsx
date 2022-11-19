import { Box } from 'components/Box';
import { Title } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Box p={5} as="main">
      <Title>Page is not found :(</Title>
    </Box>
  );
};

export default NotFoundPage;
