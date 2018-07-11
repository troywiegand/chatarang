import React, {Component} from 'react'


import RoomAnnouncement from './RoomAnnouncement'
import Message from './Message'

class MessageList extends Component {

    componentDidUpdate(prevProps){
        if(prevProps.messages.length<this.props.messages.length)
        this.scrollToBottom()
    }

    scrollToBottom = ()=>{
        this.messagesEnd.scrollIntoView({behavior: 'smooth'})
    }

    render(){
        return(
        <div className="MessageList" style={styles.MessageList}>
             <RoomAnnouncement room={this.props.room}/>
            
             {this.props.messages.map(msg => 
             <Message  message={msg.body}  time={msg.time} user={msg.user}/>)}
             <div ref={el => this.messagesEnd = el}></div>
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