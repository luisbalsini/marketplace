/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
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
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TextInputChangeEventData,
} from 'react-native';
import ProductThumbnail from '../../../shared/components/productThumbnail/productThumbnail';
import { ActivityIndicatorButton } from '../../../shared/components/buttom/buttom.style';
import { SearchProductContainer, SearchProductScrollView } from '../styles/productSearch.style';

export type SearchProductNavigationProp = NativeStackNavigationProp<
  Record<string, SearchProductParams>
>;

export interface SearchProductParams {
  search: string;
}

const SearchProduct = () => {
  const { searchProducts, setSearchProducts, insertSearchProducts } = useProductReducer();
  const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
  const { request, loading } = useRequest();
  const [value, setValue] = useState(params?.search || '');

  useEffect(() => {
    setValue(params?.search || '');
  }, [params]);

  useEffect(() => {
    request<PaginationType<ProductType[]>>({
      url: `${URL_PRODUCT_PAGE}?search=${value}`,
      method: MethodEnum.GET,
      saveGlobal: setSearchProducts,
    });
  }, [value]);

  const findNewPage = () => {
    if (searchProducts && searchProducts.meta.currentPage < searchProducts.meta.totalPages) {
      request<PaginationType<ProductType[]>>({
        url: `${URL_PRODUCT_PAGE}?search=${value}&page=${searchProducts.meta.currentPage + 1}`,
        method: MethodEnum.GET,
        saveGlobal: insertSearchProducts,
      });
    }
  };

  const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(event.nativeEvent.text);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndScroll = contentOffset.y >= contentSize.height - layoutMeasurement.height;

    if (isEndScroll && !loading) {
      findNewPage();
    }
  };

  return (
    <SearchProductContainer>
      <Input onChange={handleOnChangeInput} value={value} iconRight="search" />
      {searchProducts && searchProducts.data && (
        <ScrollView onScroll={handleScroll}>
          <SearchProductScrollView>
            {searchProducts.data.map((product) => (
              <ProductThumbnail margin="4px 0px" key={product.id} product={product} />
            ))}
          </SearchProductScrollView>
        </ScrollView>
      )}
      {loading && <ActivityIndicatorButton color={theme.colors.mainTheme.primary} />}
    </SearchProductContainer>
  );
};

export default SearchProduct;
