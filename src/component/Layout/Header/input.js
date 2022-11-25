import React from 'react';
import styles from './input.module.css'

const Input = React.forwardRef((props, ref)=>{
    return (
        <div className={styles.input}>
            <label htmlFor={props.id}>Amount</label>
            <input ref={ref} defaultValue={props.defaultValue} type={props.type} max={props.max} min={props.min} id={props.id} value={props.value} />
        </div>
    )
})

export default Input