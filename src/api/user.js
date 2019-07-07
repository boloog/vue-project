import axios from './index'

// 配置请求
export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/queryList',
    method: 'post',
    data: {
      userId
    }
  })
};
