import React from 'react'
import formationData from '../../formationsData.js'
import Player from './Player'

let formation = Object.keys(formationData.formation[0]);

let players = formation.map( (item, i) => <Player key={i} position={ item } number={i} /> )



function Field()  {
    return (
            <div id="lineup">
                {players} 
            </div>
    )
}

export default Field