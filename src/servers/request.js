import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import { message } from 'antd'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(config => {
  return config;
}, err => { })

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        message("请求错误");
        break;
      case 401:
        message("未授权访问");
        break;
      default:
        message("其他错误信息")
    }
  }
})

export default instance

