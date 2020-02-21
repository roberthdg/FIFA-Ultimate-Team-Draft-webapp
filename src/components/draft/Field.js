import React from 'react'
import data from '../../data/formations.js'
import Player from './Player'

function displayFormation(selectedFormation) {

    let formation = data.formations[selectedFormation];
    
    let players = formation.map( 
        (player, i)  => <Player key={i} 
            position={player.position} 
            nation={null}
            league={null}
            club={null}
            links={player.links.map(link=> ({ ...link, chemistry: null }))}
            cardImage={process.env.PUBLIC_URL + '/img/select_player_card.png'}
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

function Field()  {
    return (
            <div id="lineup">
                {displayFormation(0)} {/* props.selectedFormation*/}
            </div>
    )
}

export default Field