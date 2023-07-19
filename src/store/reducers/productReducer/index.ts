import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../../shared/types/productType';
import { PaginationType } from '../../../shared/types/paginationType';

interface ProductStore {
  products: ProductType[];
  searchProducts?: PaginationType<ProductType[]>;
}

const initialState: ProductStore = {
  products: [],
  searchProducts: undefined,
};

export const productSlice = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },

    setSearchProductsAction: (state, action: PayloadAction<PaginationType<ProductType[]>>) => {
      state.searchProducts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductsAction, setSearchProductsAction } = productSlice.actions;

export default productSlice.reducer;
