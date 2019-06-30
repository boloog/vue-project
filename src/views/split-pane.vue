<template>
  <div class="split-pane-page">
    <!-- 写法1 -->
    <!-- <split-pane :init-value="offset" @input="handleInput"></split-pane> -->
    <!-- 写法2 传入值 需要写成 value 才行 -->
    <!-- <split-pane v-model="offset"></split-pane> -->
    <!-- 写法3 sync 首先绑定值 -->
    <split-pane :init-value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>

<script>
import splitPane from '_c/split-pane'
export default {
  components: {
    splitPane
  },
  data () {
    return {
      offset: 0.8
    }
  },
  methods: {
    handleInput (value) {
      this.offset = value
    }
  }
}
</script>

<style lang="less">
.split-pane-page {
  width: 500px;
  height: 300px;
  background: darkcyan;
}
</style>
