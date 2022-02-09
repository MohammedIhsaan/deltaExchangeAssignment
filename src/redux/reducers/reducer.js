import actionTypes from "../constants/actionTypes";

const initailState = {
  member: [
    {
      id: 0,
      company: "wipro",
      status: "Active",
      lastUpdate: "01/02/2022",
    },
    {
      id: 1,
      company: "infosy",
      status: "Close",
      lastUpdate: "01/02/2022",
    },
    {
      id: 2,
      company: "tcs",
      status: "Active",
      lastUpdate: "01/02/2022",
    },
  ],
};

export const reducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_MEMBER:
      let updateMember = [...state.member, payload];
      return { ...state, member: updateMember };
    case actionTypes.DELETE_MEMBER:
      let filterMember = state.member.filter((e) => e.id !== Number(payload));
      return { ...state, member: filterMember };
    default:
      return state;
  }
};
