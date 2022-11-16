import { Button, UserText } from './UserMenu.styled';
import { Box } from 'components/Box';

export const UserMenu = () => {
  return (
    <Box display="flex" gridGap={4}>
      <UserText>Welcome, user</UserText>
      <Button type="button">LogOut</Button>
    </Box>
  );
};
