import React,  {useContext} from 'react';
import Styles from './Button.module.css'
import Context from '../../../store/Context';

const Button = (props) => {
    const ctx = useContext(Context)
    const totalAmountOfItems = ctx.items.reduce((currentValue, item)=> {
        return currentValue + item.amount
    }, 0)
        return (
            <button className={Styles.button} onClick={props.onClick}>
                <span className={Styles.icon}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span>Your Cart</span>
                <span className={Styles.badge}>{totalAmountOfItems}</span>
            </button>
    );
}

export default Button