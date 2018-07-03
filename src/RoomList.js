import React, { Component } from 'react'


class RoomList extends Component{
render(){
    return(
        <div>
        <h1>XTBC 18</h1>
      <nav className="RoomList">
        <h2>Rooms</h2>
        <ul>
          <li><a>general</a></li>
          <li><a>random</a></li>
        </ul>
      </nav>
      </div>
    )
}

}

export default RoomList