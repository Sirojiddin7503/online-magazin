import React from 'react';
import Styles from './Header.module.css'
import Button from './Button';
import Image from '../../../millisJpg/meals.jpg'
 
const Header = (props) =>{
    return (
       <React.Fragment>
            <header className={Styles.header}>
            <h1>React Meals</h1>
            <Button  onClick={props.onShow}/>
            </header>   
            <div className={Styles['main-image']}>
                <img src={Image} alt="imagedfg"/>
            </div>
       </React.Fragment>
    )
}

export default Header