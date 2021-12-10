import * as actionTypes from "./constance";
import { Map } from 'immutable'

const initState = Map({
  banners: [],
  hotRecommend: []
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGEBANNERS:
      // return { ...state, banners: action.banners };
      // 使用Map包裹后：修改state:
      return state.set("banners", action.banners);
    case actionTypes.CHANGEHOTRECOMMEND:
      return state.set("hotRecommend", action.hotRecommend)
    default:
      return state
  }
}

export default reducer