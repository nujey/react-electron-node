/**
 * 生命周期
 */
import React from 'react'

class Child extends React.Component {
  constructor() {
    super()
    console.log('child-constructor')
    this.state = {
      num: 0
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState)
    if(nextProps.age !== prevState.num) {
      return {
        onHandle: nextProps.onHandle,
        num: nextProps.age
      }
    }
    return null
  }
  // componentWillReceiveProps() {
  //   console.log('child-componentWillReceiveProps')
  // }
  // componentWillMount() {
  //   console.log('child-componentWillMount')
  // }
  componentDidMount() {
    console.log('child-componentDidMount')
  }
  // componentWillUpdate() {
  //   console.log('child-componentWillUpdate')
  // }
  componentDidUpdate(prevProps, prevState, prevInnerText) {
    console.log('child-componentDidUpdate', prevInnerText)
  }
  componentWillUnmount() {
    console.log('child-componentWillUnmount')
  }
  componentDidCatch() {
    console.log('child-componentDidCatch')
  }
  onHandle() {
    this.setState((num) => this.state.num++)
  }
  render() {
    console.log('child-render')
    return <div>
      {this.state.num}
      <button onClick={this.state.onHandle}>点击加一</button>
    </div>
  }
}

class Study extends React.Component {
  constructor() {
    super()
    console.log('father-constructor')
    this.testref = React.createRef()
  }
  state = {
    age: 10
  }
  // componentWillUpdate() {
  //   console.log('father-componentWillUpdate')
  // }
  shouldComponentUpdate() {
    // this.setState(age => 100)
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log(this.testref)
    return this.testref.current.innerText
  }
  componentDidUpdate(prevProps, prevState, prevInnerText) {
    console.log('father-componentDidUpdate', prevInnerText)
    // this.testref.current.innerText = prevInnerText + '加一句话啊'
  }

  componentDidCatch() {
    console.log('father-componentDidCatch')
  }
  onHandle() {
    this.setState(age => this.state.age++)
    this.setState(age => this.state.age++)
  }
  render() {
    console.log('father-render')
    return <div ref={this.testref}>
      <Child age={this.state.age} onHandle={this.onHandle.bind(this)}/>
    </div>
  }
}

export default Study
