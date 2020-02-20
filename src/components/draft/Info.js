import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {resetDraft} from '../../actions';

function Info()  {
    const chemistry = useSelector(state => state.chemistry)
    const dispatch = useDispatch();

    return (
        <div id="bench"> 
            <p> Formación: </p>
            <p> Química: {chemistry} </p>
            <p> Rating: </p>
            <p><button onClick={() => dispatch(resetDraft())}>Reset</button> </p>
        </div>
    )
}

export default Info