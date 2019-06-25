import { getAppName } from '@/api/app'

const actions = {
  // 方法一
  // updataAppName ({ commit }) {
  //   getAppName()
  //     .then(res => {
  //       const {
  //         info: { appName }
  //       } = res
  //       commit('SET_USER_NAME', appName)
  //     })
  //     .catch(err => console.log(err))
  // }

  // es8 方法二
  async updataAppName ({ commit }) {
    try {
      const {
        info: { appName }
      } = await getAppName()
      commit('SET_USER_NAME', appName)
    } catch (err) {
      console.log('异常情况', err)
    }
  }
}

export default actions
