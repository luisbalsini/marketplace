import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ContainerLogin, ImageLogo } from '../styles/login.style';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/buttom/buttom';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';
import { getAuthorizationToken } from '../../../shared/functions/connection/auth';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../shared/enums/menuUrl.enum';

const Login = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();

  useEffect(() => {
    const test = async () => {
      const token = await getAuthorizationToken();
      if (token) {
        navigate(MenuUrl.HOME);
      }
    };
    test();
  }, []);

  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="center" source={require('../../../assets/images/logo.png')} />
        <Input
          value={email}
          errorMessage={errorMessage}
          margin="0px 0px 8px 0px"
          placeholder="Digite seu email"
          title="Email"
          onChange={handleOnChangeEmail}
        />
        <Input
          value={password}
          errorMessage={errorMessage}
          onChange={handleOnChangePassword}
          secureTextEntry
          placeholder="Digite sua senha"
          title="Senha"
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="Entrar"
          onPress={handleOnPress}
          loading={loading}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
