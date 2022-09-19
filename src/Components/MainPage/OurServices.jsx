import React from 'react'
import { MainTitle } from '../MainTitle'
import ServicesCard from './ServicesCard'
import { servicesCard } from '../../Cards'

function OurServices() {
  return (

    <div className='w-full mx-auto' id='services'>
        <MainTitle center>Our <span>Services</span></MainTitle>

        <div className='sm:flex sm:flex-wrap w-full mx-auto'>

            {servicesCard.map(card => (
                <ServicesCard key={card.title} imageLink={card.link} title={card.title} text={card.text} /> 
            ))}

        </div>
    </div>

  )
}

export default OurServices