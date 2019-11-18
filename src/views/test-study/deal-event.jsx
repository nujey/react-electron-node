import { React } from 'react'
import { Button } from 'antd'

function FunEvent(props) {
  function activeClick(e) {
    e.preventDefault()
  }
  return (
    <div>
      <button onClick={activeClick}></button>
    </div>
  )
}

class LoginButton extends React.Component {
  handleClick() {
    console.log(e)
  }
  handleClass = (e) => {
    console.log(e)
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)}></button>
        <button onClick={this.handleClass.bind(this, id)}></button>
      </div>
    )
  }
}

export default funEvent
