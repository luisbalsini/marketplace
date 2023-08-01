import { CartProductType } from '../../../../shared/types/cartType';
import { mockProduct } from '../../productReducer/__mocks__/product.mock';

export const mockCartProduct: CartProductType = {
  amount: 45,
  cartId: 23,
  id: 98,
  productId: mockProduct.id,
  product: mockProduct,
};
