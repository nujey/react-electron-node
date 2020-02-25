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
  },
  user: {
    name: 'user'
  }
}

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
})
const UserContext = React.createContext({ name: 'Guest' })

class Study extends React.Component {
  constructor(props) {
    super(props)
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: this.state.theme === themes.dark ? themes.light : themes.dark
      }))
    }
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    }
  }
  render() {
    return (
      <>
        <h3>context</h3>
        <ThemeContext.Provider value={this.state}>
          <ThemeBtn changeTheme={this.toggleTheme} />
          <UserContext.Provider value={themes.user}>
            <Layout />
          </UserContext.Provider>
          <ThemeTogglerButton />
        </ThemeContext.Provider>
        <section>
          {/* <BasicBtn /> */}
          <ThemeTogglerButton />
        </section>
      </>
    )
  }
}

function ThemeTogglerButton(props) {
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => {
        return <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background, color: '#f00'}}>
          Toggle Theme
        </button>
        }
      }
    </ThemeContext.Consumer>
  )
}

function ThemeBtn(props) {
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
    return <Button {...props} style={{backgroundColor: theme.theme.background}}></Button>
  }
}


function Layout() {
  return (
    <div>
      <Content />
    </div>
  )
}
function Content(props) {
  return (
    <UserContext.Consumer>
      {(user) => {
        return <span user={user.name}>{user.name}</span>
        }
      }
    </UserContext.Consumer>
  )
}
export default Study
