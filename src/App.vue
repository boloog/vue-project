<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/hot/9102">Hot/id</router-link> |
      <router-link :to="{ name: 'parent' }">Parent</router-link> |
      <router-link :to="{ name: 'baike' }">Parent/child</router-link> |
      <router-link to="/named_view">router-view 命名视图</router-link>
    </div>
    <router-view />
    <!-- 命名视图 -->
    <router-view name="email" />
    <router-view name="tel" />
  </div>
</template>

<style lang="less">
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
