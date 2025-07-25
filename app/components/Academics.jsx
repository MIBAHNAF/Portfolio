import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { useTheme } from '../contexts/ThemeContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Academics() {
  const { isDark } = useTheme();
  const [activeScholarship, setActiveScholarship] = useState(null);
  const [activeGPA, setActiveGPA] = useState(false);
  const scholarshipRefs = useRef([]);
  const gpaRef = useRef(null);
  
  // Animation refs and hooks
  const [titleRef, titleInView] = useScrollAnimation();
  const [schoolRef, schoolInView] = useScrollAnimation();
  const [courseworkRef, courseworkInView] = useScrollAnimation();

  // Intersection Observer for scroll-based activation
  useEffect(() => {
    // Observer for scholarships
    const observers = scholarshipRefs.current.map((scholarshipRef, index) => {
      if (!scholarshipRef) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Check if the element is at the top portion of the viewport
              const rect = entry.boundingClientRect;
              const viewportHeight = window.innerHeight;
              const topThreshold = viewportHeight * 0.3; // Top 30% of screen
              
              if (rect.top <= topThreshold && rect.bottom >= 0) {
                setActiveScholarship(index);
              }
            }
          });
        },
        {
          threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
          rootMargin: '-20% 0px -60% 0px'
        }
      );

      observer.observe(scholarshipRef);
      return observer;
    });

    // Observer for GPA
    let gpaObserver = null;
    if (gpaRef.current) {
      gpaObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const rect = entry.boundingClientRect;
            const viewportHeight = window.innerHeight;
            const topThreshold = viewportHeight * 0.3; // Top 30% of screen
            
            if (entry.isIntersecting && rect.top <= topThreshold && rect.bottom >= 0) {
              setActiveGPA(true);
            } else {
              setActiveGPA(false);
            }
          });
        },
        {
          threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
          rootMargin: '-20% 0px -60% 0px'
        }
      );

      gpaObserver.observe(gpaRef.current);
    }

    return () => {
      observers.forEach(observer => observer && observer.disconnect());
      if (gpaObserver) gpaObserver.disconnect();
    };
  }, []);
  
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
    if (grade.includes('A')) return isDark ? 'text-green-400 bg-green-900/20' : 'text-green-600 bg-green-50'
    if (grade.includes('B')) return isDark ? 'text-blue-400 bg-blue-900/20' : 'text-blue-600 bg-blue-50'
    if (grade.includes('C')) return isDark ? 'text-yellow-400 bg-yellow-900/20' : 'text-yellow-600 bg-yellow-50'
    if (grade === 'In Progress') return isDark ? 'text-purple-400 bg-purple-900/20' : 'text-purple-600 bg-purple-50'
    if (grade === 'Transfer') return isDark ? 'text-gray-400 bg-gray-700/20' : 'text-gray-600 bg-gray-50'
    return isDark ? 'text-gray-400 bg-gray-700/20' : 'text-gray-600 bg-gray-50'
  }

  return (
    <div id='Academics' className='w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-[12%] py-8 sm:py-10 scroll-mt-20'>
      <div 
        ref={titleRef}
        className={`text-center transition-all duration-1000 ${titleInView ? 'fadeInUp' : 'opacity-0 translate-y-8'}`}
      >
        <h4 className={`mb-2 text-sm sm:text-base md:text-lg font-Ovo ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>My Education</h4>
        <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Ovo mb-8 sm:mb-12 md:mb-16 lg:mb-20 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Academic Background
        </h2>
      </div>
      
      <div className='max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16'>
        
        {/* Section 1: School Information */}
        <div 
          ref={schoolRef}
          className={`rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 border transition-all duration-1000 delay-300 ${schoolInView ? 'slideInLeft' : 'opacity-0 -translate-x-8'} ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
        >
          <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
            {/* University Logo */}
            <div className='flex-shrink-0'>
              <Image src={assets.umass_logo} alt="UMass Boston" className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain'/>
            </div>
            
            <div className='flex-1 w-full text-center sm:text-left'>
              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>{schoolInfo.name}</h3>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6'>
                <div className='space-y-1 sm:space-y-2'>
                  <h4 className={`font-semibold text-xs sm:text-sm md:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Degree Program</h4>
                  <p className={`text-xs sm:text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{schoolInfo.degree}</p>
                 
                </div>
                
                <div className='space-y-1 sm:space-y-2'>
                  <h4 className={`font-semibold text-xs sm:text-sm md:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Expected Graduation</h4>
                  <p className={`text-xs sm:text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{schoolInfo.expectedGraduation}</p>
                </div>
                
                  <div className='space-y-1 sm:space-y-2'>
                  <h4 className={`font-semibold text-xs sm:text-sm md:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Cumulative GPA</h4>
                  <a 
                    ref={gpaRef}
                    href="/tscript.pdf" 
                    download 
                    className={`text-xs sm:text-sm md:text-base transition-all duration-300 cursor-pointer ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    <span className={`transition-all duration-300 ${
                      activeGPA 
                        ? (isDark ? 'text-orange-400 transform scale-105' : 'text-blue-600 transform scale-105') 
                        : (isDark ? 'text-gray-300' : 'text-gray-600')
                    }`}>3.962</span>/4.0
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Computer Science & Related Courses */}
        <div 
          ref={courseworkRef}
          className={`rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 border transition-all duration-1000 delay-600 ${courseworkInView ? 'slideInRight' : 'opacity-0 translate-x-8'} ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
        >
          <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-center ${isDark ? 'text-white' : 'text-gray-800'}`}>
             Computer Science & Related Coursework
          </h3>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4'>
            {csCourses.map((course, index) => (
              <div key={index} className={`rounded-lg p-2 sm:p-3 md:p-4 hover:shadow-md transition-shadow duration-200 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'}`}>
                <div className='flex justify-between items-start mb-1 sm:mb-2'>
                  <h4 className={`font-semibold text-xs sm:text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>{course.code}</h4>
                  <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getGradeColor(course.grade)}`}>
                    {course.grade}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm mb-1 sm:mb-2 leading-tight ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{course.name}</p>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{course.credits} Credits</p>
              </div>
            ))}
          </div>
          
          {/* Course Statistics */}
          <div className={`mt-4 sm:mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 md:pt-6 border-t ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
            <div className='text-center'>
              <p className={`text-base sm:text-lg md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{csCourses.length}</p>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Total Courses</p>
            </div>
            <div className='text-center'>
              <p className={`text-base sm:text-lg md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{csCourses.reduce((total, course) => total + course.credits, 0)}</p>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Total Credits</p>
            </div>
            <div className='text-center'>
              <p className={`text-base sm:text-lg md:text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>{csCourses.filter(course => course.grade.includes('A')).length}</p>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>A Grades</p>
            </div>
            <div className='text-center'>
              <p className={`text-base sm:text-lg md:text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{csCourses.filter(course => course.grade.includes('B')).length}</p>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>B Grades</p>
            </div>
          </div>
        </div>

        {/* Section 3: Scholarships & Awards */}
        <div className={`rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-center ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Scholarships & Awards
          </h3>
          
          {/* Scholarship Summary */}
          <div className={`rounded-lg p-3 sm:p-4 md:p-6 border mb-4 sm:mb-6 md:mb-8 ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
            <h4 className={`text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>Academic Excellence Recognition</h4>
            <p className={`text-xs sm:text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Recipient of 8+ prestigious scholarships across multiple academic years</p>
          </div>

          {/* Scholarship Years */}
          <div className='space-y-4 sm:space-y-6 md:space-y-8'>
            {/* 2023-2024 */}
            <div>
              <h4 className={`font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg border-b pb-1 sm:pb-2 ${isDark ? 'text-white border-gray-600' : 'text-gray-800 border-gray-200'}`}>2023-2024 Academic Year</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4'>
                <div className={`rounded-lg p-2 sm:p-3 md:p-4 border hover:shadow-md transition-shadow duration-200 ${isDark ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                  <h5 className={`font-medium text-xs sm:text-sm md:text-base ${isDark ? 'text-white' : 'text-gray-800'}`}>Academic Recognition Award</h5>
                  <p className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Merit-Based</p>
                </div>
                <div className={`rounded-lg p-2 sm:p-3 md:p-4 border hover:shadow-md transition-shadow duration-200 ${isDark ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                  <h5 className={`font-medium text-xs sm:text-sm md:text-base ${isDark ? 'text-white' : 'text-gray-800'}`}>The Teehan Scholarship</h5>
                  <p className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Academic Excellence</p>
                </div>
                <div 
                  ref={(el) => scholarshipRefs.current[0] = el}
                  className={`rounded-lg p-2 sm:p-3 md:p-4 border transition-all duration-200 cursor-pointer ${
                    activeScholarship === 0 
                      ? (isDark ? 'bg-orange-900/20 border-orange-500' : 'bg-blue-50 border-blue-500') 
                      : (isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300')
                  }`}
                >
                  <a href="https://ai.umb.edu/about-paul-english/" target="_blank" rel="noopener noreferrer" className='block'>
                    <h5 className={`font-medium text-xs sm:text-sm md:text-base transition-colors duration-200 ${
                      activeScholarship === 0 
                        ? (isDark ? 'text-orange-400' : 'text-blue-600') 
                        : (isDark ? 'text-white' : 'text-gray-800')
                    }`}>The Paul English Scholarship</h5>
                    <p className={`text-xs sm:text-sm mt-0.5 sm:mt-1 transition-colors duration-200 ${
                      activeScholarship === 0 
                        ? (isDark ? 'text-orange-300' : 'text-blue-500') 
                        : (isDark ? 'text-gray-400' : 'text-gray-500')
                    }`}>CSM Excellence Award</p>
                  </a>
                </div>
              </div>
            </div>

            {/* 2024-2025 */}
            <div>
              <h4 className={`font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg border-b pb-1 sm:pb-2 ${isDark ? 'text-white border-gray-600' : 'text-gray-800 border-gray-200'}`}>2024-2025 Academic Year</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4'>
                <div className={`rounded-lg p-2 sm:p-3 md:p-4 border hover:shadow-md transition-shadow duration-200 ${isDark ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                  <h5 className={`font-medium text-xs sm:text-sm md:text-base ${isDark ? 'text-white' : 'text-gray-800'}`}>Donohue Scholarship</h5>
                  <p className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Academic Merit</p>
                </div>
                <div 
                  ref={(el) => scholarshipRefs.current[1] = el}
                  className={`rounded-lg p-2 sm:p-3 md:p-4 border transition-all duration-200 cursor-pointer ${
                    activeScholarship === 1 
                      ? (isDark ? 'bg-orange-900/20 border-orange-500' : 'bg-blue-50 border-blue-500') 
                      : (isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300')
                  }`}
                >
                  <a href="https://ai.umb.edu/about-paul-english/" target="_blank" rel="noopener noreferrer" className='block'>
                    <h5 className={`font-medium text-xs sm:text-sm md:text-base transition-colors duration-200 ${
                      activeScholarship === 1 
                        ? (isDark ? 'text-orange-400' : 'text-blue-600') 
                        : (isDark ? 'text-white' : 'text-gray-800')
                    }`}>The Paul English Scholarship</h5>
                    <p className={`text-xs sm:text-sm mt-0.5 sm:mt-1 transition-colors duration-200 ${
                      activeScholarship === 1 
                        ? (isDark ? 'text-orange-300' : 'text-blue-500') 
                        : (isDark ? 'text-gray-400' : 'text-gray-500')
                    }`}>CSM Excellence Award</p>
                  </a>
                </div>
                <div className={`rounded-lg p-2 sm:p-3 md:p-4 border hover:shadow-md transition-shadow duration-200 ${isDark ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                  <h5 className={`font-medium text-xs sm:text-sm md:text-base ${isDark ? 'text-white' : 'text-gray-800'}`}>National Grid Scholarship</h5>
                  <p className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>STEM Excellence</p>
                </div>
                <div className={`rounded-lg p-2 sm:p-3 md:p-4 border hover:shadow-md transition-shadow duration-200 ${isDark ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                  <h5 className={`font-medium text-xs sm:text-sm md:text-base ${isDark ? 'text-white' : 'text-gray-800'}`}>Janus Scholarship</h5>
                  <p className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Academic Achievement</p>
                </div>
              </div>
            </div>

            {/* 2025-2026 */}
            <div>
              <h4 className={`font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg border-b pb-1 sm:pb-2 ${isDark ? 'text-white border-gray-600' : 'text-gray-800 border-gray-200'}`}>2025-2026 Academic Year</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4'>
                <div className={`rounded-lg p-2 sm:p-3 md:p-4 border hover:shadow-md transition-shadow duration-200 ${isDark ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                  <h5 className={`font-medium text-xs sm:text-sm md:text-base ${isDark ? 'text-white' : 'text-gray-800'}`}>Donohue Scholarship</h5>
                  <p className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Continued Excellence</p>
                </div>
                <div 
                  ref={(el) => scholarshipRefs.current[2] = el}
                  className={`rounded-lg p-2 sm:p-3 md:p-4 border transition-all duration-200 cursor-pointer ${
                    activeScholarship === 2 
                      ? (isDark ? 'bg-orange-900/20 border-orange-500' : 'bg-blue-50 border-blue-500') 
                      : (isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300')
                  }`}
                >
                  <a href="https://ai.umb.edu/about-paul-english/" target="_blank" rel="noopener noreferrer" className='block'>
                    <h5 className={`font-medium text-xs sm:text-sm md:text-base transition-colors duration-200 ${
                      activeScholarship === 2 
                        ? (isDark ? 'text-orange-400' : 'text-blue-600') 
                        : (isDark ? 'text-white' : 'text-gray-800')
                    }`}>The Paul English Scholarship</h5>
                    <p className={`text-xs sm:text-sm mt-0.5 sm:mt-1 transition-colors duration-200 ${
                      activeScholarship === 2 
                        ? (isDark ? 'text-orange-300' : 'text-blue-500') 
                        : (isDark ? 'text-gray-400' : 'text-gray-500')
                    }`}>CSM Excellence Award (3rd Time)</p>
                  </a>
                </div>
                <div className={`rounded-lg p-2 sm:p-3 md:p-4 border hover:shadow-md transition-shadow duration-200 ${isDark ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                  <h5 className={`font-medium text-xs sm:text-sm md:text-base ${isDark ? 'text-white' : 'text-gray-800'}`}>Janus Scholarship</h5>
                  <p className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Continued Recognition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Recognition */}
          <div className={`mt-4 sm:mt-6 md:mt-8 pt-3 sm:pt-4 md:pt-6 border-t ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
            <div 
              ref={(el) => scholarshipRefs.current[3] = el}
              className={`rounded-lg p-3 sm:p-4 md:p-6 border transition-all duration-300 cursor-pointer transform perspective-1000 ${
                activeScholarship === 3 
                  ? (isDark 
                      ? 'bg-orange-900/30 border-orange-400 shadow-lg shadow-orange-500/10 scale-[1.015] rotate-x-1' 
                      : 'bg-blue-50 border-blue-400 shadow-lg shadow-blue-500/10 scale-[1.015] rotate-x-1'
                    ) 
                  : (isDark ? 'bg-gray-700 border-gray-600 hover:shadow-lg' : 'bg-gray-50 border-gray-200 hover:shadow-lg')
              }`}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: activeScholarship === 3 
                  ? `0 6px 12px ${isDark ? 'rgba(251, 146, 60, 0.09)' : 'rgba(59, 130, 246, 0.09)'}, 0 3px 6px rgba(0, 0, 0, 0.03)` 
                  : undefined
              }}
            >
              <a href="https://ai.umb.edu/about-paul-english/" target="_blank" rel="noopener noreferrer" className='block'>
                <h4 className={`font-semibold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base transition-all duration-300 ${
                  activeScholarship === 3 
                    ? (isDark ? 'text-orange-300 transform translate-z-2' : 'text-blue-600 transform translate-z-2') 
                    : (isDark ? 'text-white' : 'text-gray-800')
                }`}>Special Recognition</h4>
                <p className={`text-xs sm:text-sm leading-tight transition-all duration-300 ${
                  activeScholarship === 3 
                    ? (isDark ? 'text-orange-200 transform translate-z-1' : 'text-blue-500 transform translate-z-1') 
                    : (isDark ? 'text-gray-300' : 'text-gray-600')
                }`}>
                  Three-time recipient of <span className='font-medium'>The Paul English Scholarship</span> - 
                  a prestigious award recognizing exceptional achievement in Computer Science
                </p>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Academics
