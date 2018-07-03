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
    email
  }

  this.setState({user: user})
  this.setState({loggedIn: true})
}


}

export default App
