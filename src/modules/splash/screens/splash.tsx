/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ContainerSplash, ImageLogoSplash } from '../styles/splash.style';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { URL_USER } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../shared/enums/menuUrl.enum';
import { getAuthorizationToken } from '../../../shared/functions/connection/auth';

const TIME_SLEEP = 5000;

const Splash = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { request } = useRequest();
  const { setUser } = useUserReducer();

  useEffect(() => {
    const findUser = async () => {
      let returnUser;
      const token = await getAuthorizationToken();

      if (token) {
        returnUser = await request({
          url: URL_USER,
          method: MethodEnum.GET,
          saveGlobal: setUser,
        });
      }
      return returnUser;
    };

    const verifyLogin = async () => {
      // const returnUser = await findUser();
      const [returnUser] = await Promise.all([
        findUser(),
        new Promise((r) => setTimeout(r, TIME_SLEEP)),
      ]);

      if (returnUser) {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
      } else {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.LOGIN }],
        });
      }
    };
    verifyLogin();
  }, []);

  return (
    <ContainerSplash>
      <ImageLogoSplash resizeMode="center" source={require('../../../assets/images/logo.png')} />
    </ContainerSplash>
  );
};

export default Splash;
