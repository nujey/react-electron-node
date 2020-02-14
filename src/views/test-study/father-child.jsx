import React from 'react'
import { ThemeContext } from './theme'

// const ThemeContext = React.createContext()

class Child extends React.Component {
  componentDidMount() {
    console.log(performance.now() - this.props.t)
  }
  state = {
    num: 0
  }
  static contextType = ThemeContext
  handle() {
    this.props.handle({text: `hello study${this.state.num++}`})
  }
  render() {
    console.log(this.context,this.props)
    return <>
      {
        this.context.contextObj.map((item, index) => <span key={index}>我是序号{item}</span>)
      }
      <p onClick={this.handle.bind(this)}>子组件{this.props.children}</p>
    </>
  }
}

function Childs() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        return <span onClick={context.handleClick}>我是另外的组件</span>
      }}
    </ThemeContext.Consumer>
  )
}

class Study extends React.Component {
  constructor() {
    super()
    this.state = {
      contextObj: [1, 2, 3, 4],
      handleClick: this.handleClick
    }
  }
  state = {
    contextObj: [1, 2, 3, 4],
    handleClick: this.handleClick
  }
  handleClick = (obj) => {
    this.setState((prevState, prevProp) => {
      prevState.contextObj.push(obj.text)
      return {
        contextObj: prevState.contextObj
      }
    })
  }
  render() {
    return <div>
      <ThemeContext.Provider value={this.state}>
        <Child t={performance.now()}  handle={this.handleClick}>哈哈哈</Child>
        <Childs />
      </ThemeContext.Provider>
    </div>
  }
}

export default Study
