import * as actionTypes from './constance'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getRecommendRanking,
} from '@/servers/recommend'

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

export const changeUpRanking = (res) => ({
  type: actionTypes.CHANGEUPRANKING,
  recommendUpRanking: res.playlist
})

export const changeNewRanking = res => ({
  type: actionTypes.CHANGENEWRANKING,
  recommendNewRanking: res.playlist
})

export const changeOriginalRanking = res => ({
  type: actionTypes.CHANGEORIGINALRANKING,
  recommendOriginalRanking: res.playlist
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

export const getRecommendRankingAction = (idx) => {
  return dispatch => {
    getRecommendRanking(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeNewRanking(res))
          break;
        case 2:
          dispatch(changeOriginalRanking(res));
          break;
        case 3:
          dispatch(changeUpRanking(res));
          break;
        default:
      }
    })
  }
}