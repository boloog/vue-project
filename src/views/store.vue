<template>
  <div>
    <h1>store</h1>
    <a-input @input="handelInput"></a-input>
    <p>{{ inputValue }} --- last {{ inputValueLastLetter }}</p>
    <a-show :content="inputValue" />
    <h2>{{ userName }}</h2>
    <h3>{{ appName }}</h3>
    <h2>appVersion-{{ appVersion }}</h2>
    <h2>firstLetter - {{ firstLetter }}</h2>
  </div>
</template>

<script>
import AInput from '_c/AInput'
import AShow from '_c/AShow'
// 方法一
import { mapState, mapGetters } from 'vuex'

// 方法二 命名空间 一般不写，可以全局调用getters
// import { createNamespacedHelpers } from 'vuex';
// const { mapState } = createNamespacedHelpers('user')

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    // 方法一
    ...mapState('user', {
      userName: state => state.userName
    }),

    // ...mapState(['appName'])

    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })

    // 方法二
    // ...mapState({
    //   userName: state => state.userName
    // })

    appName () {
      return this.$store.state.appName
    },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    },

    // ...mapGetters([
    //   'appVersion',
    //   'firstLetter'
    // ])

    ...mapGetters('user', [
      'firstLetter'
    ])

    // appVersion () {
    //   return this.$store.getters.appVersion
    // }

  },
  methods: {
    handelInput (val) {
      this.inputValue = val
    }
  }
}
</script>
