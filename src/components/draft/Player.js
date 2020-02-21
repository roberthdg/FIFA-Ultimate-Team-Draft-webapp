import React, {useState} from 'react'
import Link from './Link'
import jugadores from '../../data/jugadores'


const Player = ({fixedPosition, chemistryLinks}) => {

  const [playerData, setPlayerData] = useState({
    position:null,
    nation:null,
    league:null,
    club:null,
    cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
  })

  const [chemistry, setChemistry] = useState(0);

  const [links, setLinks] = useState(chemistryLinks);


  function createChemistryLinks(links) {
   return links.map(link => link.chemistryLine!=null ? 
      <Link reference={fixedPosition}
            chemistry={chemistry}
            chemistryLine={link.chemistryLine} 
            key={playerData.position+link.position}
      /> : null
    ) 
  }
  
  function addPlayer() {
      setPlayerData(jugadores)
      links.map((link) => {
        return null
      })

     // setLinks()
     
     // updateChemistryLinks(links)
  }

  return (
    <>  
      <div id="player" className="grid-item">
        <img 
           onClick={() => addPlayer()}
          alt="Player card"
          src={playerData.cardImage}
          className="player-card"
        />
        {createChemistryLinks(links)}
      </div>
    </>
  )
}

export default Player



  // const useState({

  // }) 

  /*
  
  calculate Chemistry(props.chemistryLinks) {

      get state nation, league, club of linked component
      
      compare states 

      choose link color accordingly (null, 0, 1, >=2)

      render (or not) link

  }

  const [position, setPosition] = useState(null);
  const [nation, setNation] = useState(null);
  const [league, setLeague] = useState(null);
  const [club, setClub] = useState(null);
  
  */