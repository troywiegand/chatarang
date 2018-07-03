import React, { Component } from 'react'

class MessageForm extends Component{

state={
    message: ''
}
    handleSumbit= (ev) =>{
        ev.preventDefault()
        this.props.addMessage(this.state.message)
        this.setState({message: ' '})
    }

    handleChange = (ev) => {
        this.setState({message: ev.target.value})
    }
    
render(){
    return(
        <form onSubmit={this.handleSumbit}
        className="MessageForm">
        <input type="text" name="body" 
                autoFocus
                required
                placeholder="Type a message... "
                value={this.state.message}
                onChange={this.handleChange}
                
                />
        <button type="submit">
            <i className="far fa-paper-plane" title="Send"></i>
        </button>
      </form>
    )
}

}

export default MessageForm