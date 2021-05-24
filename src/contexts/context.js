import { createContext, useCallback, useReducer } from 'react';
import {
  fetchProducts,
  getCurrentUser,
  setCurrentPoints,
  /*  setRedeemProduct, */
} from './actions';
import { Reducer } from './reducer';

export const RewardStoreContext = createContext();

const initialState = {
  load_user: false,
  user: undefined,
  error_user: false,
  loading_products: false,
  products: [],
  error_products: false,
  loading_points: false,
  points: undefined,
  /*  products_history_loading: false,
  products_history: [], */
};

export const RewardStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getUser = useCallback(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);

  const getProducts = useCallback(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  const setPoints = (points) => {
    setCurrentPoints(dispatch, points);
  };

  /* const redeemProduct = (productId) => {
    setRedeemProduct(dispatch, productId);
  };
 */
  return (
    <RewardStoreContext.Provider
      value={{
        load_user: state.load_user,
        user: state.user,
        error_user: state.error_user,
        loading_products: state.loading_products,
        products: state.products,
        error_products: state.error_products,
        loading_points: state.loading_points,
        points: state.points,
        /*  products_history_loading: state.products_history_loading,
        products_history: state.products_history, */

        getProducts,
        getUser,
        setPoints,
        /*  redeemProduct, */
      }}
    >
      {children}
    </RewardStoreContext.Provider>
  );
};
