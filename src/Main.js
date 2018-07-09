import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'


class Main extends Component{


  constructor(){  
    super()  
    
    this.state={
        renderChat: true,

        room:{
            name: 's3morning',
            description: 'words words words',
            
        },

        rooms: {
            s3morning: {
                name: 's3morning',
                description: 'words words words',
            },
            general: {
                name: 'general',
                description: 'chat and whatnot'
            },
            anime: {
                name: 'anime',
                description: 'weeb stuff'
            }
        },
    }}

    setCurrentRoom = (roomName)=>{
        this.rerenderChat()
        const room=this.state.rooms[roomName]
        this.setState({room}, ()=>{this.rerenderChat()})
    }

    rerenderChat = ()=>{
this.setState({renderChat: !(this.state.renderChat)})
    }

render(){
    return(
        <div className="main" style={styles}>
            <Sidebar userInfo={this.props.userInfo} signOut={this.props.signOut} rooms={this.state.rooms} setCurrentRoom={this.setCurrentRoom}/>

            {this.state.renderChat
            ? <Chat userInfo={this.props.userInfo} room={this.state.room}/>
            : null
            }
        </div>
    )
}    
}
const styles={
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',

}

export default Main