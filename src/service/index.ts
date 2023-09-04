import Request from './request/index'
import { BASE_URL, TIME_OUT } from './config/requestConfig'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
      requestSuccessFn(config) {
        return config
      },
      responseSuccessFn(res) {
        return res
      }
  }
})
export default  request