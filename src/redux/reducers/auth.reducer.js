import actionTypes from "../constants/actionTypes";

const initailState = {
  accessToken: sessionStorage.getItem("access-token")
    ? sessionStorage.getItem("access-token")
    : null,
  user: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : null,
  loading: false,
  error: null,
};

export const authReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_REQUEST:
      return { ...state, loading: true };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, accessToken: payload, loading: false };
    case actionTypes.LOGIN_FAIL:
      return { ...state, accessToken: null, loading: false, error: payload };
    case actionTypes.LOAD_PROFILE:
      return { ...state, user: payload };
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_BY_EMAIL_SUCCESS:
      return { ...state, user: payload, loading: false };
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_BY_EMAIL_FAIL:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
