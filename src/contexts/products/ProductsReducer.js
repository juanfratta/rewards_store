import {
  FETCH_PRODUCST_ERROR,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
} from './actions';

export const ProductsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        products: [],
        loading_products: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading_products: false,
      };
    case FETCH_PRODUCST_ERROR:
      return {
        ...state,
        products: [],
        error_products: action.payload,
      };
    default:
  }
};
