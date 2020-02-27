import React from 'react'
import {updatePlayer} from '../../store/actions.js';
import {useDispatch} from 'react-redux';

const DraftPlayer = (props) => {

  const dispatch = useDispatch();

  const selectDraftPlayer = () => dispatch(updatePlayer(props.playerData, props.index))

  return (
    <>  
      <div className="playerModalItem">
        <img 
          src={props.playerData.cardImage}
          draggable={false}
          onClick={() => selectDraftPlayer()}
          className="playerModalCard transform"
          alt="Player card"
        />
      </div>
    </>
  )
}

export default DraftPlayer


