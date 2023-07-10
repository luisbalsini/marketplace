import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { returnLogin } from '../types/returnLogin';
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export const useRequest = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
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
        setUser(result.user);
        navigate('Home');
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