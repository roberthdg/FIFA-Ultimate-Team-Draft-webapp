import React from 'react';
import {useDispatch} from 'react-redux';
import {startDraft} from '../../store/actions';
import data from '../../data/formations.js'


    
function StartMenu()  {
    const dispatch = useDispatch();

    const formations = JSON.parse(JSON.stringify(data))

    return (
        <div id="bench"> 
            <p> ¿Empezamos?: <button onClick={() => dispatch(startDraft(formations[0]))}>Start</button> </p>
        </div>
    )
}

export default StartMenu