import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import base from './base'


class Main extends Component{


  constructor(){  
    super()  
    
    this.state={
        renderChat: true,

        room:{
            name: 's3morning',
            description: 'words words words',
            
        },

        rooms: { },
    }}

    componentDidMount(){
        base.syncState('rooms',{
            context: this,
            state: 'rooms',
            asArray: false,
        }
    )
    }

    setCurrentRoom = (roomName)=>{
        this.rerenderChat()
        const room=this.state.rooms[roomName]
        this.setState({room}, ()=>{this.rerenderChat()})
    }

    addRoom = (room)=>{
        const oldRooms= {...this.state.rooms}
        let mergedRooms={...oldRooms, ...room}
        this.setState({rooms : mergedRooms})
    }

    rerenderChat = ()=>{
this.setState({renderChat: !(this.state.renderChat)})
    }

render(){
    return(
        <div className="main" style={styles}>
            <Sidebar addRoom={this.addRoom}
            userInfo={this.props.userInfo} 
            signOut={this.props.signOut} 
            rooms={this.state.rooms} 
            setCurrentRoom={this.setCurrentRoom}/>

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