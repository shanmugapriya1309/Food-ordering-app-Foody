import React, { useContext, useEffect } from 'react'
import './OrderPlaced.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/Context'


const OrderPlaced = () => {
  const{setCartItems}=useContext(StoreContext)
  useEffect(()=>{
    setCartItems({});

  },[])
  return (
    <div className='order-container'>
    <div className='order'>
      <h1>Your Order is placed successfully!!!</h1>
      <img src={assets.tick} alt="" />
      
    </div>
    </div>
  )
}

export default OrderPlaced
