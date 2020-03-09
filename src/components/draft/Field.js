import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import Player from './Player'
import DraftPlayer from './DraftPlayer'
import { roleData } from '../../data/formations'
import { connect, useDispatch } from 'react-redux';
import { populateModal, showModal, hideModal, closeModal } from '../../store/actions.js';
import Modal from 'react-modal';
import { modalStyle, modalStyleHidden } from '../../styles/modalStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTimesCircle} from '@fortawesome/free-regular-svg-icons'


Modal.setAppElement('#root')

const mapStateToProps = (state) => {
    return {
        squad: state.squad,
        imgLoaded: state.imgLoaded,
        modalState: state.modalState,
        selectedPlayer: state.selectedPlayer,
        draftedPlayers: state.draftedPlayers,
        formation: state.formation,
        draftCount: state.draftCount
    }
}

const Field = (props) => {

    const dispatch = useDispatch();
    const preloader = props.imgLoaded ? null : <Loader type="Oval" color="white" height={100} width={100} className="loader"/>

    function displayFormation() {
        let players = props.squad.map( (player, i) => <Player key={i} index={i}/>)
        let gridIndex = Object.values(props.formation.index)[0] //sets flex grid structure for the formation

        return [
            <div key="attack" className="flex grid"> {players.slice(gridIndex[2], 11)} </div>,
            <div key="midfield" className="flex grid"> {players.slice(gridIndex[1], gridIndex[2])} </div>,
            <div key="defense" className="flex grid"> {players.slice(gridIndex[0], gridIndex[1])} </div>,
            <div key="goalkeeper" className="flex grid"> {players.slice(0, gridIndex[0])} </div>
        ]  
    }   

    function renderModal() {
        const eyeIcon = <div className="eyeIcon" onMouseOver={() => dispatch(hideModal())}  onMouseLeave={() =>dispatch(showModal())} > <FontAwesomeIcon icon={faEye} /> </div>
        const closeIcon = <div className="closeIcon" onClick={() => dispatch(closeModal())} > <FontAwesomeIcon icon={faTimesCircle} /> </div>
        
        return  (
            <Modal isOpen={props.modalState.open} onAfterOpen={() => getPlayers()} style={props.modalState.hidden? modalStyleHidden : modalStyle}> 
                { props.draftedPlayers==null ? null : eyeIcon }
                { props.draftCount<11 ? null : closeIcon }
                 
                <h2 className="modalTitle">
                    {props.draftCount<11
                    ? `Select a player (${props.squad[props.selectedPlayer].fieldPosition})` 
                    : 'Swap positions'}
                </h2>

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

    function getPlayers() {
        if(props.draftCount<11) {
            let position = props.squad[props.selectedPlayer].fieldPosition
            let role = Object.keys(roleData).find(key => roleData[key].includes(position))
            let draftedPlayers = props.squad.filter((player) => player.player._id!=null).map( i => i.player.cardImage)
            //fetch data from API to get 5 random players
            axios.post(process.env.REACT_APP_API_URL+'/draft', {
                position: position,
                role: role,
                draftedPlayers: draftedPlayers
            })
            .then(res => {
                let playersData = res.data.map((player,i) => <DraftPlayer key={i} type="draft" index={props.selectedPlayer} playerData={player}/>)
                dispatch(populateModal(playersData))
                }, error => console.log(error)
            )
        } else {
            //populate modal with drafted players to swap positions
            let playersData = props.squad.map((player, i) => props.selectedPlayer!==i
            ? <DraftPlayer key={i} index={i} selectedPlayer={props.selectedPlayer} playerData={player.player}/> : null)
            dispatch(populateModal(playersData))
        }
    }

    return (
        <>
        {preloader}
        <div id="lineup" style={props.imgLoaded ? {} : { display: 'none' }}>
            {displayFormation()} 
            {props.modalState.open===true && props.modalState.type==="draft"? renderModal() : null}
        </div>
        </>
    )
}

export default connect(mapStateToProps)(Field)