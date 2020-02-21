import React from 'react';
import {useDispatch} from 'react-redux';
import {startDraft} from '../../store/actions';

function StartMenu()  {
    const dispatch = useDispatch();
    return (
        <div id="bench"> 
            <p> ¿Empezamos?: <button onClick={() => dispatch(startDraft())}>Start</button> </p>
        </div>
    )
}

export default StartMenu