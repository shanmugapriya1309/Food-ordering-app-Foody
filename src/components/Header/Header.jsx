import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your <br />favourite food here</h2>
            <p>Browse a diverse selection of your favorite dishes and <br />enjoy seamless ordering for a delightful dining experience.</p>
           <Link to="explore-menu"> <button className='view-menu'>View Menu</button></Link> 

        </div>
        
      
    </div>
  )
}

export default Header
