import request from '../servers/request'

export function getBanners() {
  return request({
    url: '/banner'
  })
}