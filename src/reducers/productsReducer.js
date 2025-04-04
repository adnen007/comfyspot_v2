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

const productsReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  } else if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  } else if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, productsLoading: true };
  } else if (action.type === GET_PRODUCTS_SUCCESS) {
    const products = action.payload;
    const featuredProducts = products.filter((product) => {
      return product.featured === true;
    });

    return {
      ...state,
      products: action.payload,
      productsLoading: false,
      productsError: false,
      featuredProducts,
    };
  } else if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsLoading: false, productsError: true };
  } else if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, singleProductError: false, singleProductLoading: true };
  } else if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return { ...state, singleProductLoading: false, singleProduct: action.payload };
  } else if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, singleProductError: true, singleProductLoading: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default productsReducer;
