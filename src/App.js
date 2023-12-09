import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn === true) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Login</button>
    }

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />

        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
