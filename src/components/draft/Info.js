import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {resetDraft, addChemistry} from '../../store/actions.js';

function Info()  {
    const chemistry = useSelector(state => state.chemistry)
    const dispatch = useDispatch();

    return (
        <div id="bench"> 
            <p> Formación: </p>
            <p> Química: {chemistry} </p>
            <p> Rating: </p>
            <p><button onClick={() => dispatch(resetDraft())}>Reset</button> </p>
            <p><button onClick={() => dispatch(addChemistry(9))}>Add player</button> </p>
        </div>
    )
}

export default Info