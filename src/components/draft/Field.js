import React from 'react'
import Player from './Player'
import DraftPlayer from './DraftPlayer'
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {modalStyle} from '../../styles/modalStyle'
import jugadores from '../../data/jugadores';

Modal.setAppElement('#root')

const mapStateToProps = (state) => {
    return {
        formation: state.formation,
        modalIsOpen: state.modalIsOpen,
        selectedPlayer: state.selectedPlayer,
        formationIndex: state.formationIndex 
    }
}

const Field = (props) => {

    const displayFormation = () => {

        let players = props.formation.map( (player, i) => <Player key={i} index={i}/>)

        let gridIndex = Object.values(props.formationIndex)[0] //sets flex grid structure for the formation

        return [
            <div key="attack" className="flex grid"> {players.slice(gridIndex[2], 11)} </div>,
            <div key="midfield" className="flex grid"> {players.slice(gridIndex[1], gridIndex[2])} </div>,
            <div key="defense" className="flex grid"> {players.slice(gridIndex[0], gridIndex[1])} </div>,
            <div key="goalkeeper" className="flex grid"> {players.slice(0, gridIndex[0])} </div>
        ]
    }

    const renderModal = () =>  {

        // is  draftCompleted?
        let playerData = jugadores.map((player, i) => <DraftPlayer key={i} index={props.selectedPlayer} playerData={player}/>)

        return  (
            <Modal
                isOpen={props.modalIsOpen}
                style={modalStyle}>    
                <div>     
                    <h2>Select a player</h2>
                    <div className="grid">    
                        {playerData}
                    </div>
                </div>
            </Modal>
        )
    }

    return (
        <div id="lineup">
            {displayFormation()} 
            {props.modalIsOpen? renderModal() : null}
        </div>
    )
}

export default connect(mapStateToProps)(Field)