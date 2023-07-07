import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { globalModalType } from '../../../shared/components/modal/globalModal/globalModal';

interface globalStore {
  modal: globalModalType;
}

const initialState: globalStore = {
  modal: {
    visible: false,
    text: '',
    title: '',
  },
};

export const globalSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setModalAction: (state, action: PayloadAction<globalModalType>) => {
      state.modal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setModalAction } = globalSlice.actions;

export default globalSlice.reducer;
