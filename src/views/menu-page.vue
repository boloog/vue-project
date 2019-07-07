<template>
  <div class="menu">
    <a-menu>
      <a-menu-item>11111111111</a-menu-item>
      <a-menu-item>2222222222222</a-menu-item>
      <a-sub-menu>
        <div slot="title">33333</div>
        <a-menu-item>33-111111</a-menu-item>
        <a-menu-item>33-222222</a-menu-item>
      </a-sub-menu>
    </a-menu>

    <a-sub-menu />
  </div>
</template>

<script>
import menuComponents from '_c/menu'
const { AMenu, AMenuItem, ASubMenu } = menuComponents

export default {
  name: 'menu_page',
  data () {
    return {

    }
  },
  components: {
    AMenu, AMenuItem, ASubMenu
  }
}
</script>

<style lang="less">
.menu {
  width: 600px;
  text-align: left;
}
</style>
