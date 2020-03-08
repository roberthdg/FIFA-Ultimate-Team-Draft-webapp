import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import axios from 'axios';
import Loader from 'react-loader-spinner'

function Leaderboard()  {

  const [data, setData] = useState();
  const preloader = <Loader type="Oval" color="white" height={100} width={100} className="loader"/>

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        process.env.REACT_APP_API_URL+'/leaderboard'
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  function renderTrophy(rank) {
    return (
    <img
      alt="FUTdraft trophy"
      src={`${process.env.PUBLIC_URL}/img/leaderboard/${rank}.png`}
      className="trophy"
      draggable={false}
    />
    )
  }

 function renderRows() {
    return data.map((squad, i) => (
        <tr className="row" key={squad._id}> 
          <td className="cell1"> 
            {i===0 ? renderTrophy('gold') : null}
            {i===1 ? renderTrophy('silver') : null}
            {i===2 ? renderTrophy('bronze') : null}
            {i>2? (i+1)+'th' : null}
          </td>
          <td className="cell2"><a className="tag" href={'/squad/'+squad._id}> {squad.name} </a></td>
          <td className="cell3">{squad.rating}</td>
        </tr>
    ))
  }

  function renderLeaderboard() {
    return <table style={{width:'100%'}}>
      <tbody>
        <tr className="row">
          <td className="cell1"> <strong>Rank</strong> </td>
          <td className="cell2"> <strong>Squad</strong> </td>
          <td className="cell3"> <strong>Score</strong> </td>
        </tr>
        {renderRows()}
      </tbody>
    </table>
  }

  return (
    <Card className="rulesCard">
      <Card.Header><h3><strong>FUT</strong>draft Top 50</h3></Card.Header>
      <Card.Body>
      {data===undefined? preloader : renderLeaderboard()}
      </Card.Body>
    </Card>        
  )
}

export default Leaderboard
