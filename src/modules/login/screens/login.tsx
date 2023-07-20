import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ContainerLogin, ImageLogo } from '../styles/login.style';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/buttom/buttom';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';
import Text from '../../../shared/components/text/text';
import { textTypes } from '../../../shared/components/text/textTypes';

const Login = () => {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
    handleGoToCreateUser,
  } = useLogin();

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
        <TouchableOpacity onPress={handleGoToCreateUser}>
          <Text
            margin="16px"
            color={theme.colors.mainTheme.primary}
            type={textTypes.PARAGRAPH_SEMI_BOLD}
          >
            Cadastrar Usuario
          </Text>
        </TouchableOpacity>

        <Button
          type={theme.buttons.buttonsTheme.primary}
          title="Entrar"
          onPress={handleOnPress}
          loading={loading}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
