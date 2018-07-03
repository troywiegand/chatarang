import React, { Component } from 'react'

import UserInfo from './UserInfo'

class Sidebar extends Component{
render(){
    return(
        <div className="Sidebar">
            <UserInfo userInfo={this.props.userInfo}/>
        </div>
    )
}

}

export default Sidebar