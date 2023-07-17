import React from 'react';
import Text from '../../../shared/components/text/text';
import { theme } from '../../../shared/themes/theme';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import Button from '../../../shared/components/buttom/buttom';
import { logout } from '../../../shared/functions/connection/auth';

const Profile = () => {
  const navigate = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <>
      <Text color={theme.colors.neutralTheme.black}>Profile</Text>
      <Button title="Sair" onPress={() => logout(navigate)} />
    </>
  );
};

export default Profile;
