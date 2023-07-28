import React from 'react';
import { ModalProps as ModalPropsReact, Modal as ModalReact } from 'react-native';
import { ContainerModal, IconCloseModal } from './modal.style';
import Text from '../text/text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import Button from '../buttom/buttom';
import { modalTestId } from './__mocks__/modal.testid';

interface ModalProps extends ModalPropsReact {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {
  return (
    <ModalReact
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        onCloseModal();
      }}
      {...props}
    >
      <ContainerModal>
        <Text
          testID={modalTestId.MODAL_TITLE}
          margin="16px"
          color={theme.colors.mainTheme.primary}
          type={textTypes.PARAGRAPH_SEMI_BOLD}
        >
          {title}
        </Text>
        <Text color="#000" testID={modalTestId.MODAL_TEXT}>
          {text}
        </Text>
        <Button title="OK" onPress={onCloseModal} testID={modalTestId.MODAL_CLOSE_BUTTON} />
        <IconCloseModal
          onPress={onCloseModal}
          name="cross"
          size={12}
          color="#000"
          testID={modalTestId.MODAL_CLOSE_ICON}
        />
      </ContainerModal>
    </ModalReact>
  );
};

export default Modal;
