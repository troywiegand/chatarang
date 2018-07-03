import React from 'react'

import RoomAnnouncement from './RoomAnnouncement'
import Message from './Message'

const MessageList = (props) => {

    return(
        <div className="MessageList" style={styles.MessageList}>
             <RoomAnnouncement />
             {props.messages.map(msg => 
             <Message userName={msg.userName} message={msg.body} key={msg.id} icon={msg.icon}/>)}
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