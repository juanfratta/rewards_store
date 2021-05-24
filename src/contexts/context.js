import { createContext, useCallback, useReducer } from 'react';
import { fetchProducts, getCurrentUser, setCurrentPoints } from './actions';
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

        getProducts,
        getUser,
        setPoints,
      }}
    >
      {children}
    </RewardStoreContext.Provider>
  );
};
