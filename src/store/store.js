import { createStore } from 'redux'
import {todoApp} from './reducer'

// createStore的第二个参数是可选的 用于设置state的初始状态
let store = createStore(todoApp)
// let store = createStore(todoApp, window.SET_FROM_SERVER)

console.log(store.getState())
