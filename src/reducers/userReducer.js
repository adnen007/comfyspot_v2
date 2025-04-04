import { AUTHENTICATION, USER_LOADING } from "../actions";

const userReducer = (state, { type, payload }) => {
  if (type === AUTHENTICATION) {
    return {
      ...state,
      email: payload.email,
      authenticated: payload.authenticated,
      loading: false,
    };
  }

  if (type === USER_LOADING) {
    return { ...state, loading: payload };
  }
  throw new Error(`No Matching "${type}" - action type`);
};

export default userReducer;
