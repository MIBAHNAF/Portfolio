import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { assets, infoList, projects, softwareData, frameworkData, projectsData } from '../../assets/assets';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation, fadeInUp, fadeInUpHidden, fadeInUpVisible, fadeIn, fadeInHidden, fadeInVisible, slideInLeft, slideInLeftHidden, slideInLeftVisible, slideInRight, slideInRightHidden, slideInRightVisible } from '../hooks/useScrollAnimation';

// Detailed language information for hover card
const languagesDetails = [
  { name: 'Python', years: 3, level: 'Proficient', progress: 85 },
  { name: 'JavaScript', years: 2, level: 'Proficient', progress: 85 },
  { name: 'Java', years: 1, level: 'Intermediate', progress: 70 },
  { name: 'C++', years: 1, level: 'Intermediate', progress: 70 },
  { name: 'C#', years: 1, level: 'Intermediate', progress: 70 },
  { name: 'C', years: 1, level: 'Intermediate', progress: 70 },
  { name: 'SQL', years: 1, level: 'Beginner', progress: 50 },
];

// User images array for rotation
const userImages = [
  assets.user_image,
  assets.user1,
  assets.user2,
  assets.user3
];

function About() {
  const { isDark } = useTheme();
  const [activePopover, setActivePopover] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  // Start with first image to avoid hydration mismatch
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Animation refs
  const [titleRef, titleVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();
  const [descRef, descVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();

  // Set random image after hydration to avoid SSR mismatch
  useEffect(() => {
    setIsHydrated(true);
    const randomIndex = Math.floor(Math.random() * userImages.length);
    setCurrentImageIndex(randomIndex);
  }, []);

  // Image rotation effect
  useEffect(() => {
    if (!isHydrated) return; // Don't start rotation until hydrated
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % userImages.length
        );
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 60000); // Change every 60 seconds (1 minute)

    return () => clearInterval(interval);
  }, [isHydrated]);
  
  const handlePopoverToggle = (popoverName) => {
    setActivePopover(activePopover === popoverName ? null : popoverName);
  };

  const handleMouseEnter = (popoverName) => {
    if (window.innerWidth >= 1024) {
      setActivePopover(popoverName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActivePopover(null);
    }
  };

  const isPopoverOpen = (popoverName) => {
    return activePopover === popoverName;
  };

  const handleItemClick = (itemName) => {
    setClickedItem(clickedItem === itemName ? null : itemName);
    // Auto-hide after 2 seconds
    if (clickedItem !== itemName) {
      setTimeout(() => setClickedItem(null), 2000);
    }
  };

  return (
    <div id='about' className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-10 scroll-mt-20 relative z-40'>
      <div ref={titleRef} className={`${fadeInUp} ${titleVisible ? fadeInUpVisible : fadeInUpHidden}`}>
        <h4 className={`text-center mb-2 text-base sm:text-lg font-Ovo ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Introduction</h4>
        <h2 className={`text-center text-3xl sm:text-4xl md:text-5xl font-Ovo ${isDark ? 'text-white' : 'text-gray-800'}`}>
          About Me
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 my-10 sm:my-16 lg:my-20 max-w-7xl mx-auto">
        <div ref={imageRef} className={`w-48 sm:w-64 md:w-80 aspect-[3/4] rounded-3xl max-w-none relative flex-shrink-0 overflow-hidden ${slideInLeft} ${imageVisible ? slideInLeftVisible : slideInLeftHidden}`}>
          <div className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <Image 
              src={userImages[currentImageIndex]} 
              alt="user" 
              fill 
              className='object-cover rounded-3xl' 
              priority
            />
          </div>
        </div>

        <div ref={descRef} className={`flex-1 w-full ${slideInRight} ${descVisible ? slideInRightVisible : slideInRightHidden}`}>
          <p className={`mb-6 sm:mb-8 lg:mb-10 max-w-2xl font-Ovo text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Aspiring Software Engineer with a 3.96 GPA from UMass Boston, driven by curiosity and a love for clean, purposeful code. 
          I build full-stack web apps using JavaScript, React, Tailwind, and Supabase. 
          From automating attendance to crafting dynamic frontends, I bring ideas to life. Disappointment is not an option—progress always is.
          </p>
          <div ref={infoRef} className={`${fadeInUp} ${infoVisible ? fadeInUpVisible : fadeInUpHidden}`}>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap gap-4 sm:gap-6 max-w-2xl items-stretch relative'>
            {infoList.map(({icon,iconDark,title,description},index)=>{
              if(title === 'Languages') {
                return (
                  <li
                    key={index}
                    className={`relative border-[0.5px] ${isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-white'} rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-500 hover:scale-105 h-full ${isPopoverOpen('Languages') ? 'z-30' : 'z-10'}`}
                    onMouseEnter={() => handleMouseEnter('Languages')}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handlePopoverToggle('Languages')}
                  >
                    {/* Collapsed (default) state */}
                    <div>
                      <Image src={isDark ? iconDark : icon} alt={title} className='w-6 sm:w-7 mt-2 sm:mt-3' />
                      <h3 className={`my-2 sm:my-4 font-semibold text-sm sm:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                      <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
                    </div>

                    {/* Popover for detailed info */}
                    {isPopoverOpen('Languages') && (
                      <div
                        className={`absolute left-1/2 top-full z-[99999] w-72 -translate-x-1/2 mt-4 ${isDark ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-gray-200'} backdrop-blur-md rounded-xl p-6 shadow-2xl border animate-fade-in`}
                        style={{ minWidth: '18rem' }}
                      >
                        <h3 className={`text-2xl font-bold mb-6 text-center font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                        <ul className='space-y-6'>
                          {languagesDetails.map(({name, years, level, progress}) => (
                            <li key={name} className='text-sm'>
                              <div className='flex items-center justify-between mb-1'>
                                <span className={`font-semibold font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{name} <span className={`font-normal text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>({years} yr{years > 1 ? 's' : ''})</span></span>
                                <span className={`text-xs italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{level}</span>
                              </div>
                              <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                                <div
                                  className={
                                    progress >= 80 ? 'bg-green-500 h-2 rounded-full' : progress >= 60 ? 'bg-yellow-400 h-2 rounded-full' : 'bg-red-400 h-2 rounded-full'
                                  }
                                  style={{width: `${progress}%`}}
                                />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                )
              }

              if(title === 'Education') {
                return (
                  <li
                    key={index}
                    className={`relative border-[0.5px] ${isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-white'} rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-500 hover:scale-105 h-full ${isPopoverOpen('Education') ? 'z-30' : 'z-10'}`}
                    onMouseEnter={() => handleMouseEnter('Education')}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handlePopoverToggle('Education')}
                  >
                    {/* Collapsed (default) state */}
                    <div>
                      <Image src={isDark ? iconDark : icon} alt={title} className='w-6 sm:w-7 mt-2 sm:mt-3' />
                      <h3 className={`my-2 sm:my-4 font-semibold text-sm sm:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                      <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
                    </div>
                    {/* Popover for Education */}
                    {isPopoverOpen('Education') && (
                      <div className={`absolute left-1/2 top-full z-[99999] w-80 -translate-x-1/2 mt-4 ${isDark ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-gray-200'} backdrop-blur-md rounded-xl p-6 shadow-2xl border animate-fade-in flex flex-col items-center text-center`}>
                        <Image src={assets.umass_logo} alt='UMass Boston Logo' className='w-16 mb-4' />
                        <h3 className={`text-xl font-bold font-Ovo mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                        <div className={`font-semibold mb-1 font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>University of Massachusetts Boston</div>
                        <div className={`mb-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Expected Graduation: <span className={`font-bold font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>May 2026</span></div>
                        <div className={`mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Computer Science, Bachelor of Science</div>
                        <div className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>GPA: <span className={`font-bold font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>3.962</span></div>
                        <button
                          onClick={() => {
                            document.getElementById('Academics')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`px-6 py-2 border rounded-full ${isDark ? 'border-gray-500 bg-gray-700/80 text-gray-200 hover:bg-gray-600/80' : 'border-gray-500 bg-white/80 text-gray-700 hover:bg-gray-50/80'} flex items-center gap-2 backdrop-blur-sm transition-all duration-300 w-fit mx-auto mt-2 shadow-sm hover:scale-105 hover:shadow-md`}
                        >
                          More Details
                          <Image src={isDark ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-4' />
                        </button>
                      </div>
                    )}
                  </li>
                )
              }

              if(title === 'Projects') {
                return (
                  <li
                    key={index}
                    className={`relative border-[0.5px] ${isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-white'} rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-500 hover:scale-105 h-full ${isPopoverOpen('Projects') ? 'z-30' : 'z-10'}`}
                    onMouseEnter={() => handleMouseEnter('Projects')}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handlePopoverToggle('Projects')}
                  >
                    {/* Collapsed (default) state */}
                    <div>
                      <Image src={isDark ? iconDark : icon} alt={title} className='w-6 sm:w-7 mt-2 sm:mt-3' />
                      <h3 className={`my-2 sm:my-4 font-semibold text-sm sm:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                      <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
                    </div>
                    {/* Popover for Projects */}
                    {isPopoverOpen('Projects') && (
                      <div className={`absolute left-1/2 top-full z-[99999] w-96 -translate-x-1/2 mt-4 ${isDark ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-gray-200'} backdrop-blur-md rounded-xl p-6 shadow-2xl border animate-fade-in`}>
                        <h3 className={`text-2xl font-bold mb-4 text-center font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Projects</h3>
                        <ul className='space-y-3'>
                          {projectsData.map((proj, i) => (
                            <li
                              key={proj.name}
                              className={`flex items-center justify-between gap-2 p-2 rounded-lg transition-all duration-300 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} hover:scale-105 hover:shadow-md cursor-pointer`}
                              onClick={() => {
                                // First scroll to projects section
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                
                                // Then wait a bit and trigger navigation to specific card
                                setTimeout(() => {
                                  // Create a custom event to navigate to specific project card
                                  const event = new CustomEvent('navigateToProject', {
                                    detail: { projectIndex: i }
                                  });
                                  window.dispatchEvent(event);
                                }, 800); // Wait for scroll to complete
                              }}
                            >
                              <div className='flex flex-col items-start'>
                                <span className={`font-semibold font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{proj.name}</span>
                                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{proj.type} &bull; {proj.hours} hrs</span>
                              </div>
                              <div className='flex gap-2 items-end'>
                                {proj.languages.map(lang => (
                                  <Image
                                    key={lang}
                                    src={assets[lang]}
                                    alt={lang}
                                    width={lang === 'csharp' ? 32 : 24}
                                    height={lang === 'csharp' ? 32 : 24}
                                    title={lang.toUpperCase()}
                                    style={lang === 'csharp' ? { marginBottom: '-4px'} : {}}
                                  />
                                ))}
                              </div>
                            </li>
                          ))}
                        </ul>
                     
                       
                      </div>
                    )}
                  </li>
                )
              }

              // Default card rendering for other items
              return (
                <li
                  key={index}
                  className={`border-[0.5px] ${isDark ? 'border-gray-600 bg-gray-800 hover:bg-gray-700' : 'border-gray-400 bg-white hover:bg-lightHover'} rounded-xl p-4 sm:p-6 cursor-pointer hover:-translate-y-1 duration-500 h-full`}>
                  <Image src={isDark ? iconDark : icon} alt={title} className='w-6 sm:w-7 mt-2 sm:mt-3' />
                  <h3 className={`my-2 sm:my-4 font-semibold text-sm sm:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
                </li>
              )
            })}
            </ul>
            <h4 className={`my-4 sm:my-6 font-Ovo text-sm sm:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Softwares</h4>
            <ul className='flex flex-wrap items-center gap-2 sm:gap-3 md:gap-5'>
              {softwareData.map((software, index) => (
                <li
                  key={index}
                  className={`relative flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border ${isDark ? 'border-gray-600 bg-gray-800 hover:bg-gray-700' : 'border-gray-400 bg-white hover:bg-gray-50'} rounded-lg cursor-pointer hover:-translate-y-1 duration-500 group`}
                  onClick={() => handleItemClick(`software-${index}`)}
                >
                  <Image src={software.icon} alt={software.title} className='w-4 sm:w-5 md:w-7' />
                  <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap z-10 transition-opacity duration-200 pointer-events-none ${
                    clickedItem === `software-${index}` ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    {software.title}
                  </span>
                </li>
              ))}
            </ul>
            <h4 className={`my-4 sm:my-6 font-Ovo text-sm sm:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Frameworks</h4>
            <ul className='flex flex-wrap items-center gap-2 sm:gap-3 md:gap-5 my-2'>
              {frameworkData.map((framework, index) => (
                <li
                  key={index}
                  className={`relative flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border ${isDark ? 'border-gray-600 bg-gray-800 hover:bg-gray-700' : 'border-gray-400 bg-white hover:bg-gray-50'} rounded-lg cursor-pointer hover:-translate-y-1 duration-500 group`}
                  onClick={() => handleItemClick(`framework-${index}`)}
                >
                  <Image src={framework.icon} alt={framework.title} className='w-4 sm:w-5 md:w-7' />
                  <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap z-10 transition-opacity duration-200 pointer-events-none ${
                    clickedItem === `framework-${index}` ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    {framework.title}
                  </span>
                </li>
              ))}
            </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
