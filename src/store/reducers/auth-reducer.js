import { authActionTypes } from '../constants/auth-constants';
const initialState = {
  name: null,
  email: null,
  password: null,
  authenticated: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActionTypes.SIGN_IN:
      return { ...state, ...payload };

    case authActionTypes.SIGN_UP:
      return { ...state, ...payload };

    case authActionTypes.SIGN_OUT:
      return { ...initialState };

    default:
      return state;
  }
};
