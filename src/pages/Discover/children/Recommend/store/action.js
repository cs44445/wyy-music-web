import * as actionTypes from './constance'
import { getBanners } from '@/servers/recommend'

export const changeBannersAction = (res) => ({
  type: actionTypes.CHANGEBANNERS,
  banners: res.banners
})

export const getBannersAction = () => {
  return dispatch => {
    getBanners().then(res => {
      dispatch(changeBannersAction(res))
    })
  }
}