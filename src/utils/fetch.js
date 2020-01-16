import localStorage from './localstorage'
import { message } from 'antd'
import history from '../utils/history'
const token = localStorage.getItem('token', true)
const headers = {
  "Content-type": "application/json;charset=UTF-8"
}

const BASE_API = '/api'

const httpGet = function(options) {
  return new Promise((resolve, reject) => {
    headers.token = localStorage.getItem('token', true)
    fetch(BASE_API + options.url, {
      headers: options.headers !== undefined ? options.headers : headers
    }).then(response => response.json())
    .then(result => {
      if (result.code === 200) {
        resolve(result.result)
      } else if (result.code === 102){
        message.warning(result.message)
        history.push('/')
        reject(result)
      } else {
        reject(result)
      }
    }).catch(err => reject(err))
  })
}

const httpPost = function(options) {
  return new Promise((resolve, reject) => {
    headers.token = localStorage.getItem('token', true)
    fetch(BASE_API + options.url, {
      method: 'POST',
      headers: options.headers !== undefined ? options.headers : headers,
      body: JSON.stringify(options.data)
    }).then(response => response.json())
    .then(res => {
      if(res.code === 200) {
        resolve(res.result)
      } else if(res.code === 102) {
        message.warning(res.message)
        history.push('/')
        reject(res)
      } else {
        reject(res)
      }
    }).catch(err => reject(err))
  })
}

export { httpGet, httpPost }
