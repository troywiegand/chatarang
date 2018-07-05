import React, { Component } from 'react'

class Login extends Component{
   constructor(){
       super()

       this.state= {
        displayName: '',
        email: '',
    }
   }

    handleSubmit = (ev) => {
        ev.preventDefault()
        const dispName = ev.target.displayName.value
        const em = ev.target.email.value
        this.props.addUser( dispName,em );
    }
  
    handleChangeName = (ev) => {
        this.setState({displayName: ev.target.value})
    }
    
    handleChangeEmail = (ev) => {
        this.setState({email: ev.target.value})
    }
    
    render(){
        return(
            <div className="Login">
            <center>
            Login to Chatarang
            <br/>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                       name="displayName"
                       placeholder="Display Name"
                       required 
                       value={this.state.displayName}
                       onChange={this.handleChangeName}/>
                <input type="email" 
                       name="email"
                       placeholder="email"
                       required 
                       value={this.state.email}
                       onChange={this.handleChangeEmail}/>
                       <br/>
                       <br/>
                <button type="submit">Submit </button>

                </form>
        
            </center>
            </div>
        )
    }
}

export default Login