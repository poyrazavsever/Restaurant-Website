import React from 'react'
import { MainTitle } from '../MainTitle'
import { galleryCard } from '../../Cards'

const Gallery = () => {
  return (
    <div id='gallery'>

        <MainTitle center>Our <span>Gallery</span></MainTitle>

        <div className='sm:flex sm:flex-wrap gap-8'>
            {galleryCard.map(card => (
                <img src={card.link} key={card.link} alt="cardImage" 
                className='w-56 h-72 my-12 rounded-md mx-auto transition-all duration-300 hover:grayscale hover:scale-105'/>
            ))}
        </div>

    </div>
  )
}

export default Gallery