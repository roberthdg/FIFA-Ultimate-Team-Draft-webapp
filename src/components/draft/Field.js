import React from 'react'
import Player from './Player'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        formation: state.formation
    }
}

const Field = (props) => {

    const displayFormation = () => {

        let players = props.formation.map( (player, i) => <Player key={i} index={i}/>)

        return [
            <div key="attack" className="flex grid"> {players.slice(9,11)} </div>,
            <div key="midfield" className="flex grid"> {players.slice(5,9)} </div>,
            <div key="defense" className="flex grid"> {players.slice(1,5)} </div>,
            <div key="goalkeeper" className="flex grid"> {players.slice(0,1)} </div>
        ]
    }

    return (
        <div id="lineup">
            {displayFormation()} 
        </div>
    )
}

export default connect(mapStateToProps)(Field)