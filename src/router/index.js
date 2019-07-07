import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle, setToken, getToken } from '@/lib/util'

import store from '@/store'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes
})

// 登录状态
// const HAS_LOGINED = false
/**
 * to 即将跳转路由
 * from 当前要离开的路由
 * next 确定跳转
 */
router.beforeEach((to, from, next) => {
  // 设置 title 路由里添加对应的 meta
  to.meta && setTitle(to.meta.title)

  // 是否为登录页面
  // if (to.name !== 'login') {
  //   // 判断是否登录
  //   if (HAS_LOGINED) {
  //     next()
  //   } else {
  //     next({
  //       name: 'login'
  //     })
  //   }
  // } else {
  //   // 登录过 就跳转 home
  //   if (HAS_LOGINED) {
  //     next({
  //       name: 'home'
  //     })
  //   } else {
  //     next()
  //   }
  // }

  const token = getToken()
  if (token) {
    // 调用接口是否有效
    store
      .dispatch('authorization', token)
      .then(() => {
        console.log('-------', token)
        // 有token 去Home
        if (to.name === 'login') next({ name: 'home' })
        else next()
      })
      .catch(() => {
        // 有token 失效了
        setToken('')
        next({ name: 'login' })
      })
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
})

// 导航确认之前调用 路由组件被触发已后
// router.beforeResolve()

// 做加载态
router.afterEach((to, from) => {
  // logining = false
})

/**
 * 导航解析流程
 * 1.导航被触发
 * 2.在失活的组件里调用离开守卫 beforeRouteLeave
 * 3.调用全局的 beforeEach 守卫
 * 4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)
 * 5.在路由配置里调用 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件里调用 beforeRouteEnter
 * 8.调用全局的 beforeResolve 守卫 (2.5+)
 * 9.导航被确认
 * 10.调用全局的 afterEach 钩子
 * 11.触发 DOM 更新
 * 12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数
 */

export default router
