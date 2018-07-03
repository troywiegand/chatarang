import React from 'react'

const Message = (props) => {
   
    return(

        <div className="Message" style={styles.Message} >
        <div
            class="Avatar"
          >
          <i class="fas fa-bolt"></i>
          </div>
        <div className="details" style={styles.details}>
          <div className="Metadata" style={styles.Metadata}>
            <div className="user" style={styles.user}>{props.userName}</div>
            <div className="time" style={styles.time}>{new Date().getHours()}:{new Date().getMinutes()}</div>
          </div>
          <div className="body">
            {props.message}
          </div>
        </div>
      </div>
    )

    
}

const styles ={
  Message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '0 1rem',
  },

  details: {
    flex: '1',
    paddingLeft: '0.5rem',
  },

  Metadata: {
    display: 'flex',
    alignItems: 'baseline',
  },

  user: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },

  time: {
    color: '#999',
    fontSize: '0.8rem',
  }

}


export default Message