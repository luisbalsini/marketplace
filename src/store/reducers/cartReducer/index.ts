import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartType } from '../../../shared/types/cartType';

interface CartStore {
  carts?: CartType;
}

const initialState: CartStore = {
  carts: undefined,
};

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    setCartAction: (state, action: PayloadAction<CartType>): void => {
      state.carts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCartAction } = cartSlice.actions;

export default cartSlice.reducer;
