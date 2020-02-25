import React from 'react'

const MyContainer = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: ''
      }
    }
    ref = (view) => {
      console.log(view)
      view.method()
    }
    onNameChange(text) {
      this.setState({
        name: text
      })
    }
    render() {
      const props = Object.assign({}, this.props, {
        ref: this.ref,
        name: {
          value: this.state.name,
          onChangeText: this.onNameChange 
        }
      })
      return (
        <div>
          <WrappedComponent {...props} />
        </div>
      )
    }
  }

}
class MyComponent extends React.Component {
  method = () => {
    console.log(111)
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="请输入"/>
      </div>
    )
  }
}

const Study = MyContainer(MyComponent)

export default Study