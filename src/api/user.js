import axios from './index'

// 配置请求
export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: 'getUserInfo',
    method: 'post',
    data: {
      userId
    }
  })
}
