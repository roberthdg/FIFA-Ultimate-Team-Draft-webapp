import React from 'react'

function Player(props)  {
  return (
    <>  
      { 
      //if(props.number==4) {}
      }
      <div id="player">
        {props.position.toUpperCase()} ({props.number})
        <svg height="200" width="200">
          <line x1="0" y1="100" x2="100" y2="200" stroke="green" stroke-width="4"/>
          <line x1="200" y1="100" x2="100" y2="200" stroke="red" stroke-width="4"/>
        </svg>
      </div>
    </>
  )
}

export default Player