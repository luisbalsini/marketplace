import { act, renderHook } from '@testing-library/react-native';
import { DEFAULT_CREATE_USER, useCreateUser } from '../useCreateUser';

const mockReset = jest.fn();
const mockRequest = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    reset: mockReset,
  }),
}));

jest.mock('../../../../shared/hooks/useRequest', () => ({
  useRequest: () => ({
    request: mockRequest,
    loading: false,
  }),
}));

describe('should change createUser after onChangeInput', () => {
  it('should return create user default', () => {
    const { result } = renderHook(() => useCreateUser());

    expect(result.current.createUser).toEqual(DEFAULT_CREATE_USER);
  });

  it('', () => {
    const { result } = renderHook(() => useCreateUser());
    const mockText = 'deggsdgsdg';
    const event: any = {
      nativeEvent: {
        text: mockText,
      },
    };
    act(() => {
      result.current.handleOnChangeInput(event, 'cpf');
    });

    expect(result.current.createUser.cpf).toEqual(mockText);
  });
});
