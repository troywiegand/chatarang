import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'


class Main extends Component{

    state={
        room:{
            name: 's3morning',
            description: 'words words words',
            
        },

        rooms: {
            s3morning: {
                name: 's3morning',
                description: 'words words words',
            },
            general: {
                name: 'general',
                description: 'chat and whatnot'
            },
            anime: {
                name: 'anime',
                description: 'weeb stuff'
            }
        },
    }

render(){
    return(
        <div className="main" style={styles}>
            <Sidebar userInfo={this.props.userInfo} signOut={this.props.signOut} rooms={this.state.rooms}/>
            <Chat userInfo={this.props.userInfo} room={this.state.room}/>
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