import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, connect } from 'react-redux';
import { resetDraft, changeName, openModal, closeModal } from '../../store/actions.js';
import { Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { Progress } from 'react-sweet-progress';
import "../../styles/progressBar.css";
import Modal from 'react-modal';
import { modalStyle } from '../../styles/modalStyle'
import Loader from 'react-loader-spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons' 

library.add(fab); 

const mapStateToProps = (state) => {
    return {
        squad: state.squad,
        formation: state.formation,
        changeFormationName: state.changeFormationName,
        modalState: state.modalState,
        draftCount: state.draftCount,
        draftEnded: state.draftEnded
    }
}

const Info = (props) =>  {
    const [data, setData] = useState();
    const [hidden, setHidden] = useState(true);
    const dispatch = useDispatch();
    const preloader = <Loader type="Oval" color="white" height={100} width={100} style={{margin: '0 auto', paddingTop:'15%', paddingBottom: '15%'}}/>

    let chemistry = props.squad.reduce((a, b) => a + (b.chemistry || 0), 0);
    let averageRating = (props.squad.reduce((a, b) => a + (b.player.rating || 0), 0) / 11);
    let starRating = averageRating/20
    let score = Math.round((chemistry+averageRating)*5) / 10;  

    function renderSquadNameModal() {
        return  (
            <Modal isOpen={props.modalState.open} style={modalStyle}> 
                <h2>Squad name:</h2>
                   <input className="nameInput" value={props.formation.name} onFocus={e => e.target.select()} onChange={(e) => dispatch(changeName(e.target.value))}/> <br/>
                   <button className="modalButton" onClick={() => dispatch(closeModal())} >Done</button>
            </Modal> 
        )
    }
    
    function renderResultsModal() { 
        let url='https://fifa-ultimate-team-draft.herokuapp.com/squad/'+data
        let text=`Can%20you%20beat%20my%20FIFA%20Ultimate%20Team%3F%20${url}%20via%20%23FUTdraft`

        return  (
            <Modal isOpen={true} style={modalStyle}> 
                <div>
                    <h2>Your team score is:</h2>           
                    {data===undefined ? preloader :
                    <div>
                        <h1 className="score">{score}</h1> <br/> 
                        <h4> Share your squad: </h4>
                        <div className="url">{url}</div><br/> 
                        <div style={{marginLeft: '-10%'}}>
                            <a className="tag" href={`https://twitter.com/intent/tweet?text=${text}`} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="socialIcon" icon={['fab', 'twitter']} />
                            </a>
                            <a className="tag" href={`https://t.me/share/url?url=${url}`} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="socialIcon" icon={['fab', 'telegram-plane']} />
                            </a>
                            <a className="tag" href={`https://wa.me/?text=${text}`} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="socialIcon" icon={['fab', 'whatsapp']} />
                            </a>
                        </div>
                    </div>
                    }
                    <button className="modalButton" onClick={() => dispatch(resetDraft())}>Restart</button>
                </div>
            </Modal>
        )
    }

    function submitDraft() {
        //Display results Modal
        dispatch(openModal("results", null)) 

        //Submit squad data to API then populate modal with the response data
        axios.post(process.env.REACT_APP_API_URL+'/submit', {
            name: props.formation.name,
            rating: score,
            formation: JSON.stringify(Object.values(props.formation.index)[0]),
            data: JSON.stringify(props.squad),
        })
        .then(res => setData(res.data.squad._id), error => console.log(error))
    }

    return (
        <>
        {props.modalState.open===true && props.modalState.type==="results"? renderResultsModal() : null }
        {props.modalState.open===true && props.modalState.type==="name"? renderSquadNameModal() : null}

        <Card className="infoCard">

            <Card.Header className="infoText" 
                onMouseOver={() => {setHidden(false)}}
                onMouseLeave={() => setHidden(true)}
                //Display Modal for squad name change
                onClick={() => dispatch(openModal("name", null))}>
                <h5>
                    {Object.values(props.formation.name)} 
                    {hidden? null : <FontAwesomeIcon icon={faEdit} className="editIcon"/>}
                </h5>
            </Card.Header>

            <Card.Body>
                <Card.Title> Rating: {Math.round(averageRating)} <br/></Card.Title>
                <StarRatings 
                    rating={starRating}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    starDimension='4vh'
                /> 
                <br/> <br/>
                <Card.Title> Chemistry </Card.Title>
                <Progress percent={chemistry}/>
            </Card.Body>

            {props.draftCount<11 
            ? <Card.Footer onClick={() => dispatch(resetDraft())} className="infoText">  <h5>Reset draft</h5> </Card.Footer>
            : <Card.Footer onClick={() => submitDraft()} className="infoText"> <h5>Submit draft</h5> </Card.Footer>
            }

        </Card>
        </>      
    )
}

export default connect(mapStateToProps)(Info)