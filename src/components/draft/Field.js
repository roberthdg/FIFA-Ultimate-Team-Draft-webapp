import React from 'react'
import Loader from 'react-loader-spinner'
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
        isLoaded: state.isLoaded,
        modalIsOpen: state.modalIsOpen,
        selectedPlayer: state.selectedPlayer,
        formationIndex: state.formationIndex,
        draftCount: state.draftCount
    }
}

const Field = (props) => {

    const preloader = props.isLoaded ? null 
    :  <Loader
            type="Oval"
            color="white"
            height={100}
            width={100}
            className="loader"
        />

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

        let playerData = props.draftCount<11
        ?  jugadores.map((player, i) => <DraftPlayer key={i} type="draft" index={props.selectedPlayer} playerData={player}/>)
        :  props.formation.map((player, i) => props.selectedPlayer!==i? <DraftPlayer key={i} index={i} selectedPlayer={props.selectedPlayer} playerData={player.player}/> : null)

        let title = props.draftCount<11? <h2>Select a player</h2> : <h2>Swap positions</h2> 
        
        return  (
            <Modal
                isOpen={props.modalIsOpen}
                style={modalStyle}> 
                {title}
                <div className="box">
                    <div className={props.draftCount<11? "flexModal" : "flexModal padding"}>     
                        {playerData}
                    </div>
                </div>
            </Modal>
        )
    }

    return (
        <>
        {preloader}
        <div id="lineup" style={props.isLoaded ? {} : { display: 'none' }}>
            {displayFormation()} 
            {props.modalIsOpen? renderModal() : null}
        </div>
        </>
    )
}

export default connect(mapStateToProps)(Field)