import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import Login from './Login'

import {auth} from './base'


class App extends Component {
  constructor(){
    super()
    const user = JSON.parse(localStorage.getItem('user'))
      
      this.state={
        
        user: user || {},
  
        currentRoom: 'general'
      }


  }

  componentDidMount(){
    auth.onAuthStateChanged(
      user =>{
      if(user){

      this.handleAuth(user)
      }
      else{
        this.handleUnauth()
      }

    })
  }
 

handleAuth = (oAuthUser) => {
  const user = {
    uid: oAuthUser.uid,
      displayName: oAuthUser.displayName,
      email: oAuthUser.email,
      photoUrl: oAuthUser.photoURL,
  }

   
  this.setState({user: user})
  localStorage.setItem('user', JSON.stringify(user))
}

signedIn = () => {
  return this.state.user.uid
}

signOut = () => {
  auth.signOut()
}

handleUnauth = () =>{
  this.setState({user: {}})
  localStorage.removeItem('user')
}

render() {

  return (
    <div className="App">
    <h1 id="test">
       </h1>
    {
       
      this.signedIn()
      ? <Main userInfo={this.state.user} signOut={this.signOut} currentRoom={this.state.currentRoom}/>
      :<Login  />
    }
    </div>)

}

}

export default App
