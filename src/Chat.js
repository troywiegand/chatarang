import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'


class Chat extends Component{
    constructor(){
        super()
        this.state={messages: [
            {id: 1, userName: 'troy', body: 'rtgh'},
            {id: 2, userName: 'dante', body: 'coolsd'}
        ]}
    }
render(){
    return(
        <div className="Chat">
            <ChatHeader />
            <MessageList messages={this.state.messages}/>
            <MessageForm messages={this.state.messages} addMessage={this.addMessage}/>
        </div>
    )
}

addMessage = (body) => {
    const messages = [...this.state.messages]
    const user = this.props.userInfo;
    messages.push({id: `${user.uid} - ${Date().now()}`, userName: `${user.displayName}`, body})
    this.setState({messages})
}

}

export default Chat