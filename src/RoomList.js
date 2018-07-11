import React,  { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import RoomForm from './RoomForm'
import {NavLink} from 'react-router-dom'

class RoomList extends Component {

state={showForm: false}

continueToShowForm= ()=>{
  this.setState({showForm:!this.state.showForm})
}

render(){
  return (
    <nav
      className={`RoomList ${css(styles.roomList)}`}
    >
      <h2 className={css(styles.h2)}>Rooms</h2>
      <ul className={css(styles.list)}>
        {
          Object.keys(this.props.rooms).map(
            roomName => (
              <li className={css(styles.item)} key={roomName}>
                <NavLink to={`/chat/rooms/${roomName}`} className={css(styles.link)}>
                  {roomName}
                </NavLink>
              </li>
            )
          )
        }
      </ul>
      <button onClick={(ev)=>{
        ev.preventDefault()
        this.setState({showForm:!this.state.showForm})
        }}> Add a room </button>
      {
        this.state.showForm
        ? <RoomForm addRoom={this.props.addRoom} 
        showForm={this.continueToShowForm}/>
        : <div />
      }
    </nav>
  )
}
}


const styles = StyleSheet.create({
  roomList: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"❖ "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
})

export default RoomList