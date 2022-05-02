import {
  ERR_PRODUCTS,
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  REQ_PRODUCTS,
  SORT_PRODUCTS,
} from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REQ_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        filterData: [],
        products: [],
      };
    case ERR_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        isError: true,
        filterData: [],
        products: [],
      };
    case GET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: [],
        products: payload,
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: [],
        products: state.products.sort((a, b) => {
          if (payload === "asc") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        }),
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: state.products.filter((item) => {
          return item.category === payload;
        }),
      };
    default:
      return state;
  }
};
export { reducer }