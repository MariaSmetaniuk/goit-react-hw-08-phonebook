import { Button, UserText } from './UserMenu.styled';
import { Box } from 'components/Box';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Box display="flex" gridGap={4}>
      <UserText>{`Welcome, ${user.name}`}</UserText>
      <Button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Button>
    </Box>
  );
};
