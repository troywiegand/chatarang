import React, { Component } from 'react'

import UserInfo from './UserInfo'
import RoomList from './RoomList'

class Sidebar extends Component{
render(){
    return(
        <div className="Sidebar">
            <UserInfo userInfo={this.props.userInfo}/>
            <RoomList />
        </div>
    )
}

}

export default Sidebar