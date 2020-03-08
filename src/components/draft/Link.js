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

const chemistryLinesColor = {
  null: "#b4b5b8",
  0: "#eb1a1a",
  1: "#e3ae0e",
  2: "#42f542",
  3: "#42f542"
}

const Link = (props) =>  {
  
  let coordenates=chemistryLinesCoordenates[props.chemistryLine]
  let color = chemistryLinesColor[props.chemistry]

  return  (
    <svg className="svg" stroke={color}>
      <line  
        x1={`${coordenates[0]}%`}  y1={`${coordenates[1]}%`}
        x2={`${coordenates[2]}%`}  y2={`${coordenates[3]}%`} 
      />
    </svg>
  )
}

export default Link


