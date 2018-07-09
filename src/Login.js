import React, { Component } from 'react'
import {auth, googleProvider, githubProvider} from './base'
import { StyleSheet, css } from 'aphrodite'

class Login extends Component{
   constructor(){
       super()

       this.state= {
        displayName: '',
        email: '',
    }
   }

  
   

    authenticate = (provider) => {
        auth.signInWithPopup(provider)
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
              className={css(styles.button)}
              onClick={() => this.authenticate(googleProvider)}
            >
              <i className={`fab fa-google ${css(styles.brandIcon)}`}></i>
              Sign in with Google
            </button>

            <button
              type="button"
              className={css(styles.button, styles.github)}
              onClick={() => this.authenticate(githubProvider)}
            >
              <i className={`fab fa-github ${css(styles.brandIcon)}`}></i>
              Sign in with GitHub
            </button>
        
            </center>
            </div>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    signIn: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#f6f6f6',
    },
  
    header: {
      backgroundColor: '#fff',
      height: '4rem',
      padding: '0 2rem',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    },
  
    title: {
      color: '#ff3344',
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: '80px',
      fontSize: '2rem',
    },
  
    main: {
      flex: 1,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '0 auto',
      paddingBottom: '3rem',
    },
  
    form: {
      width: '40rem',
      backgroundColor: 'white',
      boxShadow: '0 1px 1px rgba(0,0,0,.1)',
      marginBottom: '2rem',
      paddingBottom: '2rem',
      paddingTop: '2rem',
    },
  
    label: {
      display: 'block',
      textTransform: 'uppercase',
      color: '#999',
    },
  
    input: {
      width: '20rem',
      fontSize: '1.5rem',
      border: 0,
      borderBottom: '1px solid black',
      marginTop: '1rem',
      marginBottom: '1rem',
      textAlign: 'center',
      padding: '0.5rem',
  
      ':focus': {
        outline: 0,
      },
    },
  
    h2: {
      fontWeight: 'normal',
    },
  
    button: {
      display: 'block',
      margin: '0 auto 1rem',
      padding: '1rem 2rem',
      fontSize: '1.2rem',
      borderRadius: '1rem',
      backgroundColor: '#ff3333',
      color: 'white',
      width: '20rem',
    },
  
    github: {
      marginBottom: 0,
      backgroundColor: '#6e5494',
    },
  
    brandIcon: {
      marginRight: '1rem',
    },
  })