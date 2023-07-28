import React, { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { View as MockView } from 'react-native';
import Button from '../buttom';
import { buttonTestId } from '../__mocks__/button.testid';
import { theme } from '../../../themes/theme';

const mockOnPress = jest.fn();
const mockTitle = 'mockTitle';

jest.mock('react-native-linear-gradient', () => {
  return ({ children }: { children: ReactNode }) => {
    return <MockView>{children}</MockView>;
  };
});

describe('Button', () => {
  beforeEach(() => {
    render(<Button title={mockTitle} onPress={mockOnPress} />);
  });

  it('should render button success', () => {
    const button = screen.getByTestId(buttonTestId.BUTTON_DEFAULT);

    expect(button).toBeDefined();
  });

  it('should call onPress', () => {
    const button = screen.getByTestId(buttonTestId.BUTTON_DEFAULT);

    fireEvent.press(button);

    expect(mockOnPress).toBeCalled();
  });

  it('should hide loading', () => {
    const loading = screen.queryAllByTestId(buttonTestId.BUTTON_LOADING);

    expect(loading.length).toEqual(0);
  });

  it('should render loading', () => {
    render(<Button title="Test" onPress={mockOnPress} loading />);

    const loading = screen.queryAllByTestId(buttonTestId.BUTTON_LOADING);

    expect(loading.length).toEqual(0);
  });

  it('should render secondary button', () => {
    render(
      <Button title="Test" type={theme.buttons.buttonsTheme.secondary} onPress={mockOnPress} />
    );

    const button = screen.getByTestId(buttonTestId.BUTTON_SECONDARY);

    expect(button).toBeDefined();
  });

  it('should render primary button', () => {
    render(<Button title="Test" type={theme.buttons.buttonsTheme.primary} onPress={mockOnPress} />);

    const button = screen.getByTestId(buttonTestId.BUTTON_DEFAULT);

    expect(button).toBeDefined();
  });

  it('should render disabled button', () => {
    render(<Button title="Test" disabled onPress={mockOnPress} />);

    const button = screen.getByTestId(buttonTestId.BUTTON_DISABLED);

    expect(button).toBeDefined();
  });

  it('should render title', () => {
    const title = screen.getByTestId(buttonTestId.BUTTON_TITLE);

    expect(title).toBeDefined();
  });

  it('should render title by text', () => {
    const title = screen.getByText(mockTitle);

    expect(title).toBeDefined();
  });
});
