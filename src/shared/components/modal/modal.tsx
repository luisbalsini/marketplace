import React from 'react';
import { Alert, ModalProps as ModalPropsReact, Modal as ModalReact } from 'react-native';
import { ContainerModal, IconCloseModal } from './modal.style';
import Text from '../text/text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import Button from '../buttom/buttom';

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
        Alert.alert('Modal has been closed.');
        onCloseModal();
      }}
      {...props}
    >
      <ContainerModal>
        <Text
          margin="16px"
          color={theme.colors.mainTheme.primary}
          type={textTypes.PARAGRAPH_SEMI_BOLD}
        >
          {title}
        </Text>
        <Text color="#000">{text}</Text>
        <Button title="OK" onPress={onCloseModal} />
        <IconCloseModal onPress={onCloseModal} name="cross" size={12} color="#000" />
      </ContainerModal>
    </ModalReact>
  );
};

export default Modal;
