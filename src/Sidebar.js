import React, { Component } from 'react'

import UserInfo from './UserInfo'
import RoomList from './RoomList'

class Sidebar extends Component{
render(){
    return(
        <div className="Sidebar" style={styles.sidebar}>
        
            <UserInfo style={styles.children} userInfo={this.props.userInfo} signOut={this.props.signOut}/>
            <h1 style={styles.h1}>XTBC 18</h1>
            <RoomList style={styles.children} rooms={this.props.rooms} setCurrentRoom={this.props.setCurrentRoom}/>
        </div>
    )
}

}

const styles = {
    sidebar: {
      backgroundColor: '#333344',
      color: 'rgba(255, 255, 255, 0.8)',
      width: '12rem',
      padding: '1rem 0',
      display: 'flex',
      flexDirection: 'column',
    },
  
    children: {
      padding: '0 1rem',
    },
    h1: {
        color: 'white',
        fontSize: '1.2rem',
        marginTop: 0,
        padding: '0 1rem',
      },
  
  }

export default Sidebar