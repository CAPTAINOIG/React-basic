import React from 'react'

const Popup = () => {
    const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
}
return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>This is your pop-up content!</p>
      </div>
    </div>
  );
}

export default Popup