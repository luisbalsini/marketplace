import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { returnLogin } from '../types/returnLogin';
import { userType } from '../types/userType';

export const useRequest = () => {
  const [loading, setLoding] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState<userType>();

  const authRequest = async (body: RequestLogin) => {
    setLoding(true);

    // MUITO IMPORTANTE PARA O AXIOS MOBILE FUNCIONAR O APP
    // MOBILE E O PC DEVELOP PRECISAM ESTAR NA MESMA REDE
    // const returnApi = await axios.get('http://10.1.0.112:3000/correios/01029-010');
    await connectionAPIPost<returnLogin>('http://10.1.0.112:3000/auth', body)
      .then((result) => {
        setUser(result.user);
      })
      .catch(() => {
        setErrorMessage('Usuario ou senha inválidos !');
      });
    // console.log('retornoAxios', returnApi);

    setLoding(false);
  };

  return {
    loading,
    user,
    errorMessage,
    authRequest,
    setErrorMessage,
  };
};
