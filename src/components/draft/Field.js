import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import Player from './Player'
import DraftPlayer from './DraftPlayer'
import { roleData } from '../../data/formations'
import { connect, useDispatch } from 'react-redux';
import { populateModal } from '../../store/actions.js';
import Modal from 'react-modal';
import { modalStyle } from '../../styles/modalStyle'


Modal.setAppElement('#root')

const mapStateToProps = (state) => {
    return {
        formation: state.formation,
        isLoaded: state.isLoaded,
        modalIsOpen: state.modalIsOpen,
        selectedPlayer: state.selectedPlayer,
        draftedPlayers: state.draftedPlayers,
        formationIndex: state.formationIndex,
        draftCount: state.draftCount
    }
}

const Field = (props) => {

    const dispatch = useDispatch();
    const preloader = props.isLoaded ? null : <Loader type="Oval" color="white" height={100} width={100} className="loader"/>

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
        return  (
            <Modal isOpen={props.modalIsOpen} onAfterOpen={() => getPlayers()} style={modalStyle}> 
                <h2>{props.draftCount<11? 'Select a player' : 'Swap positions'}</h2>
                <div className="box">
                    <div className={props.draftCount<11? "flexModal" : "flexModal padding"}>     
                        {props.draftedPlayers==null
                        ? <Loader type="Oval" color="white" className="modalLoader"/> 
                        : props.draftedPlayers}
                    </div>
                </div>
            </Modal>
        )
    }

    const getPlayers = () => {
        if(props.draftCount<11) {
            let position = props.formation[props.selectedPlayer].fieldPosition
            let role = Object.keys(roleData).find(key => roleData[key].includes(position))
            let draftedPlayers = props.formation.filter((player) => player.player._id!=null).map( i => i.player.cardImage)

            axios.post(process.env.REACT_APP_API_URL+'/draft', {
                position: position,
                role: role,
                draftedPlayers: draftedPlayers
            })
            .then(res => {
                let playersData = res.data.map((player,i) => <DraftPlayer key={i} type="draft" index={props.selectedPlayer} playerData={player}/>)
                dispatch(populateModal(playersData))
                }, error => {
                    console.log(error);
                }
            )
        } else {
            let playersData = props.formation.map((player, i) => props.selectedPlayer!==i
            ? <DraftPlayer key={i} index={i} selectedPlayer={props.selectedPlayer} playerData={player.player}/> : null)
            dispatch(populateModal(playersData))
        }
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