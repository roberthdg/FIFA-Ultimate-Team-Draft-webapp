import React from 'react';
import {useDispatch, connect} from 'react-redux';
import {resetDraft} from '../../store/actions.js';

const mapStateToProps = (state) => {
    return {
        formation: state.formation,
        formationIndex: state.formationIndex
    }
}

function Info(props)  {

    const dispatch = useDispatch();

    let chemistry = props.formation.reduce((a, b) => a + (b.chemistry || 0), 0);

    let averageRating = (props.formation.reduce((a, b) => a + (b.player.rating || 0), 0) / 11);

    return (
        <div id="bench"> 
            <p> Formación: {Object.keys(props.formationIndex)[0]}</p>
            <p> Química: {chemistry} </p>
            <p> Rating: {Math.round(averageRating)} </p>
            <p><button onClick={() => dispatch(resetDraft())}>Reset</button> </p>
            <p><button onClick={() => console.log(JSON.stringify(props.formationIndex))}>log</button> </p>
        </div>
    )
}

export default connect(mapStateToProps)(Info)