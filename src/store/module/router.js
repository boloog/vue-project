import { routes, routerMap } from '@/router/router'

const state = {
  routers: routes,
  hasGetRules: false // 是否获取过用户权限
}

const mutations = {
  // 合并路由
  CONCAT_ROUTES (state, routerList) {
    state.routers = routerList.concat(routes)
    state.hasGetRules = true
  }
}

const getAccesRouterList = (routes, list) => {
  return routes.filter((item, index) => {
    // 循环处理路由 匹配Url
    if (list[index].apiUrl || list[index].apiUrl === '') {
      // 循环子级
      if (list[index].menuSubList) {
        list[index].menuSubList = getAccesRouterList(
          list[index].menuSubList,
          list
        )
      }
      return true
    } else {
      return false
    }
  })
};

const actions = {
  concatRoutes ({ commit }, params) {
    return new Promise((resolve, reject) => {
      try {
        let routerList = []
        console.log('concatRoutes', routerMap, params)
        // 循环判断里面的 key
        // params every(item => return true)  routerList = routerMap
        routerList = getAccesRouterList(routerMap, params)
        commit('CONCAT_ROUTES', routerList)
        // 返回当前已注册 的路由 state.routers
        resolve(routerList)
      } catch (err) {
        reject(err)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
