import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filterReducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./productsContext";

const initialState = {
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    price: 1,
    min: 0,
    max: 0,
    shipping: false,
  },
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  sort: "lowest",
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    if (state.allProducts.length > 0) {
      dispatch({ type: FILTER_PRODUCTS });
    }
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, state.filters, products, state.allProducts.length]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (criterion) => {
    //This will only update the sort value, but the actual sorting of the products occurs with the sort_product action
    dispatch({ type: UPDATE_SORT, payload: criterion });
  };

  const updateFilters = (e) => {
    if (e.target.name === "shipping") {
      dispatch({
        type: UPDATE_FILTERS,
        payload: { name: e.target.name, value: e.target.checked },
      });
    } else {
      dispatch({
        type: UPDATE_FILTERS,
        payload: { name: e.target.name, value: e.target.value },
      });
    }
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
