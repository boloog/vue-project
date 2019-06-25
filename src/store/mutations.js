import vue from 'vue'
const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params.appName
  },
  SET_APP_VERSION (state) {
    // 后添加的state是没有 get set方法，需要vue.set() 添加设置 才能触发事件更新
    vue.set(state, 'appVersion', 'v2.0')
  },
  SET_STATE_VALUE (state, value) {
    state.stateValue = value
  }
}

export default mutations
