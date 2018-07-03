import React, { Component } from 'react'

import UserInfo from './UserInfo'
import RoomList from './RoomList'

class Sidebar extends Component{
render(){
    return(
        <div className="Sidebar" style={styles.sidebar}>
            <UserInfo style={styles.children} userInfo={this.props.userInfo}/>
            <RoomList style={styles.children} />
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
  
  }

export default Sidebar