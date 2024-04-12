import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = ({ onCartOff }) => {
  return <div className={classes.backdrop} onClick={onCartOff} />
} // 增加背景色 

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  )
} // modal 本身

const Modal = ({ children, onCartOff }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCartOff={onCartOff} />,
        document.getElementById('overlays'))}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlays'))}

    </>
  )
}

export default Modal