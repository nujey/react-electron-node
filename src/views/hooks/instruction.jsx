import React from 'react'

class HookOne extends React.Component {
  render() {
    return (
      <div>
        <p>我们在不编写类的情况下使用state和其他react功能</p>
        <p>React需要一个更好的原语来共享【有状态逻辑】</p>
        <p>使用hooks可以从组件中提取有状态逻辑，以便可以独立的测试并重用</p>
        <p>hooks允许在不更改组件层次结构的情况下重用有状态逻辑，可以轻松的在许多组件之间共享hooks</p>
        <p>类不能很好的压缩，并且使得热更新加载变得片状和不可靠</p>

        <p>Hooks 是一项新功能提案，可让您在不编写类的情况下使用 state(状态) 和其他 React 功能</p>
        
        <p className="main-instruction">
          Hooks是一种函数 函数允许从函数式组件中 【勾住hook into】React状态和生命周期的功能
          Hooks在类内部不起作用 允许无需类就可以使用React

          React提供了许多的内置Hook，当然我们可以创建自己的Hook以在不同的组件之间重用有状态的行为

        </p>
      </div>
    )
  }
}

export default HookOne
