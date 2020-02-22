import React from 'react';
import {useDispatch, connect} from 'react-redux';
import {resetDraft, updateFormation} from '../../store/actions.js';

const mapStateToProps = (state) => {
    return {
        formation: state.formation,
        chemistry: state.chemistry
    }
}

function Info(props)  {

    const dispatch = useDispatch();
    return (
        <div id="bench"> 
            <p> Formación: </p>
            <p> Química: {props.chemistry} </p>
            <p> Rating: </p>
            <p><button onClick={() => dispatch(resetDraft())}>Reset</button> </p>
            <p><button onClick={() => dispatch(updateFormation())}>Update</button> </p>
            <p><button onClick={() => console.log(JSON.stringify(props.formation))}>log</button> </p>
        </div>
    )
}

export default connect(mapStateToProps)(Info)