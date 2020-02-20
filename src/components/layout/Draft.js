
import React from 'react'
import Field from '../draft/Field';
import Info from '../draft/Info';
import Bench from '../draft/Bench';


function Draft()  {
    return (

      <div className="flex">
        <div className="flex-item"> <Field /> </div>
        <div className="flex-item"> <Info /> </div>
      </div>
      
    )
}

export default Draft









