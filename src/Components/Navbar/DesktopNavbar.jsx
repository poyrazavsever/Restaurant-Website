import React from 'react'

function DesktopNavbar() {
    return (
        <>

            <section className='w-screen h-20 bg-transparent border-b border-secondary flex justify-end gap-12 px-16 items-center'>


                <ul className='flex gap-8 text-sm'>
                    <li>
                        <a href="#about" className='lg-nav-item'>About Us</a>
                    </li>
                    <li>
                        <a href="#menu" className='lg-nav-item'>Menu</a>
                    </li>
                    <li>
                        <a href="#services" className='lg-nav-item'>Services</a>
                    </li>
                    <li>
                        <a href="#gallery" className='lg-nav-item'>Gallery</a>
                    </li>
                </ul>


                <button className='uppercase tracking-widest text-sm px-2 py-1 bg-secondary transition-all duration-300 hover:bg-red-500'>Feast Reservation</button>

            </section>


            <img src="Images/Logo1.png" alt="mainLogo" className='absolute w-36 h-36 top-0 left-6' />

            <div className='h-10 w-full bg-primary'></div>
            
        </>
    )
}

export default DesktopNavbar