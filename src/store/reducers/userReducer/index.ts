import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { userType } from '../../../shared/types/userType';

interface userStore {
  user?: userType;
}

const initialState: userStore = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<userType>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserAction } = userSlice.actions;

export default userSlice.reducer;
