import React, { Component } from 'react'
import {Route, Switch, Redirect } from 'react-router-dom'

import Sidebar from './Sidebar'
import Chat from './Chat'
import base from './base'


class Main extends Component{


  constructor(){  
    super()  
    
    this.state={

        room:{
            name: 'general',
            description: 'chat about stuff',
            
        },

        rooms: { },
    }}

    componentDidMount() {
        this.roomsRef = base.syncState(
          'rooms',
          {
            context: this,
            state: 'rooms',
            defaultValue: {
              general: {
                name: 'general',
                description: 'Chat about stuff',
              },
            },
            then: this.setRoomFromRoute,
          }
        )
      }
    
      componentDidUpdate(prevProps) {
        const { roomName } = this.props.match.params
        if (prevProps.match.params.roomName !== roomName) {
          this.setRoomFromRoute()
        }
      }
    
      componentWillUnmount() {
        base.removeBinding(this.roomsRef)
      }
    
      setRoomFromRoute = () => {
        const { roomName } = this.props.match.params
        if (roomName) {
          this.setCurrentRoom(roomName)
        }
      }
    
      addRoom = room => {
        const rooms = {...this.state.rooms}
        rooms[room.name] = room
   
        this.setState({ rooms })
      }

      removeRoom = roomName => {
          const rooms= {...this.state.rooms}
            rooms[roomName]=null

          this.setState({ rooms }, this.loadValidRoom)
      }
    
      setCurrentRoom = roomName => {
        const room = this.state.rooms[roomName]
    
        if (room) {
          this.setState({ room })
        } else {
          this.loadValidRoom()
        }
      }
    
      loadValidRoom = () => {
        const roomNames = Object.keys(this.state.rooms)
        if (roomNames.length > 0) {
          const roomName = roomNames[0]
          this.props.history.push(`/chat/rooms/${roomName}`)
        }
      }

render(){
    return(
        <div className="main" style={styles}>
            <Sidebar 
            
            addRoom={this.addRoom}
            userInfo={this.props.userInfo} 
            signOut={this.props.signOut} 
            rooms={this.state.rooms} 
            setCurrentRoom={this.setCurrentRoom}/>

            <Chat userInfo={this.props.userInfo} 
            room={this.state.room}
            removeRoom={this.removeRoom}/>
            
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