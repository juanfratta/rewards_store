import axios from 'axios';

import { BASE_URL, headers } from '../../utils/variables';

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCST_ERROR';
export const FETCH_PRODUCST_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchProducts = async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_BEGIN });

  const endopintProducts = `${BASE_URL}/products`;

  axios(endopintProducts, { headers })
    .then((res) => {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_PRODUCST_ERROR, payload: error });
    });
};
