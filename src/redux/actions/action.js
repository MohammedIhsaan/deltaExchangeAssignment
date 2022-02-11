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

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
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
