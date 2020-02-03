import React from 'react'

class Test1 extends React.Component {
  constructor(props) {
    super(props)
    this.fancyRef = React.createRef()
  }
  render() {
    return (
      <div>
        <FancyButton name="fancybutton" ref={this.fancyRef}/>
      </div>
    )
  }
}
const FancyButton = React.forwardRef((props, ref) => {
  return <button ref={ref} className="fancy-button">{props.name}</button>
})

function studyHoc(InputComponent) {
  InputComponent.prototype.componentWillMount = function(nextProps) {
    console.log(this.props, 111)
    console.log(nextProps, 222)
  }
  return InputComponent
}

function logHoc(WrappedComponent) {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log(this.props)
      console.log(nextProps)
    }
    render() {
      console.log(this.props)
      const { extreProp, ...passthroughProps } = this.props

      // 向包裹组件注入props属性 一般都是高阶组件的state状态
      return <WrappedComponent {...this.props}/>
    }
  }
}

const Study = logHoc(Test1)

// 定义静态方法
// WrappedComponent.staticMethod = function() {}
// 使用高阶组件
// const EnhancedComponent = enhance(WrappedComponent)

// typeof EnhancedComponent.staticMethod === 'undefined'
// 手动复制原有的静态方法 必须要知道靠背的方法
function enhance(WrappedComponent) {
  class Enhance extends React.Component {}
  Enhance.staticMethod = WrappedComponent.staticMethod
  return Enhance
}

function enhance2(WrappedComponent) {
  class Enhance extends React.Component {}
  // hoistNonReactStatic(Enhance, WrappedComponent)
  return Enhance
}
// 或者将静态方法与组件本身相分离



export default Study
