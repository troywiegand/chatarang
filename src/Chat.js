import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import RoomAnnouncement from './RoomAnnouncement'

class Chat extends Component{
render(){
    return(
        <div className="Chat">
            <ChatHeader />
            <RoomAnnouncement />
        </div>
    )
}

}

export default Chat