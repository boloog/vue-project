// 动态添加顶上菜单 在inex.js 引入 tabNav
const state = {
  tabList: []
}

// const routerHasExist = (tabList, routeItem) => {

// }

/**
 * tabpage v-for(item, index) in tabList :key="`tabNav${index}`" item.name
 * 列表上 绑定 $route.name 好做相同的路由选中状态
 * ?a=1 /1  如果有动态参数的话
 * 在 loaout/app 页面上 添加 watch '$route'  this.$store.commit('UPDATA_ROUTER')
 */

const mutations = {
  UPDATA_ROUTER (state, route) {
    // 找到 name 相同 就添加进去
    if (state.tabList.find(item => item.name === route.name)) {
      state.tabList.push(route)
    }
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
