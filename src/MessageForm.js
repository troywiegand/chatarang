import React, { Component } from 'react'

class MessageForm extends Component{
    handleSumbit= (ev) =>{
        ev.preventDefault()
        const words= ev.target.body.value
        this.props.addMessage(  {id: `You - ${Date.now()}`, userName: 'You', body: `${words}`})
    }
    
render(){
    return(
        <form onSubmit={this.handleSumbit}
        className="MessageForm">
        <input type="text" name="body" 
                placeholder="Type a message... "
                autoFocus
                required
                />
        <button type="submit">
            <i className="far fa-paper-plane" title="Send"></i>
        </button>
      </form>
    )
}

}

export default MessageForm