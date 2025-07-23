import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'

function Academics() {
  // School Information
  const schoolInfo = {
    name: "University of Massachusetts Boston",
    location: "Boston, MA",
    degree: "Computer Science, BS, HONORS",
    
    expectedGraduation: "May 2026",
    gpa: "3.962/4.0",
    relevantCoursework: "Advanced Algorithms, Computer Architecture, Game Programming"
  }

  // CS Courses with grades (excluding Physics, Calc, Ethics, and W/F grades)
  const csCourses = [
    { code: "CS 110", name: "Introduction to Computing", grade: "A", credits: 4 },
    { code: "CS 210", name: "Intermediate Computing", grade: "A", credits: 4 },
    { code: "CS 240", name: "Programming in C", grade: "A", credits: 4 },
    { code: "CS 285L", name: "Social Issues and Ethics in Computing", grade: "A", credits: 4 },
    { code: "CS 310", name: "Advanced Algorithms", grade: "B+", credits: 4 },
    { code: "CS 341", name: "Computer Architecture & Organization", grade: "A", credits: 4 },
    { code: "CS 461", name: "Computer Games Programming", grade: "A", credits: 4 },
    { code: "CS 220", name: "Applied Discrete Mathematics", grade: "A", credits: 4 },
    // Math & Science courses moved here
    { code: "MATH 141", name: "Calculus II", grade: "A", credits: 4 },
    { code: "MATH 260", name: "Linear Algebra", grade: "A", credits: 4 },
    { code: "MATH 345", name: "Probability & Statistics", grade: "A", credits: 4 },
    { code: "PHYSIC 114", name: "Fundamentals of Physics II", grade: "A", credits: 4 }
  ]

  const getGradeColor = (grade) => {
    if (grade.includes('A')) return 'text-green-600 bg-green-50'
    if (grade.includes('B')) return 'text-blue-600 bg-blue-50'
    if (grade.includes('C')) return 'text-yellow-600 bg-yellow-50'
    if (grade === 'In Progress') return 'text-purple-600 bg-purple-50'
    if (grade === 'Transfer') return 'text-gray-600 bg-gray-50'
    return 'text-gray-600 bg-gray-50'
  }

  return (
    <div id='Academics' className='w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-[12%] py-8 sm:py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-sm sm:text-base md:text-lg font-Ovo text-gray-600'>My Education</h4>
      <h2 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Ovo mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-gray-800'>
        Academic Background
      </h2>
      
      <div className='max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16'>
        
        {/* Section 1: School Information */}
        <div className='bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-100'>
          <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
            {/* University Logo */}
            <div className='flex-shrink-0'>
              <Image src={assets.umass_logo} alt="UMass Boston" className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain'/>
            </div>
            
            <div className='flex-1 w-full text-center sm:text-left'>
              <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6'>{schoolInfo.name}</h3>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6'>
                <div className='space-y-1 sm:space-y-2'>
                  <h4 className='font-semibold text-gray-700 text-xs sm:text-sm md:text-base'>Degree Program</h4>
                  <p className='text-gray-600 text-xs sm:text-sm md:text-base'>{schoolInfo.degree}</p>
                 
                </div>
                
                <div className='space-y-1 sm:space-y-2'>
                  <h4 className='font-semibold text-gray-700 text-xs sm:text-sm md:text-base'>Expected Graduation</h4>
                  <p className='text-gray-600 text-xs sm:text-sm md:text-base'>{schoolInfo.expectedGraduation}</p>
                </div>
                
                <div className='space-y-1 sm:space-y-2'>
                  <h4 className='font-semibold text-gray-700 text-xs sm:text-sm md:text-base'>Cumulative GPA</h4>
                  <div className='relative inline-block'>
                    <a href="/tscript.pdf" download 
                    className='text-gray-600 text-xs sm:text-sm md:text-base hover:text-blue-600 transition-colors duration-300 cursor-pointer group'
                    >
                      {schoolInfo.gpa}
                    </a>
                    <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 sm:px-3 py-1 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden sm:block'>
                      Download Transcript
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Computer Science & Related Courses */}
        <div className='bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-100'>
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 text-center'>
            💻 Computer Science & Related Coursework
          </h3>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4'>
            {csCourses.map((course, index) => (
              <div key={index} className='bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4 hover:shadow-md transition-shadow duration-200'>
                <div className='flex justify-between items-start mb-1 sm:mb-2'>
                  <h4 className='font-semibold text-gray-800 text-xs sm:text-sm'>{course.code}</h4>
                  <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getGradeColor(course.grade)}`}>
                    {course.grade}
                  </span>
                </div>
                <p className='text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2 leading-tight'>{course.name}</p>
                <p className='text-gray-500 text-xs'>{course.credits} Credits</p>
              </div>
            ))}
          </div>
          
          {/* Course Statistics */}
          <div className='mt-4 sm:mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 md:pt-6 border-t border-gray-200'>
            <div className='text-center'>
              <p className='text-base sm:text-lg md:text-2xl font-bold text-gray-800'>{csCourses.length}</p>
              <p className='text-xs sm:text-sm text-gray-600'>Total Courses</p>
            </div>
            <div className='text-center'>
              <p className='text-base sm:text-lg md:text-2xl font-bold text-gray-800'>{csCourses.reduce((total, course) => total + course.credits, 0)}</p>
              <p className='text-xs sm:text-sm text-gray-600'>Total Credits</p>
            </div>
            <div className='text-center'>
              <p className='text-base sm:text-lg md:text-2xl font-bold text-green-600'>{csCourses.filter(course => course.grade.includes('A')).length}</p>
              <p className='text-xs sm:text-sm text-gray-600'>A Grades</p>
            </div>
            <div className='text-center'>
              <p className='text-base sm:text-lg md:text-2xl font-bold text-blue-600'>{csCourses.filter(course => course.grade.includes('B')).length}</p>
              <p className='text-xs sm:text-sm text-gray-600'>B Grades</p>
            </div>
          </div>
        </div>

        {/* Section 3: Scholarships & Awards */}
        <div className='bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-100'>
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 text-center'>
            Scholarships & Awards
          </h3>
          
          {/* Scholarship Summary */}
          <div className='bg-gray-50 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-200 mb-4 sm:mb-6 md:mb-8'>
            <h4 className='text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2'>Academic Excellence Recognition</h4>
            <p className='text-gray-600 text-xs sm:text-sm md:text-base'>Recipient of 8+ prestigious scholarships across multiple academic years</p>
          </div>

          {/* Scholarship Years */}
          <div className='space-y-4 sm:space-y-6 md:space-y-8'>
            {/* 2023-2024 */}
            <div>
              <h4 className='font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg border-b border-gray-200 pb-1 sm:pb-2'>2023-2024 Academic Year</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4'>
                <div className='bg-white rounded-lg p-2 sm:p-3 md:p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200'>
                  <h5 className='font-medium text-gray-800 text-xs sm:text-sm md:text-base'>Academic Recognition Award</h5>
                  <p className='text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1'>Merit-Based</p>
                </div>
                <div className='bg-white rounded-lg p-2 sm:p-3 md:p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200'>
                  <h5 className='font-medium text-gray-800 text-xs sm:text-sm md:text-base'>The Teehan Scholarship</h5>
                  <p className='text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1'>Academic Excellence</p>
                </div>
                <div className='bg-white rounded-lg p-2 sm:p-3 md:p-4 border border-gray-300 hover:shadow-md hover:border-gray-400 transition-all duration-200 cursor-pointer'>
                  <a href="https://ai.umb.edu/about-paul-english/" target="_blank" rel="noopener noreferrer" className='block'>
                    <h5 className='font-medium text-gray-800 text-xs sm:text-sm md:text-base hover:text-gray-900'>The Paul English Scholarship</h5>
                    <p className='text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1 hover:text-gray-600'>CSM Excellence Award</p>
                  </a>
                </div>
              </div>
            </div>

            {/* 2024-2025 */}
            <div>
              <h4 className='font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg border-b border-gray-200 pb-1 sm:pb-2'>2024-2025 Academic Year</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4'>
                <div className='bg-white rounded-lg p-2 sm:p-3 md:p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200'>
                  <h5 className='font-medium text-gray-800 text-xs sm:text-sm md:text-base'>Donohue Scholarship</h5>
                  <p className='text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1'>Academic Merit</p>
                </div>
                <div className='bg-white rounded-lg p-2 sm:p-3 md:p-4 border border-gray-300 hover:shadow-md hover:border-gray-400 transition-all duration-200 cursor-pointer'>
                  <a href="https://ai.umb.edu/about-paul-english/" target="_blank" rel="noopener noreferrer" className='block'>
                    <h5 className='font-medium text-gray-800 text-xs sm:text-sm md:text-base hover:text-gray-900'>The Paul English Scholarship</h5>
                    <p className='text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1 hover:text-gray-600'>CSM Excellence Award</p>
                  </a>
                </div>
                <div className='bg-white rounded-lg p-2 sm:p-3 md:p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200'>
                  <h5 className='font-medium text-gray-800 text-xs sm:text-sm md:text-base'>National Grid Scholarship</h5>
                  <p className='text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1'>STEM Excellence</p>
                </div>
                <div className='bg-white rounded-lg p-2 sm:p-3 md:p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200'>
                  <h5 className='font-medium text-gray-800 text-xs sm:text-sm md:text-base'>Janus Scholarship</h5>
                  <p className='text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1'>Academic Achievement</p>
                </div>
              </div>
            </div>

            {/* 2025-2026 */}
            <div>
              <h4 className='font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg border-b border-gray-200 pb-1 sm:pb-2'>2025-2026 Academic Year</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4'>
                <div className='bg-white rounded-lg p-2 sm:p-3 md:p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200'>
                  <h5 className='font-medium text-gray-800 text-xs sm:text-sm md:text-base'>Donohue Scholarship</h5>
                  <p className='text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1'>Continued Excellence</p>
                </div>
                <div className='bg-white rounded-lg p-2 sm:p-3 md:p-4 border border-gray-300 hover:shadow-md hover:border-gray-400 transition-all duration-200 cursor-pointer'>
                  <a href="https://ai.umb.edu/about-paul-english/" target="_blank" rel="noopener noreferrer" className='block'>
                    <h5 className='font-medium text-gray-800 text-xs sm:text-sm md:text-base hover:text-gray-900'>The Paul English Scholarship</h5>
                    <p className='text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1 hover:text-gray-600'>CSM Excellence Award (3rd Time)</p>
                  </a>
                </div>
                <div className='bg-white rounded-lg p-2 sm:p-3 md:p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200'>
                  <h5 className='font-medium text-gray-800 text-xs sm:text-sm md:text-base'>Janus Scholarship</h5>
                  <p className='text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1'>Continued Recognition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Recognition */}
          <div className='mt-4 sm:mt-6 md:mt-8 pt-3 sm:pt-4 md:pt-6 border-t border-gray-200'>
            <a href="https://ai.umb.edu/about-paul-english/" target="_blank" rel="noopener noreferrer" className='block'>
              <div className='bg-gray-50 rounded-lg p-3 sm:p-4 md:p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer group'>
                <h4 className='font-semibold text-gray-800 group-hover:text-blue-600 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base transition-colors duration-200'>Special Recognition</h4>
                <p className='text-gray-600 text-xs sm:text-sm leading-tight'>
                  Three-time recipient of <span className='font-medium'>The Paul English Scholarship</span> - 
                  a prestigious award recognizing exceptional achievement in Computer Science
                </p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Academics
