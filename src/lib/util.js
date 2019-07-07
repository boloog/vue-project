// 写业务有关系

import Cookies from 'js-cookie'
// 设置title
export const setTitle = title => {
  window.document.title = title || 'Home'
};

export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
};

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
};
