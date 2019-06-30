import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'

// 动态引入mock 在开发环境引入 不是生成环境
if (process.env.NODE_ENV !== 'production') {
  require('./mock')
}

Vue.config.productionTip = false
// 引入自定交 Bus
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
