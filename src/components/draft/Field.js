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
        draftIndex: state.draftIndex
    }
}

const Field = (props) => {

    const displayFormation = () => {

        let players = props.formation.map( (player, i) => <Player key={i} index={i}/>)

        return [
            <div key="attack" className="flex grid"> {players.slice(9,11)} </div>,
            <div key="midfield" className="flex grid"> {players.slice(5,9)} </div>,
            <div key="defense" className="flex grid"> {players.slice(1,5)} </div>,
            <div key="goalkeeper" className="flex grid"> {players.slice(0,1)} </div>
        ]
    }

    const renderModal = () =>  {

        let playerData = jugadores.map((player, i) => <DraftPlayer key={i} index={props.draftIndex} playerData={player}/>)

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