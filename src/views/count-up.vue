<template>
  <div>
    <count-up ref="countUp" :end-val="endVal" @on-animation-end="handleEnd">
      <span slot="left">金额: </span>
      <span slot="right"> 元 </span>
    </count-up>
    <button @click="getNumber">获取数值</button>
    <button @click="updateNumber">更新数值</button>
  </div>
</template>

<script>
import countUp from '@/components/count-up'

export default {
  name: 'count_up',
  components: {
    countUp
  },
  data () {
    return {
      endVal: 100
    }
  },
  methods: {
    getNumber () {
      // 组件用 $refs.属性名
      this.$refs.countUp.getCount()
    },
    updateNumber () {
      // 随机输出 0-100的数
      this.endVal += Math.random() * 100
    },
    handleEnd (endVal) {
      console.log('endVal', endVal)
    }
  }
}
</script>
