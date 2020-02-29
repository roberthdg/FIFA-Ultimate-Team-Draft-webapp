import React from 'react'
import {updatePlayer, swapPlayer} from '../../store/actions.js';
import {useDispatch} from 'react-redux';

const DraftPlayer = (props) => {

  const dispatch = useDispatch();

  const selectDraftPlayer = () => {
    props.type==="draft"
    ? dispatch(updatePlayer(props.playerData, props.index))
    : dispatch(swapPlayer(props.selectedPlayer, props.index))
  }

  return (
    <div className="playerModalItem">
      <img 
        src={props.playerData.cardImage}
        draggable={false}
        onClick={() => selectDraftPlayer()}
        className="playerModalCard transform"
        alt="Player card"
      />
    </div>
  )
}

export default DraftPlayer


