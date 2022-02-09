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
