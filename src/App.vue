<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/store">Store</router-link> |
      <router-link to="/split-pane">split-pane</router-link> |
      <router-link to="/render-pane">render-pane</router-link>
      <!-- <router-link to="/hot/9102">Hot/id</router-link> |
      <router-link :to="{ name: 'parent' }">Parent</router-link> |
      <router-link :to="{ name: 'baike' }">Parent/child</router-link> |
      <router-link to="/named_view">router-view 命名视图</router-link> -->
    </div>
    <!--
      路由动画
      1.直接router 写css样式控制
      2.绑定name值 在路由上添加参数即可
      http://localhost:8080/#/about?transitionName=router
    -->
    <transition-group name="router">
      <!-- <transition-group :name="routerTransition"> -->
      <router-view key="default" />
      <!-- 命名视图 -->
      <router-view key="email" name="email" />
      <router-view key="tel" name="tel" />
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerTransition: ''
    }
  },
  watch: {
    $route (to) {
      to.query &&
        to.query.transitionName &&
        (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>
<style lang="less">
// 路由动画效果
// 进入页面
.router-enter {
  opacity: 0;
}
// 设置组件从无到有的动态效果
.router-enter-active {
  transition: opacity 0.1s ease;
}
// 完全显示的状态
.router-enter-to {
  opacity: 1;
}
//  离开页面
.router-leave {
  opacity: 1;
}
// 设置组件从无到有的动态效果
.router-leave-active {
  transition: opacity 0.1s ease;
}
// 完全显示的状态
.router-leave-to {
  opacity: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
