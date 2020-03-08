import React, { useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { showSquad } from '../../store/actions'
import Loader from 'react-loader-spinner'
import Player from '../draft/Player'
import { Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { Progress } from 'react-sweet-progress';
import "../../styles/progressBar.css";

const mapStateToProps = (state) => {
    return {
        squad: state.squad,
        formation: state.formation,
        isLoaded: state.isLoaded
    }
}

const Squad = (props) => {

    const dispatch = useDispatch();
    const preloader = props.isLoaded ? null : <Loader type="Oval" color="white" height={100} width={100} className="loader"/>

    //hook to fetch squad data from the API
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            process.env.REACT_APP_API_URL+'/squad/'+props.match.params.id
          );
            dispatch(showSquad(JSON.parse(result.data.squad.data), JSON.parse(result.data.squad.formation)))
        };
        fetchData();
    }, [dispatch, props.match.params.id]);
   
    function displayFormation() {
        if(props.formation===null) return null 
        let squad = props.squad
        let players = squad.map( (player, i) => <Player key={i} index={i}/>)
        let gridIndex = props.formation //sets flex grid structure for the formation

        return [
            <div key="attack" className="flex grid"> {players.slice(gridIndex[2], 11)} </div>,
            <div key="midfield" className="flex grid"> {players.slice(gridIndex[1], gridIndex[2])} </div>,
            <div key="defense" className="flex grid"> {players.slice(gridIndex[0], gridIndex[1])} </div>,
            <div key="goalkeeper" className="flex grid"> {players.slice(0, gridIndex[0])} </div>
        ]  
    }   

    function displayInfo() {
        let chemistry = props.squad.reduce((a, b) => a + (b.chemistry || 0), 0);
        let averageRating = (props.squad.reduce((a, b) => a + (b.player.rating || 0), 0) / 11);
        let starRating = averageRating/20

        return  (
            <Card className="infoCard">
                <Card.Body>
                    <Card.Title> Rating: {Math.round(averageRating)}  <br/> </Card.Title>

                    <StarRatings 
                        rating={starRating}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        starDimension='4vh'/> <br/> <br/>
                    
                    <Card.Title> Chemistry </Card.Title>

                    <Progress percent={chemistry}/>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div className="flex">
            <div className="flexItem"> 
                {preloader}
                <div id="lineup" style={props.isLoaded ? {} : { display: 'none' }}>  
                    {displayFormation()} 
                </div> 
            </div>
            <div className="flexItem centered"> 
                {displayInfo()}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Squad)