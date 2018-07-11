import React, { Component } from 'react'
import moment from 'moment'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import base from './base'


class Chat extends Component{
    constructor(){
        super()
        
        this.state={messages: []}
    
    }

    componentDidMount() {
        this.syncMessages()
      }
    
      componentDidUpdate(prevProps, _prevState, _snapshot) {
        if (prevProps.room.name !== this.props.room.name) {
          this.syncMessages()
        }
      }
    
      componentWillUnmount() {
        base.removeBinding(this.messagesRef)
      }
    
      syncMessages = () => {
        // Stop syncing with the current endpoint
        if (this.messagesRef) {
          base.removeBinding(this.messagesRef)
        }
    
        // Sync with the new endpoint
        this.messagesRef = base.syncState(
          `messages/${this.props.room.name}`,
          {
            context: this,
            state: 'messages',
            asArray: true,
          }
        )
      }

addMessage = (body) => {
    const messages = [...this.state.messages]
    const user = this.props.userInfo
    let time =''
    
    time=moment().format('D MMM @ h:mm A')


    messages.push({
      id: `${user.uid}-${Date.now()}`,
      user,
      body,
      time: `${time}`,
    })

    this.setState({ messages })
  }

  render(){
    return(
        <div className="Chat" style={styles}>
            <ChatHeader room={this.props.room} removeRoom={this.props.removeRoom}/>
            <MessageList room={this.props.room} messages={this.state.messages} user={this.props.userInfo}/>
            <MessageForm  addMessage={this.addMessage}/>
        </div>
    )
}

}

const styles={
    flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

export default Chat