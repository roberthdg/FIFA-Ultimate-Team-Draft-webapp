import React from 'react'

const chemistryLinesCoordenates = {
  // degrees: (X,Y) coordenates
  '45': [100, 0, 50, 98],
  '70': [80, 0, 50, 98],
  '90': [50, 0, 50, 98],
  '110': [20, 0, 50, 98],
  '135': [0, 0, 50, 98], 
  '180': [0, 98, 50, 98]
}

function drawChemistryLine(color, degree, position) {

  let coordenates=chemistryLinesCoordenates[degree]

  return  (
    <svg key={position} height="25vh" width="45vh" className="svggg">
     <line  
        x1={`${coordenates[0]}%`}  y1={`${coordenates[1]}%`}
        x2={`${coordenates[2]}%`}  y2={`${coordenates[3]}%`} 
        stroke={color} strokeWidth="1.5%"
      />
    </svg>
  )
}


function Player(props)  {
  return (
    <>  
      <div id="player" className="grid-item">
        <img 
          alt="Player card"
          src={process.env.PUBLIC_URL + '/img/messi.png'}
          className="player-card"
        />
        {props.chemistryLinks.map(
          link => Object.values(link)[0]!=null ? 
            drawChemistryLine("#b4b5b8", Object.values(link)[0], Object.values(link)[0]+Object.keys(link)[0]) : null
          )}
      </div>
    </>
  )
}

export default Player

// green("#42f542")  orange("#e3ae0e") red("red")

