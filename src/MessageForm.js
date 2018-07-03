import React, { Component } from 'react'



class MessageForm extends Component{
render(){
    return(
        <form className="MessageForm">
        <input type="text" placeholder="Type a message... "/>
        <button type="submit">
            <i className="far fa-paper-plane" title="Send"></i>
        </button>
      </form>
    )
}

}

export default MessageForm