import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { assets, infoList } from '../../assets/assets';

// Detailed language information for hover card
const languagesDetails = [
  { name: 'Python', years: 3, level: 'Proficient', progress: 85 },
  { name: 'JavaScript', years: 2, level: 'Proficient', progress: 85 },
  { name: 'Java', years: 1, level: 'Intermediate', progress: 70 },
  { name: 'SQL', years: 1, level: 'Intermediate', progress: 70 },
  { name: 'VBA', years: 1, level: 'Intermediate', progress: 70 },
  { name: 'C', years: 1, level: 'Beginner', progress: 50 },
];

function About() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const langCardRef = useRef(null);
  const [openPopover, setOpenPopover] = useState(null);

  return (
    <div id='about' className='w-full px-[12%] py-10
    scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-16 my-20 max-w-7xl mx-auto">
        <div className='w-64 sm:w-80 aspect-[3/4] rounded-3xl max-w-none relative flex-shrink-0'>
          <Image src={assets.user_image} alt="user" fill className='object-cover rounded-3xl' />
        </div>

        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
          Aspiring Software Engineer with a 3.96 GPA from UMass Boston, driven by curiosity and a love for clean, purposeful code. 
          I build full-stack web apps using JavaScript, React, Tailwind, and Supabase. 
          From automating attendance to crafting dynamic frontends, I bring ideas to life. Disappointment is not an option—progress always is.
          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 flex-wrap gap-6 max-w-2xl items-stretch relative'>
            {infoList.map(({icon,iconDark,title,description},index)=>{
              if(title === 'Languages') {
                return (
                  <li
                    key={index}
                    className='relative border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 h-full'
                    ref={langCardRef}
                    onMouseEnter={() => setPopoverOpen(true)}
                    onMouseLeave={() => setPopoverOpen(false)}
                  >
                    {/* Collapsed (default) state */}
                    <div>
                      <Image src={icon} alt={title} className='w-7 mt-3' />
                      <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                      <p className='text-sm'>{description}</p>
                    </div>

                    {/* Popover for detailed info */}
                    {popoverOpen && (
                      <div
                        className="absolute left-1/2 top-full z-20 w-72 -translate-x-1/2 mt-4 bg-white rounded-xl p-6 shadow-2xl border border-gray-200 animate-fade-in"
                        style={{ minWidth: '18rem' }}
                      >
                        <h3 className='text-2xl font-bold mb-6 text-center'>{title}</h3>
                        <ul className='space-y-6'>
                          {languagesDetails.map(({name, years, level, progress}) => (
                            <li key={name} className='text-sm'>
                              <div className='flex items-center justify-between mb-1'>
                                <span className='font-semibold'>{name} <span className='font-normal text-xs text-gray-500'>({years} yr{years > 1 ? 's' : ''})</span></span>
                                <span className='text-xs italic text-gray-600'>{level}</span>
                              </div>
                              <div className='w-full bg-gray-200 rounded-full h-2'>
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
                    className='relative border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 h-full'
                    onMouseEnter={() => setOpenPopover('Education')}
                    onMouseLeave={() => setOpenPopover(null)}
                  >
                    {/* Collapsed (default) state */}
                    <div>
                      <Image src={icon} alt={title} className='w-7 mt-3' />
                      <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                      <p className='text-sm'>{description}</p>
                    </div>
                    {/* Popover for Education */}
                    {openPopover === 'Education' && (
                      <div className="absolute left-1/2 top-full z-20 w-80 -translate-x-1/2 mt-4 bg-white rounded-xl p-6 shadow-2xl border border-gray-200 animate-fade-in flex flex-col items-center text-center">
                        <Image src={assets.umass_logo} alt='UMass Boston Logo' className='w-16 mb-4' />
                        <h3 className='text-xl font-bold mb-2'>{title}</h3>
                        <div className='font-semibold mb-1'>University of Massachusetts Boston</div>
                        <div className='mb-1'>Expected Graduation: <span className='font-bold'>May 2026</span></div>
                        <div className='mb-2'>Computer Science, Bachelor of Science</div>
                        <div className='mb-4'>GPA: <span className='font-bold'>3.962</span></div>
                        <a
                          href="/tscript.pdf"
                          download
                          className='px-6 py-2 border rounded-full border-gray-500 flex items-center gap-2 bg-white  transition-colors duration-300 w-fit mx-auto mt-2 shadow-sm'
                        >
                          Download Transcript
                          <Image src={assets.download_icon} alt='' className='w-4' />
                        </a>
                      </div>
                    )}
                  </li>
                )
              }

              // Default card rendering for other items
              return (
                <li
                  key={index}
                  className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 h-full'>
                  <Image src={icon} alt={title} className='w-7 mt-3' />
                  <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                  <p className='text-sm'>{description}</p>
                </li>
              )
            })}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
