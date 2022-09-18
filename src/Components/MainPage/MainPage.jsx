import React from 'react'
import { MainTitle } from '../MainTitle'
import Healt from './Healt';
import OurServices from './OurServices';
import Gallery from './Gallery';


function MainPage() {
  return (
    <div className='w-full'>

      <img src="Images/bg-1.jpg" alt="MainPageBg" className='w-full h-72 opacity-50' />

      <div className='z-50 w-3/4 mx-auto flex flex-col justify-center items-start'>

        <MainTitle top>Pavori <span>Meat</span></MainTitle>

        <p className='text-sm tracking-wider'>Cafe & Bar, which has not lost its popularity since 2020, serves you in its 2-storey venue in the center of Beylikdüzü. We are waiting for you to enjoy music and entertainment in a peaceful, comfortable and safe environment.
        You can spend nice hours with the view of the city at Cafe & Bar, the most popular place of the region. We have daytime activity areas for your events. We are here with the unique tastes of world and Mediterranean cuisine.</p>

        <img src="Images/meat2.png" alt="meat1" className='pt-12 w-96' />

      </div>

      <Healt />

      <OurServices />

      <Gallery />



      <p className='w-full text-center block text-sm pb-6 text-zinc-300'>2022 © All rights reserved by Pavori Meat</p>


      

    </div>
  )
}

export default MainPage