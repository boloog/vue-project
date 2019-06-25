<template>
  <div>
    <div>方法1</div>
    <a-input :value="stateValue" @input="handleStateValueChange"></a-input>
    <div>方法2</div>
    <a-input v-model="stateValue"></a-input>
    <h1>store</h1>
    <a-input @input="handelInput"></a-input>
    <p>{{ stateValue }} --- last {{ inputValueLastLetter }}</p>
    <a-show :content="inputValue" />
    <h2>+{{ userName }}+</h2>
    <h3>{{ appName }}</h3>
    <h2>appVersion-{{ appVersion }}</h2>
    <!-- <h2>firstLetter - {{ firstLetter }}</h2> -->
    <button @click="handelChangeAppName">修改</button>
    <p>版本号：{{ appVersion }}</p>

    <button @click="handelRegModule">动态注册模块</button>
    <ul v-for="(li, index) in todoList" :key="index">
      <li>{{ li }}</li>
    </ul>
  </div>
</template>

<script>
import AInput from '_c/AInput'
import AShow from '_c/AShow'
// 方法一
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

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
    // 方法一 // 这种就要写上模块名才能调用 'user/xxx' 模块下级 modules
    // ...mapState('user', {
    //   userName: state => state.userName
    // }),

    // ...mapState(['appName'])

    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
      // stateValue: state => state.stateValue 也可以 自定义 一个 stateValue 计算属性

      // todoList: state => state.todo ? state.todo.todoList : []
    }),

    // 方法二
    // ...mapState({
    //   userName: state => state.userName
    // })

    // appName () {
    //   return this.$store.state.appName
    // },
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

    // ...mapGetters('user', [
    //   'firstLetter'
    // ])
    // appVersion () {
    //   return this.$store.getters.appVersion
    // }
    // 用事件修改inputValue 修改值 一般还是用 commit 提交到 mutations里 修改 state的值
    // appName: {
    //   set: function (newValue) {
    //     this.inputValue = newValue + '---set'
    //   },
    //   get: function () {
    //     return this.inputValue + '---set+get'
    //   }
    // }

    stateValue: {
      set: function (newValue) {
        this.SET_STATE_VALUE(newValue)
      },
      get: function () {
        return this.$store.state.stateValue
      }
    }

  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_USER_NAME',
      'SET_STATE_VALUE'
    ]),
    // 调用actions 里面的方法 并异步返回数据
    // ...mapActions([
    //   'updataAppName'
    // ]),
    handelInput (val) {
      this.inputValue = val
    },
    handelChangeAppName () {
      this.$store.state.appName = '我直接修改'
      // 两个参数形式提交
      // this.$store.commit('SET_APP_NAME', 'longbolong')
      // 对象形式提交
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'longbolong'
      // })
      // 使用 mapMutations 操作
      // this.SET_APP_NAME('longbolong')
      // this.SET_USER_NAME('haaaaaaaaaa')
      this.$store.commit('SET_APP_VERSION')

      // 调用actions 里面的方法 并异步返回数据
      // this.updataAppName()
      // 触发 actions 里面的方法 并异步返回数据
      this.$store.dispatch('updataAppName')

      // 用事件修改inputValue 修改值 一般还是用 commit 提交到 mutations里 修改 state的值
      // this.appName = 'newAppName'
    },
    handelRegModule () {
      // 模块名称
      // this.$store.registerModule('todo', {
      //   state: {
      //     todoList: [
      //       '动态模块添加',
      //       'registerModule'
      //     ]
      //   }
      // })
      // 给 user 模块添加子模块 todo
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '动态模块添加',
            'registerModule'
          ]
        }
      })
    },
    handleStateValueChange (val) {
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>
