import actionTypes from "../constants/actionTypes";

const initailState = {
  member: [
    {
      id: 0,
      name: "Wayne Rooney",
      company: "DC United",
      status: "Active",
      lastUpdate: "7/07/2017",
      notes: "ManUtd Heighest scorer",
    },
    {
      id: 1,
      name: "Ryan Giggs",
      company: "Manchester United",
      status: "Closed",
      lastUpdate: "3/08/2011",
      notes: "Most matches played",
    },
    {
      id: 2,
      name: "Zlatan Ibrahimvic",
      company: "lA Galaxy",
      status: "Active",
      lastUpdate: "3/09/2018",
      notes: "I am `ZALTAN`",
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
