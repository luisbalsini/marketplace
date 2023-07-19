import React, { useEffect, useState } from 'react';
import { FlatList, NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';
import { ProductType } from '../../../shared/types/productType';
import ProductThumbnail from '../../../shared/components/productThumbnail/productThumbnail';
import Input from '../../../shared/components/input/input';
import { DisplayFlexColumn } from '../../../shared/components/globalstyles/globalView.style';
import { ContainerHome } from '../styles/home.style';
import { useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../shared/enums/menuUrl.enum';
import { SearchProductNavigationProp } from '../../searchProduct/screens/productSearch';

const Home = () => {
  const [search, setSearch] = useState('');
  const { navigate } = useNavigation<SearchProductNavigationProp>();
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();

  useEffect(() => {
    request<ProductType[]>({
      url: URL_PRODUCT,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoToProduct = () => {
    navigate(MenuUrl.SEARCH_PRODUCT, {
      search,
    });
  };

  const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const nE = event.nativeEvent;
    setSearch(nE.text);
  };

  return (
    <View>
      <ContainerHome>
        <Input
          onPressIconRight={handleGoToProduct}
          value={search}
          iconRight="search"
          onChange={handleOnChangeSearch}
        />
      </ContainerHome>
      <DisplayFlexColumn />
      <FlatList
        horizontal
        data={products}
        renderItem={({ item }) => <ProductThumbnail margin="0px 8px" product={item} />}
      />
    </View>
  );
};

export default Home;
