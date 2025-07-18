import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'


const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const  sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50 ${isScrolled ? 'bg-white/50 backdrop-blur-lg shadow-sm' : ''}`}>
        <div className='absolute left-5 lg:left-8 xl:left-[8%]'>
          <a href="#top">
            <Image src ={assets.logo} alt="" className='w-24 sm:w-28 md:w-32 lg:w-28 xl:w-36 cursor-pointer mr-4 sm:mr-8 lg:mr-10 xl:mr-14'/>
          </a>
        </div>

        <ul className={`hidden lg:flex items-center gap-8 rounded-full px-12 py-3 transition-colors duration-300 ${isScrolled ? '' : 'bg-white/80 shadow-sm'}`}>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About</a></li>
            <li><a className='font-Ovo' href="#experiences">Experiences</a></li>
            <li><a className='font-Ovo' href="#Academics">Academics</a></li>
            <li><a className='font-Ovo' href="#projects">Projects</a></li>
            <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>
        
        <div className='absolute right-5 lg:right-8 xl:right-[8%] flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt="" className='w-6' />
          </button>
          <a href="#contact" className='hidden xl:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 transition-all duration-300 hover:scale-105 hover:shadow-md'>
            Contact <Image src={assets.arrow_icon} alt="" className='w-3 font-Ovo' />
          </a>

        <button className='block lg:hidden ml-3' onClick = {openMenu}>
             <Image src={assets.menu_black} alt="" className='w-6' />
        </button>
        </div>
        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='flex lg:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
          <div className='absolute right-6 top-6' onClick = {closeMenu}>
            <Image src={assets.close_black} alt="" className='w-5 cursor-pointer' />
          </div>
            <li><a className='font-Ovo' onClick = {closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick = {closeMenu} href="#about">About</a></li>
            <li><a className='font-Ovo' onClick = {closeMenu} href="#experiences">Experiences</a></li>
            <li><a className='font-Ovo' onClick = {closeMenu} href="#Academics">Academics</a></li>
            <li><a className='font-Ovo' onClick = {closeMenu} href="#projects">Projects</a></li>
            <li><a className='font-Ovo' onClick = {closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}
export default Navbar

