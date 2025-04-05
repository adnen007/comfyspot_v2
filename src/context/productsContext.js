import React, { useContext, useEffect, useReducer, useCallback } from "react";

import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { db } from "../firebase";
import reducer from "../reducers/productsReducer";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const initialState = {
    isSidebarOpen: false,
    productsLoading: true,
    productsError: false,
    products: [],
    featuredProducts: [],
    singleProduct: {},
    singleProductLoading: true,
    singleProductError: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchSingleProduct = useCallback(async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

    try {
      const singleProductRef = doc(db, "singleProducts", id);
      const res = await getDoc(singleProductRef);
      const singleProduct = res.data();
      if (!singleProduct) throw Error("no product");
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (err) {
      toast.error(err.message);
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch({ type: GET_PRODUCTS_BEGIN });
        const productsRef = doc(db, "products", "productsList");
        const res = await getDoc(productsRef);
        console.log(JSON.stringify(res.data()));
        const products = res.data().products;
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      } catch (err) {
        toast.error(err.message);
        dispatch({ type: GET_PRODUCTS_ERROR });
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
