import React from 'react'

class Study extends React.Component {
  render() {
    return(
      <div>
        <h3>错误边界</h3>
        <p>错误边界无法捕获的错误：事件处理、异步代码、服务端渲染、错误边界自己的错误</p>
        <p>只有类组件才能称为错误边界</p>
        <ErrorBoundary>
          <p>错误组件只能捕捉其子组件的异常</p>
          <Count />
        </ErrorBoundary>
      </div>

    )
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  render() {
    console.log(this.props, this.state)
    if (this.state.errorInfo) {
      return (
        <div>
          <h3>something went wrong</h3>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    return this.props.children
  }
}

class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }
  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed')
    }
    return <h1 onClick={() => this.handleClick()}>{this.state.counter}</h1>
  }
}

export default Study
