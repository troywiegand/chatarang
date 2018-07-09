import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import base from './base'

class Chat extends Component{
    constructor(){
        super()
        
        this.state={messages: []}
    
    }

    componentWillMount(){
        this.messagesRef = base.syncState(`messages/${this.props.currentRoom}`,{
            context: this,
            state: 'messages',
            asArray: true,
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.messagesRef)
      }


render(){
    return(
        <div className="Chat" style={styles}>
            <ChatHeader />
            <MessageList messages={this.state.messages} user={this.props.userInfo}/>
            <MessageForm messages={this.state.messages} addMessage={this.addMessage}/>
        </div>
    )
}

addMessage = (body) => {
    const messages = [...this.state.messages]
    const user = this.props.userInfo

    messages.push({
      id: `${user.uid}-${Date.now()}`,
      user,
      body,
    })

    this.setState({ messages })
  }

}

const styles={
    flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

export default Chat