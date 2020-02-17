import React from 'react'

function Player(props)  {
  return (
    <>  
      { 
      //if(props.number==4) {}
      }
      <div id="player">
        {props.position.toUpperCase()} ({props.number})
      </div>
    </>
  )
}

export default Player