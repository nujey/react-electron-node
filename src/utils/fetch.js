const headers = {
  "Content-type": "application/json;charset=UTF-8"
}
const BASE_API = '/api'

const httpGet = function(options) {
  return new Promise((resolve, reject) => {
    fetch(BASE_API + options.url, {
      headers: options.headers ? options.headers : headers
    }).then(response => response.json())
    .then(result => {
      if (result.code === 200) {
        resolve(result.result)
      } else {
        reject(result)
      }
    }).catch(err => reject(err))
  })
}

const httpPost = function(options) {
  return new Promise((resolve, reject) => {
    fetch(BASE_API + options.url, {
      method: 'POST',
      headers: options.headers ? options.headers : headers,
      body: JSON.stringify(options.data)
    }).then(response => response.json())
    .then(res => {
      if(res.code === 200) {
        resolve(res.result)
      } else {
        reject(res)
      }
    }).catch(err => reject(err))
  })
}

export { httpGet, httpPost }
