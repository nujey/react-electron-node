import React from 'react'
import { Button } from 'antd'

const themes = {
  light: {
    foreground: '#000',
    background: '#eee'
  },
  dark: {
    foreground: '#fff',
    background: '#222'
  }
}

const ThemeContext = React.createContext(themes.dark)

class Study extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light
    }
  }
  toggleTheme = () => {
    this.setState(state => ({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    }))
  }
  componentDidMount() {
    console.log(this.state.theme)
  }
  render() {
    return (
      <>
        <h3>context</h3>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeBtn changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          {/* <BasicBtn /> */}
        </section>
      </>
    )
  }
}

function ThemeBtn(props) {
  console.log(props)
  return (
    <>
      <BasicBtn onClick={props.changeTheme}>改变主题</BasicBtn>
    </>
  )
}

class BasicBtn extends React.Component {
  // 类的contextType属性 可以分配创建的Context对象
  static contextType = ThemeContext
  render() {
    let props = this.props
    let theme = this.context
    console.log(theme, 111)
    return <Button {...props} style={{backgroundColor: theme.background}}></Button>
  }
}

export default Study
