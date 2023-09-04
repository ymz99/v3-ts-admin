  import axios from "axios";
  import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

  interface Interceptors <T = AxiosResponse> {
    // 请求拦截
    requestSuccessFn: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestFailureFn?: (error: any) => any

    // 响应拦截
    responseSuccessFn?: (res: T) => T
    responseFailureFn?: (error: any) => any
  }

  interface RequestConfig<T = AxiosResponse> extends  AxiosRequestConfig {
    interceptors?: Interceptors<T>
  }
  type MergedRequestConfig<T = AxiosResponse> = RequestConfig<T> & InternalAxiosRequestConfig;

  class Request {
    config: AxiosRequestConfig
    interceptors?: Interceptors
    instance: AxiosInstance
    constructor(options:RequestConfig) {
      this.config = options
      this.instance = axios.create(options)
      this.interceptors = options.interceptors
      this.setupInterceptor()
    }

    // 拦截器
    setupInterceptor() {
      // 请求拦截
      this.instance.interceptors.request.use(
        this.interceptors?.requestSuccessFn,
        this.interceptors?.requestFailureFn
      )

      this.instance.interceptors.response.use(
        this.interceptors?.responseSuccessFn,
        this.interceptors?.responseFailureFn
      )
      // 响应拦截
    }

    request<T = any>(config: MergedRequestConfig<T>) {
      if (config.interceptors?.requestSuccessFn) {
          config = config.interceptors.requestSuccessFn(config)
      }
      return new Promise<T>((resolve,reject) => {
        this.instance.request<any, T>(config)
            .then(res => {
                if (config.interceptors?.responseSuccessFn) {
                    res = config.interceptors.responseSuccessFn(res);
                }
              resolve(res);
            })
            .catch(err => {
              if (config.interceptors?.responseFailureFn) {
                err = config.interceptors.responseFailureFn(err);
              }
              reject(err);
            })
      })
    }

    get<T = any>(config:MergedRequestConfig<T>) {
      return this.request({ ...config, method: 'get' })
    }
    post<T = any>(config:MergedRequestConfig<T>) {
        return this.request({ ...config, method: 'post' })
    }
    delete<T = any>(config:MergedRequestConfig<T>) {
        return this.request({ ...config, method: 'delete' })
    }
    patch<T = any>(config:MergedRequestConfig<T>) {
        return this.request({ ...config, method: 'patch' })
    }
  }

  export  default  Request