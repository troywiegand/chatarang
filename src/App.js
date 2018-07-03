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
      }
    }
  }
  render() {

    if(this.state.loggedIn){
      return (
        <div className="App">
        <Main userInfo={this.state.user}/>
        </div>)
    }
       else{
         return(
          <div className="App">
       <Login addUser={this.addUser} />
       </div>
         )}  
  }

addUser = (displayName, email) => {
  const user={
    uid: `${displayName}+${email}`,
    displayName,
    email,
    icon: this.randomIcon(),
  }

  this.setState({user: user})
  this.setState({loggedIn: true})
}

randomIcon(){
  return ( Math.floor(Math.random() * 6) + 1 ) 
}

}

export default App
