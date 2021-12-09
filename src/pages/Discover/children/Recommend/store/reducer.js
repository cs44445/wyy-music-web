import * as actionTypes from "./constance";

const initState = {
  banners: []
}

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGEBANNERS:
      return { ...state, banners: action.banners };
    default:
      return state
  }
}

export default reducer