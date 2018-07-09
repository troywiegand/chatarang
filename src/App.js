import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import Login from './Login'
import firebase from 'firebase/app'


class App extends Component {
  constructor(){
    super()
    const user = JSON.parse(localStorage.getItem('user'))
     
    console.log(JSON.parse(localStorage.getItem('user')))
 
   
    
      this.state={
        loggedIn: (user===undefined),
  
        user: user || {},
  
        currentRoom: ''
      }


  }
  render() {

      return (
        <div className="App">
        <h1 id="test">
           </h1>
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
  console.log(JSON.stringify(this.state.user))
   
  localStorage.setItem('user', JSON.stringify(user))
}


signOut = () => {
  this.setState({loggedIn: false})
  this.setState({user: {}})
  localStorage.removeItem('user')

}


}

export default App
