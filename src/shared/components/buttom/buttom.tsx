import React from 'react';
import {
  ButtonSecondary,
  ContainerButtom,
  GradientButton,
  ActivityIndicatorButton,
  ButtonDisabled,
} from './buttom.style';
import { TouchableOpacityProps } from 'react-native';
import Text from '../text/text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import { buttonTestId } from './__tests__/button.testid';

interface ButtomProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, margin, type, disabled, loading, onPress, ...props }: ButtomProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text type={textTypes.BUTTON_SEMI_BOLD} color={color}>
        {title}
      </Text>
      {loading && (
        <ActivityIndicatorButton
          testID={buttonTestId.BUTTON_TEST_ID}
          color={theme.colors.neutralTheme.write}
        />
      )}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin}>
        {renderText(theme.colors.neutralTheme.write)}
      </ButtonDisabled>
    );
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ContainerButtom {...props} margin={margin} onPress={handleOnPress}>
          <GradientButton
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.write)}
          </GradientButton>
        </ContainerButtom>
      );
  }
};

export default Button;
