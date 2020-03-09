import React from 'react'
import Link from './Link'
import {openModal, selectPlayer, swapPlayer, imgLoaded} from '../../store/actions.js';
import {useDispatch, connect} from 'react-redux';

const STATIC_URL = process.env.REACT_APP_API_URL+'/uploads/'

const mapStateToProps = (state) => {
    return {
        squad: state.squad,
        draftCount: state.draftCount,
        selectedPlayer: state.selectedPlayer,
        imgLoaded: state.imgLoaded
    }
}

const Player = (props) => {

  const dispatch = useDispatch();
  let playerData = props.squad[props.index]
  let imgSource = playerData.player.position==null? process.env.PUBLIC_URL : STATIC_URL
  
  function renderChemistryLinks() {
    return playerData.links.map(link => link.chemistryLine!=null 
      ? <Link chemistry={link.chemistry}
            chemistryLine={link.chemistryLine} 
            key={playerData.player.position+link.positionIndex}/> 
      : null
    ) 
  }

  function dragStart(id) {
    dispatch(selectPlayer(id))
    let img = document.getElementById("img"+id)
    let chem = document.getElementById("chem"+id)
    setTimeout(()=> {
      chem.style.display = "none"
      img.classList.remove("transform")
      img.src= process.env.PUBLIC_URL + '/img/select_player_card.png'}, 0);  
  }

  function dragEnd() {
    let img = document.getElementById("img"+props.selectedPlayer)
    let chem = document.getElementById("chem"+props.selectedPlayer)
    chem.style.display = "block"
    img.classList.add("transform")
    img.src= STATIC_URL+props.squad[props.selectedPlayer].player.cardImage 
  }

  return (
    <div id="player" className="gridItem">
      <img
        id={"img"+props.index}
        className="playerCard transform"
        alt="Player card"
        src={imgSource+playerData.player.cardImage}
        onClick={() => props.draftCount<11 && playerData.player.position!=null? null : dispatch(openModal("draft", props.index))}
        onLoad={() => props.imgLoaded? null : dispatch(imgLoaded())}

        //allow player swaps after draft completion
        draggable={props.draftCount<11 ? false : true}
        onDragStart={() => dragStart(props.index)}
        onDragOver={(event) => event.preventDefault()}
        onDragEnd={() => dragEnd()}
        onDrop={() => dispatch(swapPlayer(props.selectedPlayer, props.index))}
      />

      {playerData.player.position!=null
      ? <p id={"chem"+props.index} className="playerChemistry">Chem: {playerData.chemistry}</p> 
      : <p className="playerPosition"> {playerData.fieldPosition}</p> }
      
      {renderChemistryLinks()}
      
    </div>
  )
}

export default connect(mapStateToProps)(Player)


