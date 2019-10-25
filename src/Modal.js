import React from 'react';
import './App.css';

function Modal(props) {
  return (
    <div className={"modale " + props.isWin}>
        <div className="modal-container">
          <div className="flex">
            <p>{props.message}</p>
            <div className="croix">
            <span onClick={props.closeModale}>X</span>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Modal;

