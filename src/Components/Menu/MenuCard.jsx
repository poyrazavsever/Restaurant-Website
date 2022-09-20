import React from 'react'

function MenuCard({imageLink,name,desc,fee}) {
  return (

    <div className='relative flex flex-col justify-center h-56 w-48 sm:h-64 sm:w-48 bg-zinc-900 rounded-lg'>

      <img src={imageLink} alt="menuCardPhoto" className='h-24 sm:h-32'/>

      <div className='w-4/5 mx-auto flex flex-col gap-2'>

        <h2 className='text-sm font-medium'>{name}</h2>

        <p className='text-xs'>{desc}</p>

        <h4 className='font-medium'>Fee: <span className='text-secondary'>{fee}</span></h4>

      </div>
        
    </div> 

  )
}

export default MenuCard