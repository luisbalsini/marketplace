import React from 'react';
import { ButtonSecondary, ContainerButtom, GradientButton } from './buttom.style';
import { TouchableOpacityProps } from 'react-native';
import Text from '../text/text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';

interface ButtomProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ title, margin, type, ...props }: ButtomProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary margin={margin} {...props}>
          <Text type={textTypes.BUTTON_LIGHT} color={theme.colors.mainTheme.primary}>
            {title}
          </Text>
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ContainerButtom margin={margin} {...props}>
          <GradientButton
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            <Text type={textTypes.BUTTON_LIGHT} color={theme.colors.neutralTheme.write}>
              {title}
            </Text>
          </GradientButton>
        </ContainerButtom>
      );
  }
};

export default Button;
