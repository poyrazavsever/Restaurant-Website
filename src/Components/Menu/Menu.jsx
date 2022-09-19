import React, {useState} from 'react'
import { MainTitle } from "../MainTitle" 
import MenuCard from './MenuCard'
import {mainCourse, sweet, drink, alcohol} from "../../Cards"

function Menu() {

  const [menuType, setMenuType] = useState("mainCourse")

  return (

    <div> 

        <MainTitle center className='mt-36'>Our <span>Menu</span></MainTitle>

        <div className='flex gap-4 justify-center mt-3'>

          <button className='menu-link' onClick = {() => setMenuType("mainCourse")}>Main Course</button>
          <button className='menu-link' onClick = {() => setMenuType("sweet")}>Sweet</button>
          <button className='menu-link' onClick = {() => setMenuType("drink")}>Drink</button>
          <button className='menu-link' onClick = {() => setMenuType("alcohol")}>Alcohol</button>

        </div>

                  
          <div className={`menu-card ${menuType === "mainCourse" ? "" : "hidden"}`}>

    {mainCourse.map((card) => {
      return (
        <MenuCard key={card.link} imageLink={card.link} />
      )
      
    })}

          </div>

          <div className={`menu-card ${menuType === "sweet" ? "" : "hidden"}`}>

            {sweet.map((card) => {
              return (
                <MenuCard key={card.link} imageLink={card.link} />
              )
              
            })}

          </div>

          <div className={`menu-card ${menuType === "drink" ? "" : "hidden"}`}>

            {drink.map((card) => {
              return (
                <MenuCard key={card.link} imageLink={card.link} />
              )
              
            })}

          </div>

          <div className={`menu-card ${menuType === "alcohol" ? "" : "hidden"}`}>

            {alcohol.map((card) => {
              return (
                <MenuCard key={card.link} imageLink={card.link} />
              )
              
            })}

          </div>

    </div>

  )
}

export default Menu