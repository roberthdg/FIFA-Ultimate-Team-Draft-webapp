import React from 'react'
import { Card } from 'react-bootstrap';

function Rules()  {
  return (
    <Card className="rulesCard">
        <Card.Header><h3><strong>FIFA</strong> Ultimate Team Draft</h3></Card.Header>
        <Card.Body>
          <p> The goal is to create the best possible team by choosing the right players in each position. 
          <br/><br/>
            Your squad score will be based on the average rating of the players and their overall chemistry. 
            
            <br/><br/><img className="rulesImage" src={process.env.PUBLIC_URL+"/img/rules/rating.jpg"} alt="rating"/><br/><br/>

            Chemistry is calculated by comparing the player's original position with their current 
            place on the field, plus the links between nearby teammates (same nationality, club or league).

            <br/><br/><img className="rulesImage" src={process.env.PUBLIC_URL+"/img/rules/chemistry.jpg"} alt="chemistry"/><br/><br/>
            
            After completing the draft, you can swap their positions to optimize chemistry links 
            and get the best possible score.

            <br/><br/><img className="rulesImageWide" src={process.env.PUBLIC_URL+"/img/rules/swap.jpg"} alt="swap positions"/><br/><br/>

            Once you've finished tweaking your squad, submit it for evaluation, and if you make it into the top 50 it will appear on the <a className="tag" href="/leaderboard">leaderboard</a>.
            <br/><br/>Now you're ready to craft your Ultimate Team and make history!

          </p>
        </Card.Body>
    </Card>            
  )
}

export default Rules