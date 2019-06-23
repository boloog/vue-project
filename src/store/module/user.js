const state = {
  userName: 'boloog'
}

const getters = {
  firstLetter: state => state.userName.substr(0, 2)
}

const mutations = {}

const actions = {}

export default {
  // 命名空间 一般不写，可以全局调用getters
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
