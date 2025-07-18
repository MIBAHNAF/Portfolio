import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'

function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-20 sm:pt-24 lg:pt-0'>
      <div>
        <Image src ={assets.profile_img} alt= ''
        className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo' >
            Hi I am Mir Ahnaf Ali <Image src={assets.hand_icon} alt=''
        className='w-6'/>
        </h3>
        
        <h1 className='text-3xl sm:text-6xl font-Ovo  lg:text-[66px]'>Software Engineer and IT Specialist</h1>
        <p className='max-w-2xl mx-auto font-Ovo'>I am a Full Stack Developer and IT Specialist based on Boston with 3+ years 
            of experience in UMass Boston and Oracle.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
            <a href = "#contact" 
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md'
            > contact me <Image src = {assets.right_arrow_white} alt='' className='w-4'/></a>
            <a href = "/SWE_Resume.pdf" download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md'
            > SWE Resume <Image src = {assets.download_icon} alt='' className='w-4'/></a>
            <a href = "/IT_Specialist Resume.pdf" download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md'
            > IT Resume <Image src = {assets.download_icon} alt='' className='w-4'/></a>
        </div>
      
    </div>
  )
}

export default Header
