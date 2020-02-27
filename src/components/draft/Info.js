import React from 'react';
import {useDispatch, connect} from 'react-redux';
import {resetDraft} from '../../store/actions.js';
import { Card, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const mapStateToProps = (state) => {
    return {
        formation: state.formation,
        formationIndex: state.formationIndex
    }
}

function Info(props)  {

    const dispatch = useDispatch();
    let chemistry = props.formation.reduce((a, b) => a + (b.chemistry || 0), 0);
    let averageRating = (props.formation.reduce((a, b) => a + (b.player.rating || 0), 0) / 11);
    let starRating = averageRating/20

    return (
        <div id="info"> 
        <Card className="infoCard infoText">
            <Card.Header>Formation {Object.keys(props.formationIndex)[0]}</Card.Header>
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
                <Button onClick={() => dispatch(resetDraft())} variant="primary">Restart</Button>
            </Card.Body>
        </Card>
            <p><button onClick={() => console.log(JSON.stringify(props.formationIndex))}>log</button> </p>
        </div>
    )
}

export default connect(mapStateToProps)(Info)