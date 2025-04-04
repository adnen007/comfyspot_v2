import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  TOGGLE_CHECKOUT,
  CART_FROM_DB,
  GET_ORDERS_BEGIN,
  GET_ORDERS_FINISH,
  GET_ORDERS_ERROR,
} from "../actions";

const cartReducer = (state, { type, payload }) => {
  if (type === ADD_TO_CART) {
    const itemId = payload.id + payload.color;

    if (state.cart.some((item) => item.id === itemId)) {
      const updatedCart = state.cart.map((item) => {
        if (item.id === itemId) {
          const newAmount = Math.min(item.amount + payload.amount, item.stock);
          return { ...item, amount: newAmount };
        }
        return item;
      });

      return { ...state, cart: updatedCart };
    } else {
      const newItem = { ...payload, id: payload.id + payload.color };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (type === TOGGLE_CART_ITEM_AMOUNT) {
    const updatedCart = state.cart.map((item) => {
      if (item.id === payload.id) {
        item.amount = item.amount + payload.value;
        return item;
      }
      return item;
    });
    return { ...state, cart: updatedCart };
  }
  if (type === REMOVE_CART_ITEM) {
    const updatedCart = state.cart.filter((item) => {
      return !(payload === item.id);
    });
    return { ...state, cart: updatedCart };
  }
  if (type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
      totalAmount: 0,
      total: 0,
      shippingFee: 534,
      checkout: false,
      loading: false,
      orderError: null,
    };
  }
  if (type === COUNT_CART_TOTALS) {
    const totalAmount = state.cart.reduce((total, current) => {
      return total + current.amount;
    }, 0);
    const total = state.cart.reduce((total, current) => {
      return total + current.amount * current.price;
    }, 0);
    return { ...state, total, totalAmount };
  }
  if (type === TOGGLE_CHECKOUT) {
    return { ...state, checkout: !state.checkout };
  }
  if (type === CART_FROM_DB) {
    function updateCart(oldCart, currentCart) {
      const currentCartIds = new Set(currentCart.map((item) => item.id));
      const newItems = oldCart.filter((item) => !currentCartIds.has(item.id));
      return [...currentCart, ...newItems];
    }

    return { ...state, cart: updateCart(state.cart, payload) };
  }

  if (type === GET_ORDERS_BEGIN) {
    return { ...state, loading: true };
  }
  if (type === GET_ORDERS_FINISH) {
    return { ...state, orders: payload, loading: false, orderError: null };
  }
  if (type === GET_ORDERS_ERROR) {
    return { ...state, loading: false, orderError: true };
  }

  throw new Error(`No Matching "${type}" - action type`);
};

export default cartReducer;
