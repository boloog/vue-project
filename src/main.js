import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'

import CountUp from '_c/count-up'

// 动态引入mock 在开发环境引入 不是生成环境
if (process.env.NODE_ENV !== 'production') {
  require('./mock')
}

Vue.config.productionTip = false
// 引入自定交 Bus
Vue.prototype.$bus = Bus

const handelClick = event => {
  console.log(event)
  event.stopPropagation()
}

let list = [
  {
    name: 'list'
  },
  {
    name: 'li'
  }
]

const getLi = h => {
  return list.map((item, index) =>
    h(
      'li',
      {
        on: {
          click: handelClick
        },
        key: `list_item_${index}`
      },
      item.name
    )
  )
}

new Vue({
  router,
  store,
  // render: h => h(App)

  // 单独渲染一个div和boloog文本内容
  // h({
  //   'div',
  //   {
  //     attrs: {
  //       id: 'box'
  //     },
  //     style: {
  //       color: 'blue'
  //     }
  //   },
  //   'boloog'
  // })

  // render 函数的基本使用
  render: h => h(App)
  // h(CountUp, {
  //   class: ['abc'], // 自定义类名
  //   props: {
  //     endVal: 1999
  //   },
  //   on: {
  //     'on-animation-end': val => {
  //       console.log('动画结束')
  //     }
  //   },
  //   nativeOn: {
  //     click: () => {
  //       console.log('自定义click')
  //     }
  //   }
  // })
  // render 生成 多个子节点
  // h('div', [h('span', '111'), h('span', '222')])

  // 给 ul 添加事件  li 也绑定事件  并阻止事件冒泡
  // h(
  //   'ul',
  //   {
  //     on: {
  //       click: handelClick
  //     }
  //   },
  //   getLi(h)
  // )
}).$mount('#app')
