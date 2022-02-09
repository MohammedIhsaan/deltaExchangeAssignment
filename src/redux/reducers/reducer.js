import actionTypes from "../constants/actionTypes";

const initailState = {
  member: [
    {
      company: "wipro",
      status: "Active",
      lastUpdate: "01/02/2022",
    },
    {
      company: "infosy",
      status: "Close",
      lastUpdate: "01/02/2022",
    },
    {
      company: "tcs",
      status: "Active",
      lastUpdate: "01/02/2022",
    },
  ],
};

export const reducer = (state = initailState, { type, paylaod }) => {
  switch (type) {
    case actionTypes.ADD_MEMBER:
      return state;
    case actionTypes.DELETE_MEMBER:
      return state;
    default:
      return state;
  }
};
