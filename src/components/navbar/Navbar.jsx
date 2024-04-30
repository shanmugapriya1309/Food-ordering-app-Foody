import React, { useContext } from 'react'
import {Link as ScrollLink} from 'react-scroll'
import { useState } from 'react'
 import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/Context'
import { FaUser } from "react-icons/fa";


const Navbar = ({setShowLogin}) => {
    const{getTotalCartAmount,user}=useContext(StoreContext)
    
    const[menu,setMenu]=useState("menu");
  return (
    <div className='navbar'>
        {/* <Link to='/'><img src={assets.logo} alt="" /></Link> */}
        <h1>FOODY</h1>
        <ul className='navbar-menu'>
           <ScrollLink to='home'><Link to='/'><li onClick={()=>setMenu("home")}className={menu=="home" ? "active": ""}>home</li></Link></ScrollLink>
           <ScrollLink to='explore-menu'> <li onClick={()=>setMenu("menu")}className={menu=="menu" ? "active": ""}>menu</li></ScrollLink> 
            {/* <li onClick={()=>setMenu("mobile-app")}className={menu=="mobile-app" ? "active": ""}>mobile-app</li> */}
           <ScrollLink to='footer'> <li onClick={()=>setMenu("contact-us")}className={menu=="contact-us" ? "active": ""}>contact us</li></ScrollLink>
            
        </ul>
        <div className='icons'>
            {/* <img className='search-icon1' src={assets.search_icon} alt="" /> */}
            <div className='search-icon'>
               <Link to='/cart'><img className="cart-icon" src={assets.basket_icon} alt="" /></Link >
               <div className={getTotalCartAmount()=== 0?"":"dot"}></div>
            </div>
            {/* <button onClick={()=>setShowLogin(true)}>{user}</button> */}
            {(user === "Sign In") ? <button onClick={()=>setShowLogin(true)}>{user}</button> : <button className="login-user" onClick={()=>setShowLogin(true)}><FaUser className='faUser'/>{user}</button> }
        </div>
        
    </div>
  )
}

export default Navbar
