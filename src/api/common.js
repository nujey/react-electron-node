import { httpGet, httpPost } from '../utils/fetch'

export const handleGetCode = function(query) {
  return new Promise((resolve, reject) => {
    httpGet({ url: '/common/getSvgCode?' + query }).then(res => {
      resolve(res)
    })
  })
}