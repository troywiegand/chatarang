import React from 'react'

const IconGenerator = (props) => {
   
    let number =props.user
    number=number.toString()
    if(number==="1")
    return( <i className="fas fa-bolt"></i> )

    if(number==="2") 
    return( <i className="fas fa-moon"></i> )
    
    if(number==="3")
    return( <i className="fas fa-anchor"></i> )
    
    if(number==="4")
    return( <i className="fas fa-bug"></i> )

    if(number==="5")
    return( <i className="fas fa-chess-rook"></i> )
   
   if(number==="6")
    return( <i className="fas fa-cog"></i> )
       

    return( <i className="fas fa-chess-queen"></i> )
}

export default IconGenerator