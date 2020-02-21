import React from 'react'
import data from '../../data/formations.js'
import Player from './Player'

const displayFormation = (selectedFormation) => {

    let formation = data.formations[selectedFormation];
    
    let players = formation.map( 
        (player, i)  => <Player key={i} 
                                fixedPosition={player.position} 
                                chemistryLinks={player.links.map(link=> ({ ...link, chemistry: null }))}
        />
    )

    let lineup = [
                  <div key="attack" className="flex grid"> {players.slice(9,11)} </div>,
                  <div key="midfield" className="flex grid"> {players.slice(5,9)} </div>,
                  <div key="defense" className="flex grid"> {players.slice(1,5)} </div>,
                  <div key="goalkeeper" className="flex grid"> {players.slice(0,1)} </div>
                ]

    return lineup
}

const Field = () => {
    return (
            <div id="lineup">
                {displayFormation(0)} {/* props.selectedFormation*/}
            </div>
    )
}

export default Field