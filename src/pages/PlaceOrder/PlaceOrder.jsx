import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/Context'
import { Link } from 'react-router-dom'
import { useRef } from 'react'


const PlaceOrder = () => {

   let emailRef=useRef();
  let cardRef=useRef();
  let dateRef=useRef();
  let cvcRef=useRef();
  let nameRef=useRef();
  let countryRef=useRef();
  const[active,setActive]=useState(false);
  let handleSubmit=(e)=>{
    e.preventDefault();
    let emailVal=emailRef.current.value;
    let cardVal=cardRef.current.value;
    let dateVal=dateRef.current.value;
    let cvcValue=cvcRef.current.value;
    let nameValue=nameRef.current.value;
    let countryValue=countryRef.current.value;
    console.log({emailVal,cardVal,dateVal,cvcValue,nameValue,countryValue});
    setActive(true);
  }
  
  const{food_list,cartItems,getTotalCartAmount}=useContext(StoreContext)
  
  return (
    <div className='pay'>
      <div className='right'>
        <h1>Pay with card</h1>
        <form action="" className='form' onSubmit={handleSubmit} >
          <label htmlFor="email">Email</label>
             <input type="email"  ref={emailRef} id='email' className='input' required/>
          <label htmlFor="card">Card information</label>
             <input type="number" id='card' ref={cardRef} className='input2' required/>
             <div>
             <input type="number" placeholder='MM/YY' required ref={dateRef} className='input1' required />
             <input type="number" placeholder='CVC'  required ref={cvcRef} className='input1' required/>
             </div>
          <label htmlFor="name">Cardholder name</label>
             <input type="text"  id="name" className='input' ref={nameRef} required/>
          <label htmlFor="country">Country or region</label>
             <input type="text" id='country' className='input' ref={countryRef} required/>
          <input type="submit" value="Pay" className='input' id='input'/>
        </form>
      </div>

      <div className='left'>
        <div className='pay-course'>
          <h5>Pay Course</h5>
          <h1><span>&#8377;</span>{getTotalCartAmount()}</h1>

          
            
         {food_list.map((item,index)=>{
           
          
          if(cartItems[item._id]>0){
            return(
              <>
               <div className='list'>
                  <div className='items'>
                    <p>{item.name}</p>
                    <p><span>&#8377;</span>{item.price*cartItems[item._id]}</p>
                 </div>
                 <div className='quantity'>
                    <p>Qty<span>&nbsp;</span>{cartItems[item._id]}</p>
                    <p><span>&#8377;</span>{item.price}<span>&nbsp;</span>each</p>
                 </div>
               </div>
              <hr />
              </>
              
            )
          }
        })} 

      <Link to="/placed"> <button disabled={!active} className="payment" id={active ? "active":""}>Confirm Payment</button></Link>
    
          
        </div>

      </div>
     </div>
     

     

  )
}

export default PlaceOrder
