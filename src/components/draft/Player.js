import React, {useState, useEffect} from 'react'
import Link from './Link'
import jugadores from '../../data/jugadores'
import {updatePlayer} from '../../store/actions.js';
import {useDispatch, connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        formation: state.formation
    }
}

const Player = (props) => {

  const dispatch = useDispatch();

  let playerData = props.formation[props.index]

  const renderChemistryLinks = () => {
    return playerData.links.map(link => link.chemistryLine!=null ? 
      <Link chemistry={link.chemistry}
            chemistryLine={link.chemistryLine} 
            key={playerData.player.position+link.position}
      /> : null
    ) 
  }

  const openModal = () => {
    dispatch(updatePlayer(jugadores, props.index))
  }

  return (
    <>  
      <div id="player" className="grid-item">
        <img 
          src={playerData.player.cardImage}
          onClick={() => openModal()}
          className="player-card"
          alt="Player card"
        />
        {renderChemistryLinks()}
      </div>
    </>
  )
}

export default connect(mapStateToProps)(Player)


