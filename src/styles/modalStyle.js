export const modalStyle = {
  content : {
    top:'50%',
    left:'50%',
    right:'auto',
    border:'3px solid #fff',
    textAlign:'center',
    bottom: 'auto',
    marginRight:'-50%',
    transform:'translate(-50%, -50%)',
    backgroundImage:'url("/img/modal.png")',
    backgroundSize:'150%',
    backgroundRepeat:'no-repeat',
    color:'#fff',
    maxWidth: '90vw'
  },
  overlay:{
      zIndex: 1000,
      background: 'radial-gradient(circle, rgba(113,113,113,0.7847514005602241) 0%, rgba(0,0,0,0.7511379551820728) 0%)'
  }
}

export const modalStyleHidden = {
  content : {
    top:'50%',
    left:'50%',
    right:'auto',
    border:'3px solid #fff',
    textAlign:'center',
    bottom: 'auto',
    marginRight:'-50%',
    transform:'translate(-50%, -50%)',
    backgroundImage:'url("/img/modal.png")',
    backgroundSize:'150%',
    backgroundRepeat:'no-repeat',
    color:'#fff',
    opacity:'0.2',
    maxWidth: '90vw'
  },
  overlay:{
      zIndex: 1000
  }
}

