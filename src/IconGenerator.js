import React from 'react'

const IconGenerator = (props) => {
   const imageUrl= props.userImage
    

    return( <div style={{
        ...styles,
        backgroundImage: `url(${imageUrl})`
    }} > </div>)
}


const styles={
    height: '40px',
    width: '40px',
    fontSize: '1rem',
    borderRadius: '20px',
}
export default IconGenerator