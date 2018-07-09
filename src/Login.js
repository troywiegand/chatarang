import React, { Component } from 'react'
import {auth, googleProvider, githubProvider} from './base'

class Login extends Component{
   constructor(){
       super()

       this.state= {
        displayName: '',
        email: '',
    }
   }

  
   

    authenticate = () => {
        auth.signInWithPopup(googleProvider)
    }

    authenticateGithub = () => {
        auth.signInWithPopup(githubProvider)
    }
    
    render(){
        return(
            <div className="Login">
            <center>
            Login to Chatarang
            <br/>
            <br/>
            <br/>
            

        <button
        type="button"
        onClick={this.authenticate}>
        Sign in with Google
        </button>

        <button
        type="button"
        onClick={this.authenticateGithub}>
        Sign in with Github
        </button>
        
            </center>
            </div>
        )
    }
}

export default Login