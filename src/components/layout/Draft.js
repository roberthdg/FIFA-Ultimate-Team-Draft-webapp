
import React, { Suspense, lazy } from 'react'
import Field from '../draft/Field';
import Alert from 'sweetalert2';

const alert = Alert.mixin({
  toast: true,
  position: 'center-end',
  showConfirmButton: false,
  timer: 3000,
  background:'#171717',
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Alert.stopTimer)
    toast.addEventListener('mouseleave', Alert.resumeTimer)
  }
});

const Info = lazy(() => import('../draft/Info'));
const Loading = () => <div>Loading route...</div>;

function Draft()  {
  return (
    <div className="flex">
      <div className="flexItem"> <Field alert={alert}/> </div>
      <div className="flexItem centered"> 
        <Suspense fallback={Loading}>
          <Info alert={alert}/>
        </Suspense>
      </div>
    </div>
  )
}

export default Draft









