import React from 'react'

function Player(props)  {
  return (
    <>  
      <br/>
        {props.position.toUpperCase()} ({props.number})
      <br/>
    </>
  )
}

export default Player