import React from 'react'

const MyContainer = (WrappedComponent) => {
  return class extends WrappedComponent {
    render() {
      return super.render()
    }
  }
}

export default MyContainer
