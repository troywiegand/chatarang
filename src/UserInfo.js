import React, { Component } from 'react'

class UserInfo extends Component{

    
render(){
    return(
        <div className="UserInfo">
            <div className="UserInfo">
        <div
          className="Avatar"
          ></div>
        <div className="user">{this.props.userInfo.displayName}</div>
        <a >
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </div>
        </div>
    )
}

}

export default UserInfo