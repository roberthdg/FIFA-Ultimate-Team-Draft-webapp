import React from 'react';
import {useDispatch} from 'react-redux';
import {startDraft} from '../../store/actions';
import data from '../../data/formations.js'

function StartMenu()  {
    const dispatch = useDispatch();

    let formation = data.formations[0]
    return (
        <div id="bench"> 
            <p> ¿Empezamos?: <button onClick={() => dispatch(startDraft(formation))}>Start</button> </p>
        </div>
    )
}

export default StartMenu