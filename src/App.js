import './App.css';
import React, { useState } from 'react';
import Header from './component/Layout/Header/Header';
import Meals from './component/Meals/Mels';
import Card from './component/Card/Card';
import ContextProvider from './store/ContextProvider'

const App =()=> {
  const [show, setshow] = useState(false)
  const bor = ()=> {
    setshow(!show)
  }
  const yoq = ()=> {
    setshow(!show)
  }
  return (
    <ContextProvider>
      {show && <Card onShow={yoq}/>}
        <Header onShow={bor}/>
        <main>
          <Meals />
        </main>
    </ContextProvider>
  );
}

export default App;
