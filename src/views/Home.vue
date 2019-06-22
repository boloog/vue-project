<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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
