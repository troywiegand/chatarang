import React, { Component } from 'react'

import RoomAnnouncement from './RoomAnnouncement'
import Message from './Message'

class MessageList extends Component{
render(){
    return(
        <div className="MessageList">
             <RoomAnnouncement />
             <Message />
        </div>
    )
}

}

export default MessageList