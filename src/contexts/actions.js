import axios from 'axios';
import { BASE_URL, headers } from '../utils/variables';

//ACTIONS-TYPES
export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCST_SUCCESS';
export const FETCH_PRODUCST_ERROR = 'FETCH_PRODUCTS_ERROR';

export const SET_CURRENT_POINTS_BEGIN = 'SET_CURRENT_POINTS_BEGIN';
export const SET_CURRENT_POINTS_SUCCESS = 'SET_CURRENT_POINTS_SUCCESS';

/* export const SET_REDEEM_PRODUCT_BEGIN = 'SET_REDEEM_PRODUCT_BEGIN';
export const SET_REDEEM_PRODUCT_SUCCESS = 'SET_REDEEM_PRODUCT_SUCCESS'; */

//ACTIONS
export const getCurrentUser = async (dispatch) => {
  dispatch({ type: FETCH_USER_BEGIN });
  const endpointUser = `${BASE_URL}/user/me`;

  return await axios.get(endpointUser, { headers }).then((res) => {
    try {
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: { user: res.data, error_user: false },
      });
    } catch {
      dispatch({
        type: FETCH_USER_ERROR,
        payload: { user: undefined, error_user: true },
      });
    }
  });
};

export const fetchProducts = async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_BEGIN });

  const endopintProducts = `${BASE_URL}/products`;

  return await axios.get(endopintProducts, { headers }).then((res) => {
    try {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCST_ERROR, payload: error });
    }
  });
};

export const setCurrentPoints = async (dispatch, points) => {
  dispatch({ type: SET_CURRENT_POINTS_BEGIN });

  let body = { amount: parseInt(points) };

  return await axios
    .post(`${BASE_URL}/user/points`, body, { headers })
    .then((res) =>
      dispatch({
        type: SET_CURRENT_POINTS_SUCCESS,
        payload: res.data['New Points'],
      })
    );
};

/* export const setRedeemProduct = async (dispatch, productId) => {
  dispatch({ type: SET_REDEEM_PRODUCT_BEGIN });

  let body = { productId: productId };

  return axios
    .post(`${BASE_URL}/redeem`, { headers }, body)
    .then((res) =>
      dispatch({ type: SET_REDEEM_PRODUCT_SUCCESS, payload: res.data })
    );
}; */
