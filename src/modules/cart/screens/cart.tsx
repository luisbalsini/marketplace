/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Text from '../../../shared/components/text/text';
import { useCartReducer } from '../../../store/reducers/cartReducer/useCartReducer';
import { URL_CART } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';
import { useRequest } from '../../../shared/hooks/useRequest';
import { CartType } from '../../../shared/types/cartType';
import { theme } from '../../../shared/themes/theme';

const Cart = () => {
  const { request } = useRequest();
  const { cart, setCart } = useCartReducer();

  useEffect(() => {
    request<CartType>({
      url: URL_CART,
      method: MethodEnum.GET,
      saveGlobal: setCart,
    });
  }, []);

  return <Text color={theme.colors.neutralTheme.black}>Carrinho</Text>;
};

export default Cart;
