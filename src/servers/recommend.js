import request from '../servers/request'

export function getBanners() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommend(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbum(limit) {
  return request({
    url: "/album/newest",
    params: {
      limit
    }
  })
}