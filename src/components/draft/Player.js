import React, {useState, useEffect} from 'react'
import Link from './Link'
import jugadores from '../../data/jugadores'
import {updatePlayer, openModal, selectPlayer} from '../../store/actions.js';
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
            key={playerData.player.position+link.positionIndex}
      /> : null
    ) 
  }

  return (
    <>  
      <div id="player" className="gridItem">
        <img 
          src={playerData.player.cardImage}
          onClick={() => dispatch(openModal(props.index))}
          className="playerCard"
          alt="Player card"
        />
        {playerData.player.position!=null? <p className="playerChemistry">Chem: {playerData.chemistry}</p> : null}
        {renderChemistryLinks()}
      </div>
    </>
  )
}

export default connect(mapStateToProps)(Player)


