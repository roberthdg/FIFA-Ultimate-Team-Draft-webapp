import React from 'react'
import {updatePlayer} from '../../store/actions.js';
import {useDispatch} from 'react-redux';

const DraftPlayer = (props) => {

  const dispatch = useDispatch();

  const selectDraftPlayer = () => dispatch(updatePlayer(props.playerData, props.index))

  return (
    <>  
      <div id="player" className="flexItem">
        <img 
          src={props.playerData.cardImage}
          draggable={false}
          onClick={() => selectDraftPlayer()}
          className="playerCard transform"
          alt="Player card"
        />
      </div>
    </>
  )
}

export default DraftPlayer


