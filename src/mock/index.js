import Mock from 'mockjs'
import { getUserInfo } from './response/user'

// Mock.mock('http://localohst:3000/getUserInfo', getUserInfo)
Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
// Mock.mock(/\/getUserInfo/, {
//   name: 'boloog'
// })

// 配置请求延迟
Mock.setup({
  timeout: 500
})

export default Mock
