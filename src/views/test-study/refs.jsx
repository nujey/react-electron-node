import React from 'react'

class Study extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.fancyRef = React.createRef()
    this.textInput = null
  }
  setRefInput = (element) => {
    this.textInput = element
  }
  focusInput = () => {
    this.myRef.current.focus()
  }
  
  render() {
    console.log(this.inputElement)
    return <div>
      <input ref={this.myRef} />
      <CustomInput />
      -
      <CustomTextInput inputRef={el => this.inputElement = el}/>
      <input type="text" placeholder="回调函数的ref" ref={this.setRefInput}/>
      <FancyButton name="fancybutton" ref={this.fancyRef}/>
      <div onClick={this.focusInput}>点击聚焦</div>
    </div>
  }
}

function CustomTextInput(props) {
  console.log(props)
  return (
    <div>
      <input type="text" placeholder="props的ref" ref={props.inputRef}/>
    </div>
  )
}

function CustomInput(props) {
  let textInput = null
  return (
    <div>
      <input type="text" ref={(input) => { textInput = input }}/>
    </div>
  )
}

const FancyButton = React.forwardRef((props, ref) => {
  console.log(props, ref)
  return <button ref={ref} className="fancy-button">{props.children}</button>
})
export default Study
