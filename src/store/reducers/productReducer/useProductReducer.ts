import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { ProductType } from '../../../shared/types/productType';
import { setProductsAction, setSearchProductsAction } from '.';
import { PaginationType } from '../../../shared/types/paginationType';

export const useProductReducer = () => {
  const dispatch = useDispatch();

  const { products, searchProducts } = useAppSelector((state) => state.productReducer);

  const setProducts = (currentProducts: ProductType[]) => {
    dispatch(setProductsAction(currentProducts));
  };

  const setSearchProducts = (currentProducts: PaginationType<ProductType[]>) => {
    dispatch(setSearchProductsAction(currentProducts));
  };

  return {
    products,
    searchProducts,
    setProducts,
    setSearchProducts,
  };
};
