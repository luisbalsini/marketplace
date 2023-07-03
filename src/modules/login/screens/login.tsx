import React from 'react';
import { View } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/buttom/buttom';
import { theme } from '../../../shared/themes/theme';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };

  return (
    <View>
      <ContainerLogin>
        <Input
          placeholder="Digite seu email"
          // errorMessage="Usuario ou senha inválidos"
          title="Email"
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="Entrar"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
