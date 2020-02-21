import React, {useState} from 'react'
import Link from './Link'


function Player(props)  {

  // const useState({

  // }) 

  /*
  
  calculate Chemistry(props.chemistryLinks) {

      get state nation, league, club of linked component
      
      compare states 

      choose link color accordingly (null, 0, 1, >=2)

      render (or not) link

  }
  
  */


  return (
    <>  
      <div id="player" className="grid-item">
        <img 
          alt="Player card"
          src={props.cardImage}
          className="player-card"
        />
        { props.links.map(link => link.chemistryLine!=null ? 
          <Link reference={link.position}
                chemistry={0}
                chemistryLine={link.chemistryLine} 
                key={props.position+link.position}
            /> : null
          ) 
        }
      </div>
    </>
  )
}

export default Player
