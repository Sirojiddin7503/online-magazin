import React, {useRef} from 'react';
import Input from '../../Layout/Header/input';
import styles from './MealsForm.module.css'

const MealsForm = (props) => {
  const amountRef = useRef()

  const submitChangedHandler = (e)=>{
    e.preventDefault()
    const currentV = amountRef.current.value;
    if(currentV.trim().length <= 0 || +currentV < -1 || +currentV >5 ){
      return
    }

    props.onAmount(+currentV);
    amountRef.current.value = 1;
  }
    return (
        <form className={styles.form} onSubmit={submitChangedHandler}>
          <Input
           ref={amountRef}
           id={'gubtrm'} 
           type="number" 
           max='5' 
           min='1' 
           defaultValue={1}
           step='1'/>
          <button type='submit'>ADD</button>
        </form>
    )
}

export default MealsForm