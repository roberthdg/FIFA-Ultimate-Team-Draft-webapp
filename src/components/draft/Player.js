import React from 'react'

function Player(props)  {
    return (
    <>  
        <br/>
          I'm a player, my position is  {props.position}, my number is {props.number}.
        <br/>
    </>
    )
}

export default Player