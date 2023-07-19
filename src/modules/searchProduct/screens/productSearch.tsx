import React, { useEffect } from 'react';
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

export type SearchProductNavigationProp = NativeStackNavigationProp<
  Record<string, SearchProductParams>
>;

export interface SearchProductParams {
  search: string;
}

const SearchProduct = () => {
  const { searchProducts, setSearchProducts } = useProductReducer();
  const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
  const { search } = params;
  const { request } = useRequest();

  useEffect(() => {
    request<PaginationType<ProductType[]>>({
      url: `${URL_PRODUCT_PAGE}?search=${search}`,
      method: MethodEnum.GET,
      saveGlobal: setSearchProducts,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  console.log('SEARCH', search);

  return (
    <>
      {searchProducts && <Text color={theme.colors.neutralTheme.black}>Tem produto</Text>}
      <Text color={theme.colors.neutralTheme.black}>search product</Text>
    </>
  );
};

export default SearchProduct;
