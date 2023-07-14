import React from 'react';
import Text from '../../../shared/components/text/text';
import { theme } from '../../../shared/themes/theme';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ProductType } from '../../../shared/types/productType';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ProductNavigationProp = NativeStackNavigationProp<Record<string, ProductParams>>;

export interface ProductParams {
  product: ProductType;
}

const Product = () => {
  const { params } = useRoute<RouteProp<Record<string, ProductParams>>>();
  const { product } = params;

  console.log('params', params);

  return <Text color={theme.colors.neutralTheme.black}>{product.name}</Text>;
};

export default Product;
