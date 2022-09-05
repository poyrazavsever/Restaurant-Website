import React, { useRef, useState } from 'react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs"

function Slider() {

    const sliderImage = useRef();
    const [imageState, setImageState] = useState("")
    const [indexState, setIndexState] = useState(0);

    


    

    const sliderPrev = () => {
        setIndexState(indexState - 1)
        setImageState(imageData[indexState])
        console.log(imageState)
    }

    const sliderNext = () => {
        setImageState(indexState + 1)
        setImageState(imageData[indexState])
        console.log(imageState)
    }




    return (
        <div className='absolute top-0 left-0 h-80 z-0 w-full '>

            <img src="Images/Slider/bg-1.jpg" alt="sliderImage" className='w-full h-full opacity-30' ref={sliderImage} />

            <div className='flex justify-between items-center relative -top-24 px-8'>
                <button onClick={sliderPrev}>
                    <BsFillArrowLeftSquareFill className='sliderBtn' />
                </button>

                <button onClick={sliderNext}>
                    <BsFillArrowRightSquareFill className='sliderBtn' />
                </button>
            </div>


        </div>
    )
}

export default Slider