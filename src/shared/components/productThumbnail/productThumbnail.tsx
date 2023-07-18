import React from 'react';
import { ProductType } from '../../types/productType';
import {
  ProductImage,
  ProductInsertCart,
  ProductThumbnailContainer,
} from './productThumbnail.style';
import Text from '../text/text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import { convertNumberToMoney } from '../../functions/money';
import { useNavigation } from '@react-navigation/native';
import { ProductNavigationProp } from '../../../modules/product/screens/product';
import { MenuUrl } from '../../enums/menuUrl.enum';
import { Icon } from '../icon/icon';

interface ProductThumbnailProps {
  product: ProductType;
  margin?: string;
}

const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
  const { navigate } = useNavigation<ProductNavigationProp>();

  const handleGoToProduct = () => {
    navigate(MenuUrl.PRODUCT, { product });
  };

  return (
    <ProductThumbnailContainer onPress={handleGoToProduct} margin={margin}>
      <ProductImage source={{ uri: product.image }} />
      <Text type={textTypes.PARAGRAPH_SMALL_REGULAR} color={theme.colors.neutralTheme.black}>
        {product.name}
      </Text>
      <Text color={theme.colors.mainTheme.primary} type={textTypes.PARAGRAPH_SEMI_BOLD}>
        {convertNumberToMoney(product.price)}
      </Text>
      <ProductInsertCart>
        <Icon name="cart" color={theme.colors.neutralTheme.write} />
      </ProductInsertCart>
    </ProductThumbnailContainer>
  );
};

export default ProductThumbnail;
