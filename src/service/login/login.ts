import hyRequest from '@/service'
export function accountLogin(data) {
  hyRequest.post({
    url: '/login',
    data
  })
}
