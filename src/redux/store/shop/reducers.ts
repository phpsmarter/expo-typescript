import { IProduct, productsData } from "./products-data";

import { GET_PRODUCTS, GET_PRODUCTBYID } from "./types";
export interface SideEffect {
  fetching: boolean;
  feteched: boolean;
}
/**
 * StateType是 初始State的类型定义.
 */
export type StateType = {
  products?: any[];
  productById: object;
  fetching: boolean;
  fetched: boolean;
};

const initialState: StateType = {
  products: [],
  fetching: false,
  fetched: false
};

export function shopReducer(state = initialState, action: any): StateType {
  switch (action.type) {
    case "GET_PRODUCTS.PENDING":
      return Object.assign({}, state, {
        ...state.products,

        fetching: true,
        fetched: false
      });

    case "GET_PRODUCTS.SUCCESS":
      return Object.assign({}, state, {
        products: action.payload,
        fetching: false,
        fetched: true
      });
    case "GET_PRODUCTS.ERROR":
      return Object.assign({}, state, {
        ...state.products,
        fetching: false,
        fetched: false
      });

    case "GET_PRODUCTBYID.PENDING":
      return Object.assign({}, state, {
        ...state.products,
        productById: {},
        fetching: true,
        fetched: false
      });
    case "GET_PRODUCTBYID.SUCCESS":
      return Object.assign({}, state, {
        ...state.products,
        productById: action.payload,
        fetching: false,
        fetched: true
      });

    case "GET_PRODUCTBYID.ERROR":
      return Object.assign({}, state, {
        ...state.products,
        productById: {},
        fetching: false,
        fetched: false
      });
    default:
      return state;
  }
}
