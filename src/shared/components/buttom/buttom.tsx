import React from 'react';
import { ContainerButtom } from './buttom.style';
import { Text, TouchableOpacityProps } from 'react-native';

interface ButtomProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, margin, ...props }: ButtomProps) => {
  return (
    <ContainerButtom margin={margin} {...props}>
      <Text>{title}</Text>
    </ContainerButtom>
  );
};

export default Button;
