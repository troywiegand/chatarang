import React, {Component} from 'react'


import RoomAnnouncement from './RoomAnnouncement'
import Message from './Message'

class MessageList extends Component {

    render(){
        return(
        <div className="MessageList" style={styles.MessageList}>
             <RoomAnnouncement room={this.props.room}/>
            
             {this.props.messages.map(msg => 
             <Message  message={msg.body}  time={msg.time} user={msg.user}/>)}
        </div>
    )
}
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