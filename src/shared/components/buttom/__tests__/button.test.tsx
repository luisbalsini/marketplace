import React, { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { View as MockView } from 'react-native';
import Button from '../buttom';
import { buttonTestId } from '../__mocks__/button.testid';

const mockOnPress = jest.fn();

jest.mock('react-native-linear-gradient', () => {
  return ({ children }: { children: ReactNode }) => {
    return <MockView>{children}</MockView>;
  };
});

describe('Button', () => {
  beforeEach(() => {
    render(<Button title="Test" testID={buttonTestId.BUTTON_TEST_ID} onPress={mockOnPress} />);
  });

  it('should render button success', () => {
    const button = screen.getByTestId(buttonTestId.BUTTON_TEST_ID);

    expect(button).toBeDefined();
  });

  it('should call onPress', () => {
    const button = screen.getByTestId(buttonTestId.BUTTON_TEST_ID);

    fireEvent.press(button);

    expect(mockOnPress).toBeCalled();
  });

  it('should hide loading', () => {
    const loading = screen.queryAllByTestId(buttonTestId.BUTTON_LOADING);

    expect(loading.length).toEqual(0);
  });

  it('should render loading', () => {
    render(
      <Button title="Test" testID={buttonTestId.BUTTON_TEST_ID} onPress={mockOnPress} loading />
    );

    const loading = screen.queryAllByTestId(buttonTestId.BUTTON_LOADING);

    expect(loading.length).toEqual(0);
  });
});
