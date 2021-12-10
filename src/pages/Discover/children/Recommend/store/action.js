import * as actionTypes from './constance'
import { getBanners, getHotRecommend } from '@/servers/recommend'

export const changeBannersAction = (res) => ({
  type: actionTypes.CHANGEBANNERS,
  banners: res.banners
})

export const changeHotRecommend = (res) => ({
  type: actionTypes.CHANGEHOTRECOMMEND,
  hotRecommend: res.result
})

export const getBannersAction = () => {
  return dispatch => {
    getBanners().then(res => {
      dispatch(changeBannersAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommend(res))
    })
  }
}