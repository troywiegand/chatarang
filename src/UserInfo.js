import React, { Component } from 'react'

import IconGenerator from './IconGenerator'
import SignOutButton from './SignOutButton'

class UserInfo extends Component{

    
render(){
    return(
        <div className="UserInfo" style={styles.UserInfo}>    
        <div
          className="Avatar"
          style={styles.Avatar} >
           <IconGenerator userImage={this.props.userInfo.photoUrl}/>
          </div>
        <div className="user"
             style={styles.user}>
           {this.props.userInfo.displayName}
             </div>
        <SignOutButton signOut={this.props.signOut}/>
        </div>
    )
}

}

const styles ={
  UserInfo: {
    padding: '0 1rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },

  Avatar: {
    marginRight: '0.5rem',
  },

  user: {
    flex: '1',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
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