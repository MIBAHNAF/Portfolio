import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { useTheme } from '../contexts/ThemeContext'
import { useScrollAnimation, fadeInUp, fadeInUpHidden, fadeInUpVisible, fadeIn, fadeInHidden, fadeInVisible } from '../hooks/useScrollAnimation'
import { TypewriterEffect } from './ui/typewriter-effect'

function Header() {
  const { isDark } = useTheme()
  
  // Animation refs for different sections
  const [imageRef, imageVisible] = useScrollAnimation();
  const [nameRef, nameVisible] = useScrollAnimation();
  const [titleRef, titleVisible] = useScrollAnimation();
  const [descRef, descVisible] = useScrollAnimation();
  const [buttonsRef, buttonsVisible] = useScrollAnimation();

  // Typewriter words array
  const titleWords = [
    "Software Engineer",
    "IT Systems Specialist", 
    "Oracle Research Fellow",
    "IT Security Analyst"
  ];

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-20 sm:pt-24 lg:pt-0'>
      <div ref={imageRef} className={`${fadeInUp} ${imageVisible ? fadeInUpVisible : fadeInUpHidden}`}>
        <Image src ={assets.profile_img} alt= ''
        className='rounded-full w-32'/>
        </div>
        <h3 ref={nameRef} className={`flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo ${isDark ? 'text-white' : 'text-black'} ${fadeInUp} ${nameVisible ? fadeInUpVisible : fadeInUpHidden}`} style={{ animationDelay: '0.2s' }}>
            Hi I am Mir Ahnaf Ali <Image src={assets.hand_icon} alt=''
        className='w-6'/>
        </h3>
        
        <h1 ref={titleRef} className={`text-3xl sm:text-6xl font-Ovo lg:text-[66px] ${isDark ? 'text-white' : 'text-black'} ${fadeInUp} ${titleVisible ? fadeInUpVisible : fadeInUpHidden}`} style={{ animationDelay: '0.4s' }}>
          <TypewriterEffect 
            words={titleWords}
            className={`${isDark ? 'text-white' : 'text-black'}`}
            cursorClassName={`${isDark ? 'bg-white' : 'bg-black'}`}
          />
        </h1>
        <p ref={descRef} className={`max-w-2xl mx-auto font-Ovo ${isDark ? 'text-gray-300' : 'text-gray-700'} ${fadeInUp} ${descVisible ? fadeInUpVisible : fadeInUpHidden}`} style={{ animationDelay: '0.6s' }}>I am a Full Stack Developer and IT Specialist based on Boston with 3+ years 
            of experience in UMass Boston and Oracle.
        </p>
        <div ref={buttonsRef} className={`flex flex-col sm:flex-row gap-4 mt-4 ${fadeInUp} ${buttonsVisible ? fadeInUpVisible : fadeInUpHidden}`} style={{ animationDelay: '0.8s' }}>
            <a href = "#contact" 
            className='px-10 py-3 border border-gray-500 rounded-full bg-black text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md'
            > contact me <Image src = {assets.right_arrow_white} alt='' className='w-4'/></a>
            <a href = "/SWE_Resume.pdf" download 
            className='px-10 py-3 border rounded-full border-gray-500 bg-white text-black flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md'
            > SWE Resume <Image src = {assets.download_icon} alt='' className='w-4'/></a>
            <a href = "/IT_Specialist Resume.pdf" download 
            className='px-10 py-3 border rounded-full border-gray-500 bg-white text-black flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md'
            > IT Resume <Image src = {assets.download_icon} alt='' className='w-4'/></a>
        </div>
      
    </div>
  )
}

export default Header
