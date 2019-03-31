// Describing the shape of the chat's slice of state
import { IProduct } from "./products-data";
//NOTE  这是工具函数用于生成 异步操作的actiontype,
import { createActionSet } from "../../../utils";

export const GET_PRODUCTS = createActionSet("GET_PRODUCTS");

export const GET_PRODUCTBYID = createActionSet("GET_PRODUCTBYID");

// Describing the different ACTION NAMES available
// export const GET_PRODUCTS_START = "GET_PRODUCTS_START";
// export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
// export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

// export const GET_PRODUCTBYID_START = "GET_PRODUCTBYID_START";
// export const GET_PRODUCTBYID_SUCCESS = "GET_PRODUCTBYID_SUCCESS";
// export const GET_PRODUCTBYID_ERROR = "GET_PRODUCTBYID_ERROR";

// interface GetProductsStartAction {
//   type: typeof GET_PRODUCTS_START;

// }

// interface GetProductByIdAction {
//   type: typeof GET_PRODUCTBYID;
//   payload: number
// }

// export type ProductTypes = GetProductsAction | GetProductByIdAction;
