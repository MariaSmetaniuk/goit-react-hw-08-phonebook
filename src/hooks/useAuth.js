import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/selectors';

export const useAuth = () => {
  return {
    isLoggenIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};
