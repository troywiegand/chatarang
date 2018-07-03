import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'


class Main extends Component{
render(){
    return(
        <div className="main" style={styles}>
            <Sidebar userInfo={this.props.userInfo}/>
            <Chat userInfo={this.props.userInfo}/>
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