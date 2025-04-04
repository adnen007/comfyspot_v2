import React, { useEffect, useContext, useReducer, useRef, useCallback } from "react";
import reducer from "../reducers/cartReducer";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase.js";

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  TOGGLE_CHECKOUT,
  CART_FROM_DB,
  GET_ORDERS_BEGIN,
  GET_ORDERS_FINISH,
  GET_ORDERS_ERROR,
} from "../actions";
import { toast } from "react-toastify";

let initialState = {
  cart: [],
  orders: [],
  totalAmount: 0,
  total: 0,
  shippingFee: 534,
  checkout: false,
  loading: false,
  orderError: false,
};
const oldCart = JSON.parse(localStorage.getItem("oldCart"));
if (oldCart) {
  initialState = { ...initialState, cart: oldCart };
}

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const timeoutRef = useRef(null);

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

  const toggleCheckout = () => {
    dispatch({ type: TOGGLE_CHECKOUT });
  };

  const getCartFromDb = useCallback((cart) => {
    dispatch({ type: CART_FROM_DB, payload: cart });
  }, []);

  const submitOrder = async (name, address, number, navigator) => {
    try {
      const ordersRef = doc(db, "users", auth.currentUser.uid);
      const date = new Date().toISOString();

      const orders = state.orders ? state.orders : [];

      await updateDoc(ordersRef, {
        orders: [
          ...orders,
          {
            name,
            address,
            totalAmount: state.totalAmount,
            total: state.total,
            number,
            date,
            list: state.cart,
          },
        ],
      });
      toast.success("order sent successfully");
      dispatch({ type: CLEAR_CART });
      navigator("/orders");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const getOrders = useCallback(async () => {
    try {
      dispatch({ type: GET_ORDERS_BEGIN });
      const ordersRef = doc(db, "users", auth.currentUser.uid);
      const res = await getDoc(ordersRef);
      const orders = res.data().orders;

      dispatch({ type: GET_ORDERS_FINISH, payload: orders });
    } catch (err) {
      toast.error(err.message);
      dispatch({ type: GET_ORDERS_ERROR, payload: err.message });
    }
  }, []);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    const stringState = JSON.stringify(state.cart);
    localStorage.setItem("oldCart", stringState);

    if (auth.currentUser) {
      try {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(async () => {
          if (auth.currentUser) {
            // Condition for when the user updates the cart, logs in, and logs out within 2 seconds.
            await updateDoc(doc(db, "users", auth.currentUser.uid), { cart: state.cart });
          }
        }, 2000);

        return () => clearTimeout(timeoutRef.current);
      } catch (err) {
        toast.error(err.message);
      }
    }
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        toggleAmount,
        removeItem,
        clearCart,
        toggleCheckout,
        getCartFromDb,
        submitOrder,
        getOrders,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
