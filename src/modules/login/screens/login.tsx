import React from 'react';
import { View } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/buttom/buttom';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };

  return (
    <View>
      <ContainerLogin>
        <Input />
        <Button margin="16px" title="Entrar" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};

export default Login;
