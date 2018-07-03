import React, { Component } from 'react'

import UserInfo from './UserInfo'

class Sidebar extends Component{
render(){
    return(
        <div className="Sidebar">
            <UserInfo />
        </div>
    )
}

}

export default Sidebar