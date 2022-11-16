import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import { Box } from 'components/Box';
import { Button } from 'components/contacts/Button/Button.styled';
import { Input, Label, FormStyled } from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, actions) => {
    dispatch(logIn({ email, password }));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Box my={4}>
        <FormStyled autoComplete="off">
          <Label>
            <div>Email</div>
            <Input type="mail" name="email" required />
          </Label>
          <Label>
            <div>Password</div>
            <Input type="password" name="password" required />
          </Label>

          <Button type="submit">Login</Button>
        </FormStyled>
      </Box>
    </Formik>
  );
};
