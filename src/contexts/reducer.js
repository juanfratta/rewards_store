import {
  FETCH_USER_BEGIN,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_PRODUCST_ERROR,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  SET_CURRENT_POINTS_BEGIN,
  SET_CURRENT_POINTS_SUCCESS,
  /* SET_REDEEM_PRODUCT_BEGIN,
  SET_REDEEM_PRODUCT_SUCCESS, */
} from './actions';

export const Reducer = (state, action) => {
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return {
        ...state,
        load_user: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        load_user: false,
        user: action.payload.user,
        error_user: action.payload.error,
        points: action.payload.user.points,
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        user: action.payload.user,
        error_user: action.payload.error,
      };
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
    case SET_CURRENT_POINTS_BEGIN:
      return {
        ...state,
        loading_points: true,
      };
    case SET_CURRENT_POINTS_SUCCESS:
      return {
        ...state,
        loading_points: false,
        points: action.payload,
      };
    /*  case SET_REDEEM_PRODUCT_BEGIN:
      return {
        ...state,
        products_history_loading: true,
      };

    case SET_REDEEM_PRODUCT_SUCCESS:
      return {
        ...state,
        products_history_loading: false,
        products_history: action.payload,
      }; */

    default:
  }
};
