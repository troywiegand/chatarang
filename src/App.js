import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import Login from './Login'

class App extends Component {
  constructor(){
    super()
    this.state={
      loggedIn: false,

      user: {
        uid: 'qwertyuiopasdfghjkl',
        displayName: 'TroyFromAce',
        email: 'troy@troywiegand.com',
        icon: 0,
      },

      currentRoom: ''
    }
  }
  render() {

      return (
        <div className="App">
        {
          this.state.loggedIn
          ? <Main userInfo={this.state.user} signOut={this.signOut}/>
          :<Login addUser={this.addUser} />
        }
        
        
        </div>)
 
  }

addUser = (displayName, email) => {
  const user={
    uid: `${displayName}+${email}`,
    displayName,
    email,
  }

  this.setState({user: user})
  this.setState({loggedIn: true})
}

signOut = () => {
  this.setState({loggedIn: false})
  this.setState({user: {}})
}


}

export default App
