import React, { Component } from 'react'


class RoomList extends Component{
render(){
    return(
        <div style={styles.children}>
        <h1 style={styles.h1}>XTBC 18</h1>
      <nav className="RoomList" >
        <h2 style={styles.h2}>Rooms</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><a style={styles.lia}>♦general</a></li>
          <li style={styles.li}><a style={styles.lia}>♦random</a></li>
        </ul>
      </nav>
      </div>
    )
}

}

const styles ={
  h2:{
    fontSize: '1rem',
  },

  ul:{
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  li:{
    marginBottom: '0.5rem'
  },

  lia: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none'
  },

  h1: {
    color: 'white',
    fontSize: '1.2rem',
    marginTop: 0,
    padding: '0 1rem',
  },

  children: {
    padding: '0 1rem',
  },
}

export default RoomList