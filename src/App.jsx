import React from 'react'
import Navbar from './components/navbar/Navbar'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Login from './components/login/Login'
import { useState } from 'react'
import OrderPlaced from './pages/OrderPlaced/OrderPlaced'

const App = () => {

  const[showLogin,setShowLogin]=useState(false);
  return (
    <> 
    <div className='app'>

    {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<PlaceOrder/>}/>
            <Route path='/placed' element={<OrderPlaced/>}/> 
         </Routes>
     </div>
    </>
  )
}

export default App
