import React from 'react';
import { View } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/buttom/buttom';
import { theme } from '../../../shared/themes/theme';
import { Icon } from '../../../shared/components/icon/icon';

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };

  return (
    <View>
      <ContainerLogin>
        <Icon name="home3" size={35} color="#000" />
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
