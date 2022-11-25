import React from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Modal.module.css'

const Modal = (props)=> {
    const Backdrop = (props) => {
        return <div onClick={props.onClick} className={classes.backdrop}>{props.children}</div>
    }

    const Modal = (props) => {
        return <div className={classes.modal}>{props.children}</div>
    }
    const overlays = document.getElementById('overlays')
    return<React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, overlays)}
        {ReactDOM.createPortal(<Modal>{props.children}</Modal> , overlays)}
    </React.Fragment>
}

export default Modal