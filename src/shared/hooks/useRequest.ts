import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import ConnectionAPI, {
  connectionAPIPost,
  methodType,
} from '../functions/connection/connectionAPI';
import { returnLogin } from '../types/returnLogin';
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../enums/menuUrl.enum';
import { setAuthorizationToken } from '../functions/connection/auth';

interface requestProps<T, B = unknown> {
  url: string;
  method: methodType;
  saveGlobal?: (object: T) => void;
  body?: B;
  message?: string;
}

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoding] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const request = async <T, B = unknown>({
    url,
    method,
    saveGlobal,
    body,
    message,
  }: requestProps<T, B>): Promise<T | undefined> => {
    setLoding(true);
    const returnObject: T | undefined = await ConnectionAPI.connect<T, B>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }

        if (message) {
          setModal({
            visible: true,
            title: 'Sucesso!',
            text: message,
          });
        }

        return result;
      })
      .catch((error: Error) => {
        setModal({
          visible: true,
          title: 'Erro',
          text: error.message,
        });
        return undefined;
      });
    setLoding(false);
    return returnObject;
  };

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
    request,
    authRequest,
    setErrorMessage,
  };
};
