import React from 'react';
import { ProductType } from '../../types/productType';
import { ProductImage, ProductThumbnailContainer } from './productThumbnail.style';
import Text from '../text/text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import Button from '../buttom/buttom';

interface ProductThumbnailProps {
  product: ProductType;
  margin?: string;
}

const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
  return (
    <ProductThumbnailContainer margin={margin}>
      <ProductImage source={{ uri: product.image }} />
      <Text type={textTypes.PARAGRAPH_SMALL_REGULAR} color={theme.colors.neutralTheme.black}>
        {product.name}
      </Text>
      <Text color={theme.colors.mainTheme.primary} type={textTypes.BUTTON_SEMI_BOLD}>
        R$ {product.price}
      </Text>
      <Button title="Inserir" />
    </ProductThumbnailContainer>
  );
};

export default ProductThumbnail;
