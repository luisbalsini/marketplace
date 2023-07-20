import React, { useEffect, useState } from 'react';
import Text from '../../../shared/components/text/text';
import { theme } from '../../../shared/themes/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { URL_PRODUCT_PAGE } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';
import { PaginationType } from '../../../shared/types/paginationType';
import { ProductType } from '../../../shared/types/productType';
import Input from '../../../shared/components/input/input';
import { NativeSyntheticEvent, ScrollView, TextInputChangeEventData } from 'react-native';
import ProductThumbnail from '../../../shared/components/productThumbnail/productThumbnail';

export type SearchProductNavigationProp = NativeStackNavigationProp<
  Record<string, SearchProductParams>
>;

export interface SearchProductParams {
  search: string;
}

const SearchProduct = () => {
  const { searchProducts, setSearchProducts } = useProductReducer();
  const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
  const { request } = useRequest();
  const [value, setValue] = useState(params?.search || '');

  useEffect(() => {
    setValue(params?.search);
  }, [params]);

  useEffect(() => {
    if (value) {
      request<PaginationType<ProductType[]>>({
        url: `${URL_PRODUCT_PAGE}?search=${value}`,
        method: MethodEnum.GET,
        saveGlobal: setSearchProducts,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const nE = event.nativeEvent;
    setValue(nE.text);
  };

  console.log('searchproduct', searchProducts);

  return (
    <>
      <Input onChange={handleOnChangeInput} value={value} iconRight="search" />
      {searchProducts && searchProducts.data && (
        <ScrollView>
          {searchProducts.data.map((product) => (
            <ProductThumbnail key={product.id} product={product} />
          ))}
        </ScrollView>
        // <Text color={theme.colors.neutralTheme.black}>Tem produto</Text>
      )}
      <Text color={theme.colors.neutralTheme.black}>Todos os produtos</Text>
    </>
  );
};

export default SearchProduct;
