import React from 'react'
import { MainTitle} from "../MainTitle"

function About() {
  return (
    <div className='text-white'>

      <img src="Images/bg-2.jpg" alt="aboutBgPhoto" className='absolute h-screen w-full opacity-10'/>

      <MainTitle center className='mt-36'>About <span>Us</span></MainTitle>

      <div className='flex flex-col gap-4 w-[75%] tracking-wide mx-auto pt-8 text-sm'>
        <p>Hygiene and food safety are ensured in our restaurant with regular expert engineer inspections. Our meat is carefully selected and slaughtered according to halal slaughter and hygiene rules.
        </p>

        <p>
        We hold the title of "The World's Largest Steakhouse". In our restaurant, we are ready to serve you with Japanese Koi fish fed with a bottle, our lodges specially designed for barbecue, and many of our products that we produce and put up for sale.</p>

        <p>
        Breakfast, unique meats, delicious tastes that will remain in your palate in accordance with Turkish and World culture..</p>
      </div>

    </div>
  )
}

export default About