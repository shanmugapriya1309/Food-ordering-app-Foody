import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { StoreContext } from '../../Context/Context';

const FoodItem = ({id,name,price,description,image}) => {

    const[itemCount,setItemCount]=useState(0)
    const{cartItems,addToCart,removeFromCart,user}=useContext(StoreContext);
    let validation=()=>{
        if(user === "Sign In"){
            alert("Login to continue...")
        }
        else{
            addToCart(id)
        }

    }

  return (
    <div className='food-items'>
        <div className='image-container'>
            <img className='image'src={image} alt="" />
            {!cartItems[id] ? <img className='add' onClick={validation}src={assets.add_icon_white} alt=''/>:
            <div className='counter'>
                <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)}alt="" />
                <p>{cartItems[id]}</p>
                <img src={assets.add_icon_green}  onClick={()=>addToCart(id)}alt=''/>
            </div>

                
            }
        </div>
        <div className='info'>
            <div className='rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='description'>{description}</p>
            <h5><span>&#8377;</span>{price}</h5>
        </div>
      
    </div>
  )
}

export default FoodItem
