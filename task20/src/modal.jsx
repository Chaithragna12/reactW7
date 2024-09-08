import React from 'react';
import './App.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" >
        <span className="close-button" ></span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
