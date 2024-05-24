import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

let initialState = { cart: [], total_amount: 0, total: 0, shipping_fee: 534 };
const oldCart = JSON.parse(localStorage.getItem("oldCart"));
if (oldCart) {
  initialState = { ...initialState, cart: oldCart };
}

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    const stringState = JSON.stringify(state.cart);
    localStorage.setItem("oldCart", stringState);
  }, [state.cart]);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const toggleAmount = (value, id) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { value, id } });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, toggleAmount, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
