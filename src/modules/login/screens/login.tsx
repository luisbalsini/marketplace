import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ContainerLogin, ImageLogo } from '../styles/login.style';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/buttom/buttom';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';
import Text from '../../../shared/components/text/text';
import { textTypes } from '../../../shared/components/text/textTypes';
// import { connectionAPIGet } from '../../../shared/functions/connection/connectionAPI';
// import { userType } from '../../../shared/types/userType';
// import { URL_USER } from '../../../shared/constants/urls';
// import { getAuthorizationToken } from '../../../shared/functions/connection/auth';
// import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
// import { MenuUrl } from '../../../shared/enums/menuUrl.enum';

const Login = () => {
  // const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
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

  useEffect(() => {
    const test = async () => {
      // const token = await getAuthorizationToken();
      // if (token) {
      //   navigate(MenuUrl.HOME);
      // }
      // const resultback = await connectionAPIGet<userType>(URL_USER).catch(() => undefined);
      // console.log('connectionAPIget', resultback);
      // if (resultback) {
      //   navigate(MenuUrl.HOME);
      // }
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
