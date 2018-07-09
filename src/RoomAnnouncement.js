import React from 'react'

const RoomAnnouncement = (props) => {

    return(

    <div className="RoomAnnouncement" style={styles.roomAnnouncement}>
        <h3 style={styles.h3}> {`❖${props.room.name}`}</h3>
        <p>{`This is the very beginning of the ❖${props.room.name} room.`}</p>
      </div>
    )
}

const styles = {

      roomAnnouncement: {
        padding: '2rem 1rem',
      },
      h3:{
        fontSize: '1.5rem',
      }
}


export default RoomAnnouncement