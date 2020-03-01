import React from 'react';
import {useDispatch, connect} from 'react-redux';
import {resetDraft} from '../../store/actions.js';
import { Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const mapStateToProps = (state) => {
    return {
        formation: state.formation,
        formationIndex: state.formationIndex,
        draftCount: state.draftCount
    }
}

function Info(props)  {

    const dispatch = useDispatch();
    let chemistry = props.formation.reduce((a, b) => a + (b.chemistry || 0), 0);
    let averageRating = (props.formation.reduce((a, b) => a + (b.player.rating || 0), 0) / 11);
    let starRating = averageRating/20

    const submitDraft= () => {
        dispatch(resetDraft())
    }

    const renderFooter = () => {
        if(props.draftCount<11) {
            return (
                <Card.Footer onClick={() => dispatch(resetDraft())} className="infoText">
                    Reset draft
                </Card.Footer>
            )
        } else {
            return (
                <Card.Footer onClick={() => submitDraft()} className="infoText">
                    Submit draft
                </Card.Footer>
            )
        }
    }

    return (
        <Card className="infoCard">
            <Card.Header className="infoText">Formation {Object.keys(props.formationIndex)[0]}</Card.Header>
            <Card.Body>
                <Card.Title>
                    Rating: {Math.round(averageRating)}  <br/>
                </Card.Title>
                <StarRatings 
                    rating={starRating}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    starDimension='4vh'
                /> 
                <Card.Title> 
                    Chemistry 
                </Card.Title>
                <Progress percent={chemistry}/>
            </Card.Body>
            {renderFooter()}
        </Card>      
    )
}

export default connect(mapStateToProps)(Info)