import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Dive into a world of flavors,Browse through food menus with ease, discovering mouthwatering dishes, tantalizing descriptions, 
        and vibrant food photography that'll leave you craving for more.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
              return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All": item.menu_name)}key={index} className='explore-menu-list-item'>
                  <img className={category === item.menu_name ? "active" : ""}src={item.menu_image} alt="" />
                  <p>{item.menu_name}</p>
                </div>

              )
            })}
        </div>
        <br />
        <br />
        <hr />

      
    </div>
  )
}

export default ExploreMenu
