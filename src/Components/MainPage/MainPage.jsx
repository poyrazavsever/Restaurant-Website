import React from 'react'
import { MainTitle } from '../MainTitle'

function MainPage() {
  return (
    <div>
      <img src="Images/bg-1.jpg" alt="MainPageBg" className='w-full h-36 bg-cover opacity-50' />

      <div className='z-50 w-3/4 mx-auto flex flex-col justify-center items-start'>

        <MainTitle top>Pavori <span>Meat</span></MainTitle>

        <p className='text-sm tracking-wider'>Cafe & Bar, which has not lost its popularity since 2020, serves you in its 2-storey venue in the center of Beylikdüzü. We are waiting for you to enjoy music and entertainment in a peaceful, comfortable and safe environment.
        You can spend nice hours with the view of the city at Cafe & Bar, the most popular place of the region. We have daytime activity areas for your events. We are here with the unique tastes of world and Mediterranean cuisine.</p> 
 
      </div>

    </div> 
  )
}

export default MainPage