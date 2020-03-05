import React from 'react';
import {useDispatch} from 'react-redux';
import {startDraft} from '../../store/actions';
import {formationData, indexFormationData} from '../../data/formations.js';
import Modal from 'react-modal';
import {modalStyle} from '../../styles/modalStyle';
    
const StartMenu = () => {

    const dispatch = useDispatch();
    const formations = JSON.parse(JSON.stringify(formationData))

    return (
        <Modal
            isOpen={true}
            style={modalStyle}> 
                <h2>Choose a formation</h2> 
            <div className="box">
                <div className="flexModal formation">
                    <div className="formationItem">
                        <img 
                            src={process.env.PUBLIC_URL+"/img/formations/343.png"}
                            onClick={() => dispatch(startDraft(formations[2], indexFormationData[2]))}
                            className="formationCard"
                            alt="Formation 3-4-3"
                        />
                    </div>
                    <div className="formationItem">
                        <img 
                            src={process.env.PUBLIC_URL+"/img/formations/433.png"}
                            onClick={() => dispatch(startDraft(formations[1], indexFormationData[1]))}
                            className="formationCard"
                            alt="Formation 4-3-3"
                        />
                    </div>
                    <div className="formationItem">     
                        <img 
                            src={process.env.PUBLIC_URL+"/img/formations/442.png"}
                            onClick={() => dispatch(startDraft(formations[0], indexFormationData[0]))}
                            className="formationCard"
                            alt="Formation 4-4-2"
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default StartMenu