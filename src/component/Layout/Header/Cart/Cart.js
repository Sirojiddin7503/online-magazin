import React from 'react';
import Classes from './Cart.module.css'
const Card =(props)=> {
    const clasS = Classes.card + `${props.className}`
    return (
        <div className={clasS}>{props.children}</div>
    )
}

export default Card