<template>
  <div class="split-pane-wrapper" ref="wrapper">
    <div class="pane pane-left" :style="{ width: leftOffsetWidth }">
      <slot name="left"></slot>
    </div>
    <div
      class="pane-trigger"
      :style="{ left: triggerLeft }"
      @mousedown="handleMouseDown"
    ></div>
    <div class="pane pane-right" :style="{ left: leftOffsetWidth }">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    initValue: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data () {
    return {
      // leftWidth: 0.3,
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    /**
     * 计算 width
     */
    leftOffsetWidth () {
      return `${this.initValue * 100}%`
    },
    /**
     * 计算 trigger 位置
     */
    triggerLeft () {
      return `calc(${this.leftOffsetWidth} - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMouseDown () {
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMouseMove (event) {
      if (!this.canMove) {
        return
      }
      // 获取当前事件 距离左边的具体
      const outerRect = this.$refs.wrapper.getBoundingClientRect()
      // this.$refs.wrapper.getBoundingClientRect().left
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width
      if (offsetPercent < this.min) {
        offsetPercent = this.min
      }
      if (offsetPercent > this.max) {
        offsetPercent = this.max
      }
      // 提交父级事件 方法1
      // this.$emit('input', offsetPercent)
      // 方法3 更新由组件 :init-value.sync 传入的值 再绑定回事件
      this.$emit('update:init-value', offsetPercent)

      // this.initValue = offsetPercent
    },
    handleMouseUp () {
      this.canMove = false
    }
  }
}
</script>
<style lang="less">
.split-pane-wrapper {
  height: 100%;
  position: relative;
  .pane {
    height: 100%;
    position: absolute;
    top: 0;
    &-left {
      // width: 30%;
      background: forestgreen;
    }
    &-right {
      right: 0;
      bottom: 0;
      // left: 30%;
      background: darkorange;
    }
    &-trigger {
      width: 8px;
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index: 2;
      user-select: none;
      // 鼠标拖动的效果 http://css-cursor.techstream.org/
      cursor: col-resize;
    }
  }
}
</style>
