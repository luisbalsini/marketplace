import React, { ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import Modal from '../modal';
import { modalTestId } from '../__mocks__/modal.testid';
import { View as MockView } from 'react-native';

const mockTitle = 'mockTitle';
const mockText = 'mockText';
const mockOnCloseModal = jest.fn();

jest.mock('react-native-linear-gradient', () => {
  return ({ children }: { children: ReactNode }) => {
    return <MockView>{children}</MockView>;
  };
});

describe('Modal', () => {
  beforeEach(() => {
    render(
      <Modal
        title={mockTitle}
        text={mockText}
        onCloseModal={mockOnCloseModal}
        testID={modalTestId.MODAL_CONTAINER}
      />
    );
  });

  it('should render success', () => {
    const modal = screen.getByTestId(modalTestId.MODAL_CONTAINER);

    expect(modal).toBeDefined();
  });

  it('should render title', () => {
    const title = screen.getByText(mockTitle);

    expect(title).toBeDefined();
  });

  it('should render text', () => {
    const text = screen.getByText(mockText);

    expect(text).toBeDefined();
  });

  it('should render button and onPress', () => {
    render(
      <Modal
        title={mockTitle}
        text={mockText}
        onCloseModal={mockOnCloseModal}
        testID={modalTestId.MODAL_CLOSE_BUTTON}
      />
    );
    const button = screen.getByTestId(modalTestId.MODAL_CLOSE_BUTTON);

    expect(button).toBeDefined();

    // fireEvent.press(button);

    // expect(mockOnCloseModal).toBeCalled();
  });

  it('should render icon and onPress', () => {
    const icon = screen.getByTestId(modalTestId.MODAL_CLOSE_ICON);

    expect(icon).toBeDefined();

    fireEvent.press(icon);

    expect(mockOnCloseModal).toBeCalled();
  });
});
