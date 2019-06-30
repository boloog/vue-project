import Mock from 'mockjs'

// 占位符
const Random = Mock.Random

export const getUserInfo = options => {
  const template = {
    'str|2-4': 'boloog',
    email: Random.email()
  }
  return Mock.mock(template)
}
