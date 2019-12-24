import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/util'

const state = {
  userName: 'boloog'
}

const getters = {
  firstLetter: state => state.userName.substr(0, 2)
}

const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}

const actions = {
  /**
   * 单独模块里的 actions
   * @param {*} commit  提交当前的上下文
   * @param {*} state 当前modules state
   * @param {*} rootState 根上面的 state 比如获取 appName = rootState.appName
   */
  updateUserName ({ commit, state, rootState, dispatch }) {
    // 可调用 下面的xxx方法
    dispatch('xxx', '')
  },
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({
        userName,
        password
      })
        .then(res => {
          if (res.status === 200) {
            setToken(res.data.token)
            resolve()
          } else {
            reject(new Error('错误'))
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  authorization ({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization()
        .then(res => {
          if (res.code === 401) {
            reject(new Error('错误token'))
          } else {
            let data = res.data.data

            // 每次路由请求 都重新设置 token  达到续命效果 长时间可登录 需后端配置新的token
            setToken(data.token)

            // 返回page
            resolve(data.page)
          }
          console.log(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  logout () {
    setToken('')
  }
}

export default {
  // 命名空间 一般不写，可以全局调用getters
  // namespaced: true, // 这种就要写上模块名才能调用
  state,
  getters,
  mutations,
  actions
}
