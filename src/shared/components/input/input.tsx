import React from 'react';
import { ContainerInput } from './input.style';
import { TextInputProps } from 'react-native';

type InputProps = TextInputProps;

const Input = ({ ...props }: InputProps) => {
  return <ContainerInput {...props} />;
};

export default Input;
