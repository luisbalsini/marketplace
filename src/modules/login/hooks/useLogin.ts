import axios from 'axios';
import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export const useLogin = () => {
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

  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  };
};
