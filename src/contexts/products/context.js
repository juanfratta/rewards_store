import { createContext, useCallback, useReducer } from 'react';
import { fetchProducts } from './actions';
import { ProductsReducer } from './ProductsReducer';

export const ProductsContext = createContext();

const initialState = {
  loading_products: false,
  products: [],
  error_products: false,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = useCallback(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  return (
    <ProductsContext.Provider
      value={{
        loading_products: state.loading_products,
        products: state.products,
        error_products: state.error_products,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
