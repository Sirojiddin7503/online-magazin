import React, { useReducer } from "react";
import Context from "./Context";
const defaultState = {
  items: [],
  totalAmount: 0,
};

const reducerFN = (state, action) => {
  switch (action.type) {
    case "ADD":
      const exsitingItemNumber = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const exsitingItem = state.items[exsitingItemNumber];
      const updateTotalAmount =
        state.totalAmount + action.item.amount * action.item.price;

      let updatedItems;
      if (exsitingItem) {
        const updateItem = {
          ...exsitingItem,
          amount: exsitingItem.amount + action.item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[exsitingItemNumber] = updateItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: updateTotalAmount,
      };
    case "REMOVE":
      const exsitingItemNumber1 = state.items.findIndex(
        (item) => item.id === action.id
      );
      const exsitingItem1 = state.items[exsitingItemNumber1];
      const updateTotalAmount1 =
      state.totalAmount - exsitingItem1.price
      let updatedItems1;
        if(state.items[exsitingItemNumber1].amount === 1){
            updatedItems1 = state.items.filter((item)=> action.id !== item.id)
        }else{
            const updateItem1 = {
                ...exsitingItem1,
                amount: exsitingItem1.amount - 1,
              };
              updatedItems1 = [...state.items]
              updatedItems1[exsitingItemNumber1] =  updateItem1
              
        }
     
      return {
          items:updatedItems1,
          totalAmount: updateTotalAmount1
      }

    default: return state;
  }
};

const ContextProvider = (props) => {
  const [state, dispachReducer] = useReducer(reducerFN, defaultState);
  const addItem = (item) => {
    dispachReducer({
      type: "ADD",
      item: item,
    });
  };

  const remove = (id) => {
    dispachReducer({
      type: "REMOVE",
      id: id,
    });
  };
  const data = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItem,
    remove: remove,
  };
  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};

export default ContextProvider;
