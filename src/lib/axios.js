import axios from 'axios'
import { baseURL } from '@/config'
import { getToken } from '@/lib/util'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    // 对列
    this.queue = {}
  }

  getInsideConfig () {
    // 全局配置
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }

  // 拦截器
  interceptors (instance, url) {
    // 请求
    instance.interceptors.request.use(
      config => {
        // 添加全局的 loading... Shin.show()
        // 判断对否不为多个对列 添加 loading
        if (!Object.keys(this.queue).length) {
          // Shin.show()
        }
        // 放入栈区
        this.queue[url] = true

        config.headers['Authorization'] = getToken()
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 响应
    instance.interceptors.response.use(
      res => {
        // 删除对列
        delete this.queue[url]
        // 响应成功 返回想要的 data status
        const { data, status } = res
        return { data, status }
      },
      error => {
        // 删除对列
        delete this.queue[url]
        return Promise.reject(error)
      }
    )
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
