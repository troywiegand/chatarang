import React from 'react'

import RoomAnnouncement from './RoomAnnouncement'
import Message from './Message'

const MessageList = (props) => {

    return(
        <div className="MessageList" style={styles.MessageList}>
             <RoomAnnouncement room={props.room}/>
            
             {props.messages.map(msg => 
             <Message  message={msg.body}  time={msg.time} user={msg.user}/>)}
        </div>
    )

}

const styles = {
    MessageList: {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
      },

}

export default MessageList