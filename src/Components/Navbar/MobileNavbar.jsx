import React, { useState } from 'react'
import { BiMenuAltRight, BiRestaurant, BiImages } from "react-icons/bi"
import { AiFillInfoCircle, AiOutlineClose, AiFillHome, AiOutlinePaperClip } from "react-icons/ai"
import {NavLink} from "react-router-dom"

function MobileNavbar() {

    const [menuStyle, setMenuStyle] = useState("hidden");

    const openMenuBtn = () => {
        menuStyle === "hidden" ? setMenuStyle("visible") : setMenuStyle("hidden");
    }

    return (

        <>

            <section className="w-screen h-20 bg-transparent border-b border-secondary flex justify-end px-8 items-center">

                <button className='absolute top-11 m-3 bg-primary w-12 h-12' onClick={openMenuBtn}>
                    <BiMenuAltRight className='w-full h-full text-secondary' />
                </button>

            </section>

            <img src="Images/Logo1.png" alt="mainLogo" className='absolute w-36 h-36 top-0' />

            <div className={`w-full h-screen absolute flex justify-center items-center top-0 text-center transition-all duration-300 backdrop-blur z-20 ${menuStyle === "hidden" ? "translate-x-full" : "translate-x-0"}`}>

                <button className='absolute top-14 right-10' onClick={openMenuBtn}>
                    <AiOutlineClose className=' w-12 h-12 text-secondary' />
                </button>


                <ul className="flex gap-12 flex-col text-left">

                    <li className='sm-nav-item' onClick={openMenuBtn}>
                        <AiFillHome className="w-5 h-5" />
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li className='sm-nav-item' onClick={openMenuBtn}>
                        <AiFillInfoCircle className="w-5 h-5" />
                        <NavLink to="/about">About</NavLink>
                    </li>

                    <li className='sm-nav-item' onClick={openMenuBtn}>
                        <BiRestaurant className="w-5 h-5" />
                        <NavLink to="/menu">Menu</NavLink>
                    </li>

                    <li className='sm-nav-item' onClick={openMenuBtn}>
                        <AiOutlinePaperClip className="w-5 h-5 " />
                        <a href="/#services">Services</a>
                    </li>

                    <li className='sm-nav-item' onClick={openMenuBtn}>
                        <BiImages className="w-5 h-5 " />
                        <a href="/#gallery">Gallery</a>
                    </li>

                </ul>

            </div>


            <div className='h-10 w-full bg-primary'></div>

        </>


    )
}

export default MobileNavbar