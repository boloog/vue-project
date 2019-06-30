<template>
  <div>
    <!-- 两个slot 需要用name 区分 -->
    <slot name="left"></slot>
    <span ref="number" :class="countClass" :id="eleId"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
// 直接外部引入样式
// import './count-up.less'
// 每个组件里的 this._uid 唯一

export default {
  name: 'CountUp',
  computed: {
    eleId () {
      return `count-up-${this._uid}`
    },
    countClass () {
      return [
        'count-up-number',
        this.className
      ]
    }
  },
  data () {
    return {
      counter: []
    }
  },
  props: {
    /**
     * 初始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * 最后的值
     */
    endVal: {
      type: Number,
      required: true // 必传的值
    },
    /**
     * 动画延迟
     */
    delay: {
      type: Number,
      default: 0 // 毫秒
    },
    /**
     * 小数点后 保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * 渐变时长
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * 默认分组
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * 分组符号
     */
    sparator: {
      type: String,
      default: ','
    },
    /**
     * 整数一小数的分隔
     */
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    getCount () {
      return this.$refs.number.innerText
      // this.eleId
    },
    emitEndEvent () {
      setTimeout(() => {
        this.$nextTick(() => {
          // 绑定父级事件 +5  是解决延迟
          this.$emit('on-animation-end', Number(this.getCount()))
        })
      }, this.duration * 1000 + 5)
    }
  },
  mounted () {
    // https://github.com/inorganik/CountUp.js
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        sparator: this.sparator,
        decimal: this.decimal
      })
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.delay)
    })
  },
  watch: {
    /**
     * 监听结束 新值 旧值 结束后返回事件
     */
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  }
}
</script>

<style lang="less">
// less 引入外部样式
@import "./count-up.less";
// 直接在页面写入样式也可以
</style>
