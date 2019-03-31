import { GET_PRODUCTS, GET_PRODUCTBYID } from "./types";
import { productsData, IProduct } from "./products-data";
import axios from "axios";
import { DispatchProp } from "react-redux";

//export type  getProductsAsync= (): IProduct[]=>void;

const getProductsAsync = (): IProduct[] => {
  return productsData;
};

// const success = (result: object) => {
//   return(
//   dispatch({
//     type: GET_PRODUCTS.SUCCESS,
//     payload: result
//   });
//   )
// };

// const fail = (err: object) => {
//   dispatch({
//     type: GET_PRODUCTS.ERROR,
//     err
//   });
// };

// const getData = () => {
//   return fetch("http://localhost:3000/products")
//     .then(response => response.json())
//     .then(res => {
//       return res;
//     });
// };

export const getProducts = (url: string, type: string) => {
  const Type = type.toUpperCase();
  return (dispatch: any) => {
    dispatch({ type: `GET_${Type}.PENDING` });
    fetch(`${url}`)
      .then(res => res.json())
      .then(result =>
        dispatch({ type: `GET_${Type}.SUCCESS`, payload: result })
      )
      .catch(error => dispatch({ type: `GET_${Type}.ERROR`, payload: error }));
  };
};

export const getProductById = (url: string, type: string, id: number) => {
  const Type = type.toUpperCase();
  return (dispatch: any) => {
    dispatch({ type: `GET_${Type}BYID.PENDING` });
    fetch(`${url}?id=${id}`)
      .then(res => res.json())
      .then(result =>
        dispatch({ type: `GET_${Type}BYID.SUCCESS`, payload: result })
      )
      .catch(error =>
        dispatch({ type: `GET_${Type}BYID.ERROR`, payload: error })
      );
  };
};

// export const getProducts = () => {
//   return (dispatch: any) => {
//     dispatch({ type: GET_PRODUCTS.PENDING });
//     fetch("http://localhost:3000/product")
//       .then(res => res.json())
//       .then(result => dispatch({ type: GET_PRODUCTS.SUCCESS, payload: result }))
//       .catch(error => dispatch({ type: GET_PRODUCTS.ERROR, payload: error }));
//   };
// };
