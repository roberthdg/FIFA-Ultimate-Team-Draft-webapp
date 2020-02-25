import React from 'react';
import {useDispatch} from 'react-redux';
import {startDraft} from '../../store/actions';
import data from '../../data/formations.js'
    
const StartMenu = () => {

    const dispatch = useDispatch();

    const formations = JSON.parse(JSON.stringify(data))

    return (
        <div id="bench"> 
            <p> Elige formación: </p>

            <img 
            src={process.env.PUBLIC_URL+"/img/formations/442.png"}
            onClick={() => dispatch(startDraft(formations[0]))}
            className="formationCard"
            alt="Formación"
            />

            <img 
            src={process.env.PUBLIC_URL+"/img/formations/433.png"}
            onClick={() => dispatch(startDraft(formations[1]))}
            className="formationCard"
            alt="Formación"
            />

            <img 
            src={process.env.PUBLIC_URL+"/img/formations/343.png"}
            onClick={() => dispatch(startDraft(formations[2]))}
            className="formationCard"
            alt="Formación"
            />
            
        </div>
    )
}

export default StartMenu