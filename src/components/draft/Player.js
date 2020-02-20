import React from 'react'
import Link from './Link'

function Player(props)  {
  return (
    <>  
      <div id="player" className="grid-item">
        <img 
          alt="Player card"
          src={process.env.PUBLIC_URL + '/img/messi.png'}
          className="player-card"
        />
        { 
          props.chemistryLinks.map(
            link => Object.values(link)[0]!=null ? 
              <Link color="#42f542" degree={Object.values(link)[0]} key={Object.values(link)[0]+Object.keys(link)[0]}/> : null
          )
        }
      </div>
    </>
  )
}

export default Player
