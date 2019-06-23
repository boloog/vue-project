<template>
  <div>
    Hot pages
    {{ id }}
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '0623'
    }
  },
  /**
   * 路由发生变化 复用组件时调用
   */
  beforeRouteUpdate (to, from, next) {
    console.log('当前this', this)
    console.log(to.name, from.name)
  }
}
</script>
