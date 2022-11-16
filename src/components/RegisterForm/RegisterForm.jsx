import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';
import { Box } from 'components/Box';
import { Button } from 'components/contacts/Button/Button.styled';
import { Input, Label, FormStyled } from './RegisterForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, actions) => {
    dispatch(register({ name, email, password }));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Box my={4}>
        <FormStyled autoComplete="off">
          <Label>
            <div>Name</div>
            <Input type="text" name="name" required />
          </Label>
          <Label>
            <div>Email</div>
            <Input type="mail" name="email" required />
          </Label>
          <Label>
            <div>Password</div>
            <Input type="password" name="password" required />
          </Label>

          <Button type="submit">Register</Button>
        </FormStyled>
      </Box>
    </Formik>
  );
};
