
import React, { Suspense, lazy } from 'react'
import Field from '../draft/Field';

const Info = lazy(() => import('../draft/Info'));
const Loading = () => <div>Loading route...</div>;


function Draft()  {
  return (
    <div className="flex">
      <div className="flexItem"> <Field /> </div>
      <div className="flexItem centered"> 
        <Suspense fallback={Loading}>
          <Info />
        </Suspense>
      </div>
    </div>
  )
}

export default Draft









