import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import Login from './Login'


class App extends Component {
  constructor(){
    super()
    const user = JSON.parse(localStorage.getItem('user'))
      
      this.state={
        
        user: user || {},
  
        currentRoom: 'general'
      }


  }
  render() {

      return (
        <div className="App">
        <h1 id="test">
           </h1>
        {
           
          this.signedIn()
          ? <Main userInfo={this.state.user} signOut={this.signOut} currentRoom={this.state.currentRoom}/>
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

   
  localStorage.setItem('user', JSON.stringify(user))
}

signedIn = () => {
  return this.state.user.uid
}

signOut = () => {
  
  this.setState({user: {}})
  localStorage.removeItem('user')

}


}

export default App
