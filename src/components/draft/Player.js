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

function drawChemistryLine(color, degree) {

  let coordenates=chemistryLinesCoordenates[degree]

  return  (
    <svg height="25vh" width="45vh" className="svggg">
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

        { props.number==0 ? drawChemistryLine("#e3ae0e", '110') : null}
        { props.number==0 ? drawChemistryLine("#e3ae0e", '70') : null}

        { props.number==2 ? drawChemistryLine("red", '180') : null}
        { props.number==2 ? drawChemistryLine("red", '90') : null}

        { props.number==5 ? drawChemistryLine("#42f542", '135') : null}
        { props.number==5 ? drawChemistryLine("#42f542", '180') : null}
     
      </div>
    </>
  )
}

export default Player

// green("#42f542")  orange("#e3ae0e") red("red")

