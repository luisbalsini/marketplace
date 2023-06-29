import React from 'react';
import { ContainerButtom } from './buttom.style';
import { TouchableOpacityProps } from 'react-native';
import Text from '../text/text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';

interface ButtomProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, margin, ...props }: ButtomProps) => {
  return (
    <ContainerButtom margin={margin} {...props}>
      <Text color={theme.colors.neutralTheme.write}>{title}</Text>
    </ContainerButtom>
  );
};

export default Button;
