import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor(){
    super()
    this.state={
      user: {
        uid: 'qwertyuiopasdfghjkl',
        displayName: 'TroyFromAce',
        email: 'troy@troywiegand.com',
      }
    }
  }
  render() {
    return (
      <div className="App">
       <Main userInfo={this.state.user}/>
      </div>
    )
  }
}

export default App
