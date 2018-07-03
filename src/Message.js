import React from 'react'

const Message = (props) => {
   
    return(

        <div className="Message" >
        <div className="details">
          <div className="Metadata">
            <div className="user">{props.userName}</div>
            <div className="time">{new Date().getHours()}:{new Date().getMinutes()}</div>
          </div>
          <div className="body">
            {props.message}
          </div>
        </div>
      </div>
    )

    
}



export default Message