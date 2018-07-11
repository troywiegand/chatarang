import React, { Component } from 'react'
import {Route , Switch, Redirect} from 'react-router-dom'

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
    <Switch>
      <Route path="/sign-in" 
      render = {()=>{
        return(
        this.signedIn()
        ? <Redirect to="/chat" />
        : <Login/>)
      }}/>
      <Route path="/chat/rooms/:roomName" 
      render ={(navProps)=>{
        return(
          this.signedIn()
          ? <Main userInfo={this.state.user} signOut={this.signOut} {...navProps} />
          : <Redirect to="/sign-in"/>)
      }}/>
      <Route path="/chat" 
      render ={(navProps)=>{
        return(
          this.signedIn()
          ? <Main userInfo={this.state.user} signOut={this.signOut} {...navProps} />
          : <Redirect to="/sign-in"/>)
      }}/>
      <Route render ={()=>{
        return(
          this.signedIn()
          ? <Redirect to="/chat"/>
          : <Redirect to="/sign-in"/>)
      }}/>

      </Switch>
   
    </div>)

}

}

export default App
