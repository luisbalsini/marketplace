import React, { useEffect } from 'react';
import Text from '../../../shared/components/text/text';
import { View } from 'react-native';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';
import { ProductType } from '../../../shared/types/productType';
import Button from '../../../shared/components/buttom/buttom';
import { logout } from '../../../shared/functions/connection/auth';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { theme } from '../../../shared/themes/theme';

const Home = () => {
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {
    request<ProductType[]>({
      url: URL_PRODUCT,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text color={theme.colors.neutralTheme.black}>HOME</Text>
      {products.map((product) => (
        <Text color={theme.colors.neutralTheme.black} key={product.id}>
          {product.name}
        </Text>
      ))}
      <Button title="SAIR" onPress={() => logout(navigation)} />
    </View>
  );
};

export default Home;
