import React, { Component } from 'react'

import IconGenerator from './IconGenerator'

class UserInfo extends Component{

    
render(){
    return(
        <div className="UserInfo" style={styles.UserInfo}>
            <div className="UserInfo">
        <div
          className="Avatar"
          style={styles.Avatar} >
          </div>
        <div className="user"
             style={styles.user}>
             <IconGenerator user={this.props.userInfo.icon}/>
                       {this.props.userInfo.displayName}
             </div>
        <a style={styles.a}>
          <i style={styles.i} className="fas fa-sign-out-alt"></i>
        </a>
      </div>
        </div>
    )
}

}

const styles ={
  UserInfo: {
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },

  Avatar: {
    marginRight: '0.5rem',
  },

  user: {
    flex: '1',
  },

  a: {
    border: '0',
    padding: '0',
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1.2rem',
    transition: 'color 0.25s ease-out',
  },
  
  i:{
    size: '125%'
  }


}

export default UserInfo