import React from 'react'

function MenuCard({imageLink}) {
  return (

    <div className='relative flex justify-center'>
    
        <div className='h-48 w-36 bg-zinc-900 rounded-lg'></div>

        <img src={imageLink} alt="menuCardPhoto" className='top-6 absolute h-36'/>

    </div> 

  )
}

export default MenuCard