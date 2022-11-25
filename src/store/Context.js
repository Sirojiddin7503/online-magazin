import React, { createContext } from 'react';

 const Context = createContext({
    items: [],
    totalAmount:0,
    addItem: (item)=> {},
    remove:(id)=> {}
 })

 export default Context