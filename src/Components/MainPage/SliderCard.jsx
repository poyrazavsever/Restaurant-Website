import React from 'react'

function SliderCard({imageLink, name, desc}) {
  return (
    <div className='pt-12'>
        <div className='bg-primary-100 w-auto h-48 inline-block py-16 px-4 rounded-lg relative'>
            <img src={imageLink} alt="meat-photo" className='w-36 mx-auto'/>
        </div>
    </div>
  )
}

export default SliderCard