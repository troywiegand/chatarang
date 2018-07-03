import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'


class Main extends Component{
render(){
    return(
        <div className="main">
            Main
            <Sidebar />
            <Chat />
        </div>
    )
}

}

export default Main