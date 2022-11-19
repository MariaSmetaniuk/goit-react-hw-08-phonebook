import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box } from 'components/Box';

const RegisterPage = () => {
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
        <h1>Sing Up</h1>
        <RegisterForm />
      </Box>
    </Box>
  );
};

export default RegisterPage;
