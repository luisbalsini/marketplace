import React, { useState } from 'react';
import { ContainerInput, IconEye } from './input.style';
import { TextInputProps, View } from 'react-native';
import { DisplayFlexColumn } from '../globalstyles/globalView.style';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import Text from '../text/text';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = ({ margin, secureTextEntry, title, errorMessage, ...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState(!!secureTextEntry);

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
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentSecure}
          isError={errorMessage}
          {...props}
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
