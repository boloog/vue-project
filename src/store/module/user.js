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
  xxx () {}
}

export default {
  // 命名空间 一般不写，可以全局调用getters
  // namespaced: true, // 这种就要写上模块名才能调用
  state,
  getters,
  mutations,
  actions
}
