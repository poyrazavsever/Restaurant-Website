import React from 'react'
import {NavLink} from "react-router-dom"

function DesktopNavbar() {
    return (
        <>

            <section className='w-screen h-20 bg-transparent border-b border-secondary flex justify-end gap-12 px-16 items-center'>


                <ul className='flex gap-8 text-sm'>

                    <li>
                        <NavLink to="/" className='lg-nav-item'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='lg-nav-item'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" className='lg-nav-item'>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/#services" className='lg-nav-item'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/#gallery" className='lg-nav-item'>Gallery</NavLink>
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