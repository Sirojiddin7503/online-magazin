import React, {useContext, useState} from 'react';
import Modal from './Modal';
import classes from './Card.module.css'
import Context from '../../store/Context';
import CardItem from './CardItem';

const Card = (props)=> {
   const ctx = useContext(Context)
   const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
   const remove = (id) => {
      ctx.remove(id)
   }

   const add = (item)=>{
      ctx.addItem({
         ...item,
         amount: 1
      })
   }
   return(
    <Modal onClick={props.onShow}>
       <ul className={classes['cart-items']} style={{overflow:'auto', maxHeight: '20rem'}} >
       {
          ctx.items.map((item)=> {
             return <CardItem 
             key={item.id}
             name={item.name} 
             price={item.price}  
             amount={item.amount} 
             onAdd={add.bind(null,item)}  
             onRemove={remove.bind(null, item.id)} />
          })
       }
       </ul>
        <div>
           <div className={classes.total}>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
           </div>
           <div className={classes.actions}>
               <button onClick={props.onShow} className={classes["button--alt"]}>Close</button>
               {<button className={classes["button"]}>Order</button>}
           </div>
        </div>
    </Modal>
   )
}

export default Card