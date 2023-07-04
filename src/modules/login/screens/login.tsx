import React, { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';
import { ContainerLogin, ImageLogo } from '../styles/login.style';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/buttom/buttom';
import { theme } from '../../../shared/themes/theme';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoding] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleOnPress = async () => {
    setLoding(true);

    // MUITO IMPORTANTE PARA O AXIOS MOBILE FUNCIONAR O APP
    // MOBILE E O PC DEVELOP PRECISAM ESTAR NA MESMA REDE
    // const returnApi = await axios.get('http://10.1.0.112:3000/correios/01029-010');
    const returnApi = await axios
      .post('http://10.1.0.112:3000/auth', {
        email,
        password,
      })
      .catch(() => {
        setErrorMessage('Usuario ou senha inválidos !');
      });
    console.log('retornoAxios', returnApi);
    setLoding(false);
    console.log('clicou');
  };

  const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };

  const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };

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
