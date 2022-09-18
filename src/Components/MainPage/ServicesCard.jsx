import React from 'react'

function ServicesCard({imageLink, title, text}) {
  return (
    <div className='w-64 mx-auto relative bg-zinc-700 cursor-pointer rounded-lg my-12 transition-all duration-300 after:content-["Reservation"] after:absolute after:top-12 after:left-12 after:font-medium after:text-2xl after:text-white after:opacity-0 hover:after:opacity-100 group hover:bg-zinc-900'>

        <div className='w-full rounded-t-lg'>
            <img src={imageLink} alt="cardPhoto" className='w-full max-h-36 rounded-t-lg group-hover:grayscale' />
        </div>

        <div>
            <h3 className='p pl-6 pt-3 pb-3 text-lg'>{title}</h3>
            <p className='px-6 pb-6 text-sm'>{text}</p>
        </div>

    </div>
  )
}

export default ServicesCard