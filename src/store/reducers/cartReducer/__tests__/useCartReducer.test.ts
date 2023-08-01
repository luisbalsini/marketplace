import { act, renderHook } from '@testing-library/react-native';
import { useCartReducer } from '../useCartReducer';
import { mockCart } from '../__mocks__/cart.mock';

const mockDispatch = jest.fn();
const mockSetCartAction = jest.fn();

jest.mock('..', () => ({
  setCartAction: () => mockSetCartAction,
}));

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('../../../hooks', () => ({
  useAppSelector: () => ({ cart: mockCart }),
}));

describe('', () => {
  const { result } = renderHook(() => useCartReducer());
  it('should return cart', () => {
    expect(result.current.cart).toEqual(mockCart);
  });

  it('should run setCart', () => {
    act(() => {
      result.current.setCart(mockCart);
    });

    expect(mockDispatch).toBeCalled();
  });
});
