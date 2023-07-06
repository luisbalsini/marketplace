import { useAppSelector } from '../../hooks';
import { userType } from '../../../shared/types/userType';
import { setUserAction } from '.';
import { useDispatch } from 'react-redux';

export const useUserReducer = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => {
    state.userReducer;
  });

  const setUser = (currentUser: userType) => {
    dispatch(setUserAction(currentUser));
  };

  return {
    user,
    setUser,
  };
};
