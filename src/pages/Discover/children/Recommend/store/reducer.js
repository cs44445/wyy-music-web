import * as actionTypes from "./constance";
import { Map } from 'immutable'
import { act } from "react-dom/test-utils";

const initState = Map({
  banners: [],
  hotRecommend: [],
  newAlbum: []
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGEBANNERS:
      // return { ...state, banners: action.banners };
      // 使用Map包裹后：修改state:
      return state.set("banners", action.banners);
    case actionTypes.CHANGEHOTRECOMMEND:
      return state.set("hotRecommend", action.hotRecommend);
    case actionTypes.CHANGENEWALBUM:
      return state.set("newAlbum", action.newAlbum)
    default:
      return state
  }
}

export default reducer