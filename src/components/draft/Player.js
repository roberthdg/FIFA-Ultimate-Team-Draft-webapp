import React, {useState, useEffect} from 'react'
import Link from './Link'
import jugadores from '../../data/jugadores'
import {updatePlayer} from '../../store/actions.js';
import {useSelector, useDispatch, connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        formation: state.formation
    }
}

const Player = (props) => {

  let playerData = props.formation[props.index]

  const createChemistryLinks = () => {
    return playerData.links.map(link => link.chemistryLine!=null ? 
      <Link chemistry={link.chemistry}
            chemistryLine={link.chemistryLine} 
            key={playerData.player.position+link.position}
      /> : null
    ) 
  }

  return (
    <>  
      <div id="player" className="grid-item">
        <img 
          onClick={() => console.log(playerData)}
          alt="Player card"
          src={playerData.player.cardImage}
          className="player-card"
        />
        {createChemistryLinks()}
      </div>
    </>
  )
}

export default connect(mapStateToProps)(Player)


