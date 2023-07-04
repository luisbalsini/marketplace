import React from 'react';
import { View } from 'react-native';
import { ContainerLogin, ImageLogo } from '../styles/login.style';
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
        <ImageLogo resizeMode="center" source={require('../../../assets/images/logo.png')} />
        <Input margin="0px 0px 8px 0px" placeholder="Digite seu email" title="Email" />
        <Input secureTextEntry placeholder="Digite sua senha" title="Senha" />
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
