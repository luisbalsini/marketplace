import { useEffect, useState } from 'react';
import { createUserType } from '../../../shared/types/createUserType';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_USER } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../shared/enums/menuUrl.enum';
import { validateCpf } from '../../../shared/functions/cpf';
import { validatePhone } from '../../../shared/functions/phone';
import { validateEmail } from '../../../shared/functions/email';
import { removeSpecialCharacters } from '../../../shared/functions/characters';

export const DEFAULT_CREATE_USER = {
  confirmPassword: '',
  cpf: '',
  email: '',
  name: '',
  password: '',
  phone: '',
};

export const useCreateUser = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { request, loading } = useRequest();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [createUser, setCreateUser] = useState<createUserType>(DEFAULT_CREATE_USER);

  useEffect(() => {
    if (
      createUser.name !== '' &&
      validatePhone(createUser.phone) &&
      validateEmail(createUser.email) &&
      validateCpf(createUser.cpf) &&
      createUser.password !== '' &&
      createUser.password === createUser.confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [createUser]);

  const handleCreateUser = async () => {
    const resultCreateUser = await request({
      url: URL_USER,
      method: MethodEnum.POST,
      body: {
        ...createUser,
        phone: removeSpecialCharacters(createUser.phone),
        cpf: removeSpecialCharacters(createUser.cpf),
      },
      message: 'Usuario cadastrado com sucesso !',
    });

    if (resultCreateUser) {
      reset({
        index: 0,
        routes: [{ name: MenuUrl.LOGIN }],
      });
    }
  };

  const handleOnChangeInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string
  ) => {
    let text = event.nativeEvent.text;
    setCreateUser((currentCreateUser) => ({
      ...currentCreateUser,
      [name]: text,
    }));
  };

  return {
    createUser,
    loading,
    disabled,
    handleOnChangeInput,
    handleCreateUser,
  };
};
