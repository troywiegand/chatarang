import React, { Component } from 'react'
import {auth, googleProvider} from './base'

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
        
            </center>
            </div>
        )
    }
}

export default Login