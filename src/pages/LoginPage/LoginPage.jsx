import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box } from 'components/Box';

const LoginPage = () => {
  return (
    <Box p={5} as="main">
      <Box
        width="332px"
        p={4}
        mx="auto"
        bg="white"
        borderRadius="md"
        boxShadow="primary"
        color="text"
      >
        <h1>Sing In</h1>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
