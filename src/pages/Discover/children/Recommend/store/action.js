import * as actionTypes from './constance'
import { getBanners, getHotRecommend, getNewAlbum } from '@/servers/recommend'

export const changeBannersAction = (res) => ({
  type: actionTypes.CHANGEBANNERS,
  banners: res.banners
})

export const changeHotRecommend = (res) => ({
  type: actionTypes.CHANGEHOTRECOMMEND,
  hotRecommend: res.result
})

export const changeNewAlbum = (res) => ({
  type: actionTypes.CHANGENEWALBUM,
  newAlbum: res.albums
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

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbum(res))
    })
  }
}
