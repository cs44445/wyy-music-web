import * as actionTypes from "./constance";
import { Map } from 'immutable'

const initState = Map({
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  recommendUpRanking: {},
  recommendNewRanking: {},
  recommendOriginalRanking: {}
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
      return state.set("newAlbum", action.newAlbum);
    case actionTypes.CHANGEUPRANKING:
      return state.set("recommendUpRanking", action.recommendUpRanking);
    case actionTypes.CHANGENEWRANKING:
      return state.set("recommendNewRanking", action.recommendNewRanking);
    case actionTypes.CHANGEORIGINALRANKING:
      return state.set("recommendOriginalRanking", action.recommendOriginalRanking);
    default:
      return state
  }
}

export default reducer