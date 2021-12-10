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