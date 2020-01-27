import React from 'react'

function CustomTextInput(props) {
  console.log(props)
  return (
    <>
      <input type="text" ref={props.inputRef}/>
    </>
  )
}
class Study1 extends React.Component {
  constructor(props) {
    super(props)
    this.inputElement = React.createRef()
  }
  focus() {
    console.log(this.inputtext)
    this.inputtext.focus()
  }
  render() {
    return (
      <div>
        <input type="text" ref={(input) => {this.inputtext = input}}/>
        <CustomTextInput inputRef={this.inputElement}/>
        <button onClick={this.focus.bind(this)}>点击focus</button>
      </div>
    )
  }
}

class Study2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleontainer = React.createRef()

    // this.onClickHandler = this.onClickHandler.bind(this)
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this)
  }
  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler)
  }
  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }))
  }
  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.toggleontainer.current.contains(event.target)) {
      this.setState({ isOpen: false })
    }
  }
  render() {
    return (
      <div ref={this.toggleontainer}>
        <button onClick={this.onClickHandler.bind(this)}>选择选项</button>
        {
          this.state.isOpen ? 
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          : null
        }
      </div>
    )
  }
}

class Study extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.timeOutId = null
  }
  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }))
  }
  onBlurHandler() {
    console.log('blur')
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      })
    })
  }
  onFocusHandler() {
    console.log('focus')
    clearTimeout(this.timeOutId)
  }
  render() {
    return(
      <div onBlur={this.onBlurHandler.bind(this)} onFocus={this.onFocusHandler.bind(this)}>
        <button onClick={this.onClickHandler.bind(this)} aria-haspopup="true" aria-expanded={this.state.isOpen}>啦啦啦啦</button>
        {
          this.state.isOpen ? 
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          : null
        }
      </div>
    )
  }
}
export default Study
