// 持久化本地存储插件 返回一个方法 replaceState 替换
export default store => {
  console.log('store -- 自定义插件初始化')
  if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state))
  }
  // 刷新浏览器时调用，每次提交 commit 之前 会回调
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state)
    console.log('提交 mutation 自定义插件')
  })
}
