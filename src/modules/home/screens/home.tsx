import React from 'react';
import Text from '../../../shared/components/text/text';
import Button from '../../../shared/components/buttom/buttom';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { logout } from '../../../shared/functions/connection/auth';
import { View } from 'react-native';

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View>
      <Text>HOME</Text>
      <Button title="SAIR" onPress={() => logout(navigation)} />
    </View>
  );
};

export default Home;
