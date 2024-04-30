import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/Context'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext);
  const[total,setTotal]=useState(0);
  
  if(getTotalCartAmount() === 0){
   return (
    <div>
    <div className='empty-cart'>
      
      <img src={assets.empty_cart} alt="" />
      
    </div>
    </div>
   )
  }
  else{
  return (
    
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          
        </div>
        <br />
        <hr />

         {food_list.map((item,index)=>{
           
          
          if(cartItems[item._id]>0){
            return(
              <>
              <div className='cartItems-list'>
                <img className='cart-image' src={item.image} alt="" />
                <p>{item.name}</p>
                <p><span>&#8377;</span>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p><span>&#8377;</span>{item.price*cartItems[item._id]
            }</p>
                
                <img  className='cross-line' onClick={()=>{removeFromCart(item._id)}} src={assets.muttiply_icon} alt="" />
                
              </div>
              <hr />
              </>
              
            )
          }
        })} 
        
      </div>
      <div className='cart-bottom'>
         <div className='cart-total'>
           <h2>Cart Totals</h2>
           <div>
             <div className="cart-details">
              <p>SubTotal</p>
              <p><span>&#8377;</span>{getTotalCartAmount()}</p>
             </div>
             <hr />
             <div className="cart-details">
               <p>Delivery Fee</p>
               <p><span>&#8377;</span>{20}</p>
             </div>
             <hr />
             <div className="cart-details" id='cart-details'>
               <p>Total</p>
               <p><span>&#8377;</span>{getTotalCartAmount()+ 20}</p>
             </div>
             <hr />
            <Link to="/order"> <button className='cart-button'>PROCEED TO PAYMENT</button></Link>
           </div>
         </div>
         
      </div>
      
    </div>
  )}
}

export default Cart
