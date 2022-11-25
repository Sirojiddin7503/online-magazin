import { useContext } from 'react';
import MealsForm from './MealsForm';
import styles from './MealsItem.module.css'
import Context from '../../../store/Context';

const MealsItem = (props)=>{
  const ctx = useContext(Context)
  const getAmount = (rrrr) => {
     ctx.addItem({
       name:props.name,
       title:props.title,
       price: props.price,
       amount:rrrr,
       id:props.id
     })
  }
    return (
        <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.title}</div>
        <div className={styles.price}>$ {props.price}</div>
      </div>
      <div>
        <MealsForm onAmount = {getAmount}/>
      </div>
    </li>
    )
}

export default MealsItem