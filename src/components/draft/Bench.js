import React from 'react'
import Player from './Player'


function Lineup()  {
    return (
        <div id="bench"> 
            <Player key={12} position={ "benchboi" } number={99} /> 
        </div>
    )
}

export default Lineup