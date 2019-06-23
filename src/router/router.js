import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    // 路由别名
    alias: '/home_page',
    name: 'home',
    component: Home,
    props: route => ({
      name: route.query.name
    }),
    // 路由独享守位 必须添加 next() 不然不会跳转
    beforeEnter: (to, from, next) => {
      if (from.name === 'about') {
        console.log('这是从about页面来')
      } else {
        console.log('这不是about页面来的')
      }
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      // 组件传入默认参数
      name: 'Banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    // 热门
    path: '/hot/:id',
    name: 'hot',
    component: () => import('@/views/hot.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'baike',
        name: 'baike',
        component: () => import('@/views/baike.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/parent.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    // 重定项
    path: '/main',
    redirect: to => '/'
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
