import React from 'react';
import './styles-10.css';

const Modal = ({setShowModalPopup}) => {
    function handleClose(){
        setShowModalPopup(false)
    }
  return (
    < div className="modal-container">
        <div className="inner-container col-lg-8 col-8">
        <div className="modal-header"> 
            <h2 className="me-2">Header</h2>  
            <div className="closeIcon mb-2 text-danger" onClick={() => handleClose()}> x </div>
        </div>
        <div className="modal-body"> <p>Some random content here</p></div>
        <div className="modal-footer"> <h2>Footer</h2> </div>
        </div>
    </div>
  )
}

export default Modal