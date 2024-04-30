import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                {/* <img src={assets.logo} alt="" /> */}
                <h1 className='foody'>FOODY</h1>
                <p>Ordering food has never been easier. With Foody, you can place orders with just a few taps, whether you're dining in, opting for pickup, or craving delivery straight to your doorstep. Say goodbye to long wait times and hello to culinary convenience.</p>
                <div className='footer-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className='footer-content-center'>
                <h3>COMPANY</h3>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h3>GET IN TOUCH</h3>
                <h5>9626343844</h5>
                <h5>contactfoody@gmail.com</h5>
            </div>

        </div>
        <hr id='hr' />

        <span id='copyright'>Copyright2024&copy;Foody.com-All Right Reserved</span>
        
      
    </div>
  )
}

export default Footer
