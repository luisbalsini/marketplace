import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { returnLogin } from '../types/returnLogin';
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../enums/menuUrl.enum';
import { setAuthorizationToken } from '../functions/connection/auth';

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoding] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoding(true);
    console.log('Logando');
    // MUITO IMPORTANTE PARA O AXIOS MOBILE FUNCIONAR O APP
    // MOBILE E O PC DEVELOP PRECISAM ESTAR NA MESMA REDE
    // const returnApi = await axios.get('http://10.1.0.112:3000/correios/01029-010');
    await connectionAPIPost<returnLogin>('http://10.1.0.112:3000/auth', body)
      .then((result) => {
        console.log(result);
        setAuthorizationToken(result.accessToken);
        setUser(result.user);
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
        console.log('User', result.user);
      })
      .catch(() => {
        setModal({
          visible: true,
          title: 'Erro',
          text: 'Usuario ou senha inválidos !',
        });
      })
      .finally(() => {
        setLoding(false);
      });
  };

  return {
    loading,
    errorMessage,
    authRequest,
    setErrorMessage,
  };
};
