import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import actionTypes from "../constants/actionTypes";

export const addMemeber = (newMember) => {
  return {
    type: actionTypes.ADD_MEMBER,
    payload: newMember,
  };
};
export const deleteMemeber = (oldMember) => {
  return {
    type: actionTypes.DELETE_MEMBER,
    payload: oldMember,
  };
};

export const loginByGoogle = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.USER_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);

    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photo: res.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("access-token", accessToken);
    sessionStorage.setItem("user", JSON.stringify(profile));

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: actionTypes.LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: error.message,
    });
  }
};

const registerRequest = () => ({
  type: actionTypes.USER_REQUEST,
});
const registerSuccess = (user) => ({
  type: actionTypes.REGISTER_SUCCESS,
  payload: user,
});
const registerFail = (error) => ({
  type: actionTypes.REGISTER_FAIL,
  payload: error,
});

export const registerStart = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerRequest());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        sessionStorage.setItem("user", JSON.stringify(user));
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

const loginRequest = () => ({
  type: actionTypes.USER_REQUEST,
});
const loginSuccess = (user) => ({
  type: actionTypes.LOGIN_BY_EMAIL_SUCCESS,
  payload: user,
});
const loginFail = (error) => ({
  type: actionTypes.LOGIN_BY_EMAIL_FAIL,
  payload: error,
});

export const loginStart = (email, password) => {
  return function (dispatch) {
    console.log("disptach");
    dispatch(loginRequest());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        sessionStorage.setItem("user", JSON.stringify(user));
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};
