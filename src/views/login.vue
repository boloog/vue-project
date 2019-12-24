<template>
  <div>
    <div>用户名:<input type="text" v-model="userName" /></div>
    <div>密码:<input type="password" v-model="password" /></div>
    <button @click="handleSubmit">提交</button>
  </div>
</template>
<script>

import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    handleSubmit () {
      this.login({
        userName: this.userName,
        password: this.password
      }).then(res => {
        this.$router.push({
          name: '/basic/home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
