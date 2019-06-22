import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    // 路由别名
    alias: '/home_page',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    // 热门
    path: '/hot/:id',
    name: 'hot',
    component: () => import('@/views/hot.vue')
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
  }
]
