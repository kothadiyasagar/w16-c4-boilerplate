// use axios for api call
import axios from "axios";

import {
  ERR_PRODUCTS,
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  REQ_PRODUCTS,
  SORT_PRODUCTS,
} from "./actionTypes";

function getProductsData(dispatch) {
  dispatch(req_data());
  axios
    .get("https://movie-fake-server.herokuapp.com/products")
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) => dispatch(error_data(err.message)));
}

export const req_data = () => ({
  type: REQ_PRODUCTS,
});

export const error_data = (err) => ({
  type: ERR_PRODUCTS,
  payload: err,
});

const sortProducts = (payload) => ({
  type: SORT_PRODUCTS,
  payload,
});

const filterProducts = (payload) => ({
  type: FILTER_PRODUCTS,
  payload,
});

export { getProductsData, sortProducts, filterProducts };