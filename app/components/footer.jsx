import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/MIBAHNAF',
      icon: assets.git, // Using git icon for GitHub
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mirahnafali/',
      icon: null, // We'll need to add a LinkedIn icon or use text
    },
    {
      name: 'Discord',
      url: '#', // Discord doesn't have direct profile links, using placeholder
      handle: 'banglaguy',
      icon: null,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ahnafbanglaguy?igsh=bDNnZnVyZDlvYzht&utm_source=qr',
      icon: null,
    }
  ];

  return (
    <footer 
      className='w-full px-3 sm:px-6 md:px-8 lg:px-[12%] py-6 sm:py-8 md:py-12 bg-white'
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-6 md:mb-8">
          {/* Logo - Made bigger */}
          <div className="mb-3 sm:mb-4 md:mb-6">
            <Image 
              src={assets.logo} 
              alt="Portfolio Logo" 
              className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto"
            />
          </div>
          
          {/* Email */}
          <div className="w-max flex items-center gap-1.5 sm:gap-2 mx-auto mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base">
            <Image src={assets.mail_icon} alt="" className="w-4 sm:w-5 md:w-6" />
            mirahnafali717@gmail.com
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-4 sm:mb-6 md:mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6">
          {/* Copyright */}
          <div className="text-gray-600 text-xs sm:text-sm font-Ovo order-2 sm:order-1 text-center sm:text-left">
            © {currentYear} Ahnaf Ali. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 order-1 sm:order-2 flex-wrap justify-center">
            {/* GitHub */}
            <a
              href="https://github.com/MIBAHNAF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-xs sm:text-sm font-Ovo hover:scale-110 transform"
            >
              GitHub
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mirahnafali/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-xs sm:text-sm font-Ovo hover:scale-110 transform"
            >
              LinkedIn
            </a>
            
            {/* Discord */}
            <div className="text-gray-600 text-xs sm:text-sm font-Ovo">
              <span className="text-gray-500">Discord:</span>
              <span className="ml-1 font-medium">banglaguy</span>
            </div>
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ahnafbanglaguy?igsh=bDNnZnVyZDlvYzht&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-xs sm:text-sm font-Ovo hover:scale-110 transform"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
