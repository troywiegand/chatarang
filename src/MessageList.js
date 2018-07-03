import React from 'react'

import RoomAnnouncement from './RoomAnnouncement'
import Message from './Message'

const MessageList = (props) => {

    return(
        <div className="MessageList">
             <RoomAnnouncement />
             {props.messages.map(msg => 
             <Message userName={msg.userName} message={msg.body} key={msg.id}/>)}
        </div>
    )

}

export default MessageList