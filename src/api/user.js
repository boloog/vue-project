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

export const login = ({ userName, password }) => {
  return axios.request({
    url: '/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
};

export const authorization = () => {
  return axios.request({
    url: '/authorization'
  })
};
