import React from 'react'
import formationData from '../../formationsData.js'
import Player from './Player'

let formation = Object.keys(formationData.formation[0]);

let players = formation.map( (item, i) => <div className={i>1? "bitch": ""}><Player key={i} position={ item } number={i}/></div> )



function Field()  {
    return (
            <div id="lineup">

                <div class="flex-grid">
                    {players[10]}
                    {players[9]}
                   
                </div>

                <div class="flex-grid">
                    {players[8]}
                    {players[7]}
                    {players[6]}
                    {players[5]}
                    {players[4]}
                    {players[3]}
                    {players[2]}
                    {players[1]}
                </div>

                <div class="flex-grid">
                    {players[0]}
                </div>

            </div>
    )
}

export default Field