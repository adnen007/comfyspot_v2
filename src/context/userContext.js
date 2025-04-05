import React, { useContext, useReducer, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db, auth } from "../firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import reducer from "../reducers/userReducer.js";
import { AUTHENTICATION, USER_LOADING } from "../actions.js";
import { useCartContext } from "./cartContext.js";
import { useFilterContext } from "./filterContext.js";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const initialState = {
    email: "",
    authenticated: "loading",
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { getCartFromDb, clearCart } = useCartContext();
  const { clearFilters } = useFilterContext();

  const login = async (email, password) => {
    try {
      dispatch({ type: USER_LOADING, payload: true });
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(`welcome ${email.split("@")[0]}`);
    } catch (err) {
      toast.error(err.message);
      dispatch({ type: USER_LOADING, payload: false });
    }
  };

  const registerUser = async (name, email, password) => {
    try {
      dispatch({ type: USER_LOADING, payload: true });
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const userRef = doc(db, "users", res.user.uid);
      await setDoc(userRef, {
        name,
        email,
        userId: res.user.uid,
        cart: [],
        orders: [],
      });
      toast.success(`welcome ${name}`);
    } catch (err) {
      toast.error(err.message);
      dispatch({ type: USER_LOADING, payload: false });
    }
  };

  const logout = async (navigate) => {
    try {
      dispatch({ type: USER_LOADING });
      await signOut(auth);

      clearCart();
      clearFilters();

      navigate("/login");
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error(err.message);
      dispatch({ type: USER_LOADING, payload: false });
    }
  };

  useEffect(() => {
    // Listen for changes in the authentication state (user login/logout)
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch({
          type: AUTHENTICATION,
          payload: { email: user.email, authenticated: true },
        });

        try {
          const userDetailRef = doc(db, "users", auth.currentUser.uid);
          const res = await getDoc(userDetailRef);
          getCartFromDb(res.data().cart);
        } catch (err) {
          toast.error(`${err.message}`);
        }
      } else {
        dispatch({
          type: AUTHENTICATION,
          payload: { email: "", authenticated: false },
        });
      }
    });

    return unsubscribe;
  }, [getCartFromDb]);

  return (
    <UserContext.Provider value={{ ...state, login, registerUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserContext);
};
