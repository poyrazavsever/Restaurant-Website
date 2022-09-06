import React from 'react'
import SliderCard from './SliderCard'

function Slider() {
    return (
        <div className='flex justify-around items-center gap-7'>
            <SliderCard imageLink="Images/meat2.png" />
            <SliderCard imageLink="Images/meat3.png" />
        </div>


    )
}

export default Slider