import React, { useState } from 'react';
import { ContainerInput, IconEye } from './input.style';
import { NativeSyntheticEvent, TextInputChangeEventData, TextInputProps, View } from 'react-native';
import { DisplayFlexColumn } from '../globalstyles/globalView.style';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import Text from '../text/text';
import { insertMaskInCpf } from '../../functions/cpf';
import { insertMaskInPhone } from '../../functions/phone';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
  type?: 'cel-phone' | 'cpf';
}

const Input = ({
  margin,
  secureTextEntry,
  title,
  errorMessage,
  onChange,
  type,
  ...props
}: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState(!!secureTextEntry);

  const handleOnChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (onChange) {
      let text = event.nativeEvent.text;
      switch (type) {
        case 'cpf':
          text = insertMaskInCpf(text);
          break;

        case 'cel-phone':
          text = insertMaskInPhone(text);
          break;

        default:
          break;
      }
      onChange({
        ...event,
        nativeEvent: {
          ...event.nativeEvent,
          text,
        },
      });
    }
  };

  const handleOnPressEye = () => {
    setCurrentSecure((current) => !current);
  };

  return (
    <DisplayFlexColumn margin={margin}>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          color={theme.colors.grayTheme.gray100}
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
        >
          {title}
        </Text>
      )}
      <View>
        <ContainerInput
          {...props}
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentSecure}
          isError={errorMessage}
          onChange={handleOnChange}
        />
        {secureTextEntry && (
          <IconEye
            name={currentSecure ? 'eye' : 'eye-blocked'}
            onPress={handleOnPressEye}
            size={20}
            color="#000"
          />
        )}
      </View>
      {errorMessage && (
        <Text
          margin="4px 0px 0px 8px"
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
          color={theme.colors.orangeTheme.orange80}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
