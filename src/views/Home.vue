<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ name }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到 Parent</button>
    <button @click="handleClick('replace')">替换到 Parent</button>
  </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    name: {
      type: String,
      default: 'Vue 3.0'
    }
  },
  /**
   * 切换路由 进入时调用
   */
  beforeRouteEnter (to, from, next) {
    console.log(to)
    console.log(from.name)
    // next()
    // this  获取不到
    next(vm => {
      console.log('vue实例', vm)
    })
  },
  /**
   * 路由即将离开里调用
   */
  beforeRouteLeave (to, from, next) {
    // const leave = confirm('您确定要离开吗？')
    // if (leave) {
    //   next()
    // } else {
    //   next(false)
    // }
    next()
    console.log('beforeRouteLeave - 当前this', this)
  },
  methods: {
    handleClick (type) {
      if (type === 'back') {
        this.$router.back()
      } else if (type === 'push') {
        // 方法一跳转
        this.$router.push({
          name: '/parent'
        })
        // 方法二跳转
        // const id = 2019
        // this.$router.push({
        //   path: `/hot/${id}`
        // })
        // 方法三跳转
        // this.$router.push({
        //   name: `/hot`,
        //   params: {
        //     name: 'id'
        //   }
        // })
      } else if (type === 'replace') {
        // 替换
        this.$router.replace({
          path: `/hot/1024`
        })
      }
    }
  }
}
</script>
