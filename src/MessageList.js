import React from 'react'

import RoomAnnouncement from './RoomAnnouncement'
import Message from './Message'

const MessageList = () => {
const messages =[
    {id: 1, userName: 'troy', body: 'lame'},
    {id: 2, userName: 'dante', body: 'cool'}
]

    return(
        <div className="MessageList">
             <RoomAnnouncement />
             {messages.map(msg => 
             <Message userName={msg.userName} message={msg.body} key={msg.id}/>)}
        </div>
    )

}

export default MessageList