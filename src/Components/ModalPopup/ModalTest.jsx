import React from 'react'
import { useState } from 'react'
import Modal from './Modal';
import './styles-10.css';

const ModalTest = () => {
    const [ showModalPopup, setShowModalPopup] = useState(false);
  return (
    <div className="Modal-test-container">
        { showModalPopup === false &&<button className="btn btn-dark" onClick={ () => setShowModalPopup(!showModalPopup)}> Click to Open Modal  </button>}
        {showModalPopup && <Modal setShowModalPopup={setShowModalPopup}/>}
    </div>
  )
}

export default ModalTest