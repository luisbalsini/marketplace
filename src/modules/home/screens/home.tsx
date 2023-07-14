import React, { useEffect } from 'react';
import Text from '../../../shared/components/text/text';
import { TouchableOpacity, View } from 'react-native';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';
import { ProductType } from '../../../shared/types/productType';
import Button from '../../../shared/components/buttom/buttom';
import { logout } from '../../../shared/functions/connection/auth';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../shared/themes/theme';
import { MenuUrl } from '../../../shared/enums/menuUrl.enum';
import { ProductNavigationProp } from '../../product/screens/product';

const Home = () => {
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();
  const navigation = useNavigation<ProductNavigationProp>();

  useEffect(() => {
    request<ProductType[]>({
      url: URL_PRODUCT,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoToProduct = (product: ProductType) => {
    navigation.navigate(MenuUrl.PRODUCT, { product });
  };

  return (
    <View>
      <Text color={theme.colors.neutralTheme.black}>HOME</Text>
      {products.map((product) => (
        <TouchableOpacity onPress={() => handleGoToProduct(product)} key={product.id}>
          <Text color={theme.colors.neutralTheme.black}>{product.name}</Text>
        </TouchableOpacity>
      ))}
      <Button title="SAIR" onPress={() => logout(navigation)} />
    </View>
  );
};

export default Home;
