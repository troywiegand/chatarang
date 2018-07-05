import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import Login from './Login'

class App extends Component {
  constructor(){
    super()
    const user = JSON.parse(localStorage.getItem('user'))

    if(JSON.parse(localStorage.getItem('user'))===undefined)
    {
      this.state={
        loggedIn: false,
  
        user: user || {},
  
        currentRoom: ''
      }
    }
    else{
      this.state={
        loggedIn: false,
  
        user: user || {},
  
        currentRoom: ''
      }
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
  localStorage.setItem('user', JSON.stringify(this.state.user))
}

signOut = () => {
  this.setState({loggedIn: false})
  this.setState({user: {}})
  localStorage.removeItem('user')

}


}

export default App
