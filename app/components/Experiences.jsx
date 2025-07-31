import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Experience data
const experiences = [
  {
    period: 'Jun 2024 - Present',
    role: 'Software Engineering Intern - IT Systems',
    company: 'UMASS',
    location: 'Boston, MA',
    points: [
      'Engineered automated scripts to streamline account provisioning and access control for campus systems.',
      'Diagnosed and resolved 50+ software issues across Windows, macOS, and remote platforms.',
      'Collaborated with engineers to debug configuration errors and automate workflows.',
      'Developed phishing awareness tools, reducing incident reports by 10%.',
      'Maintained data integrity and security across multi-platform academic environments.',
    ],
  },
  {
    period: 'Sept 2023 - May 2024',
    role: 'Software Engineering Research Fellow',
    company: 'ORACLE / UMASS',
    location: 'Boston, MA',
    points: [
      'Studied extinction risk using reaction-diffusion population models.',
      'Wrote Python scripts to simulate discrete extinction scenarios.',
      'Analyzed outputs using macro-enabled Excel spreadsheets.',
      'Presented findings at the CSM Student Success Showcase.',
      'Worked under Prof. Niraj Kumar on model-based research.',
    ],
  },
  {
    period: 'Sept 2023 - May 2024',
    role: 'Software Engineering Teaching Assistant',
    company: 'UMASS',
    location: 'Boston, MA',
    points: [
      'Guided 20+ students in debugging and OOP concepts.',
      'Explained key algorithms and data structures in depth.',
      'Helped students improve code quality and logic flow.',
      'Created a real-world coding exercise.',
    ],
  },
  {
    period: 'Apr 2022 - Jun 2022',
    role: 'Software Engineering Fellow',
    company: 'CREATIVE IT INSTITUTE',
    location: 'Dhaka, Bangladesh',
    points: [
      'Developed responsive websites for clients using JavaScript, Bootstrap, jQuery, HTML, and CSS.',
      'Collaborated with a team of 10 developers, utilizing GitHub for version control and project management.',
      'Successfully deployed websites using domain hosting, ensuring accessibility and optimal performance.',
    ],
  },
]

const ExperienceCard = ({ data, isRight, isActive, onToggle, isDark, cardRef }) => (
  <div 
    ref={cardRef}
    className={`bg-transparent ${isRight ? 'lg:pl-8' : 'lg:pr-8'} group transition-all duration-300`}
  >
    <p className={`text-xs sm:text-sm font-semibold transition-colors duration-300 ${isActive ? (isDark ? 'text-orange-500' : 'text-blue-600') : isDark ? 'text-gray-300' : 'text-gray-600'}`}>{data.period}</p>
    <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mt-1 mb-1 font-Ovo transition-colors duration-300 ${isActive ? (isDark ? 'text-orange-500' : 'text-blue-700') : isDark ? 'text-white' : 'text-gray-900'}`}>{data.role}</h3>
    <p className={`text-sm sm:text-base font-medium font-Ovo ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{data.company}</p>
    <p className={`text-sm mb-3 sm:mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{data.location}</p>
    <ul className={`list-none space-y-1.5 sm:space-y-2 text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
      {data.points.map((point, idx) => (
        <li key={idx} className="leading-relaxed">{point}</li>
      ))}
    </ul>
  </div>
)

function Experiences() {
  const { isDark } = useTheme();
  const [activeExperience, setActiveExperience] = useState(null);
  const cardRefs = useRef([]);
  
  // Animation refs and hooks
  const [titleRef, titleInView] = useScrollAnimation();
  const [contentRef, contentInView] = useScrollAnimation();

  // Intersection Observer for scroll-based activation
  useEffect(() => {
    const observers = cardRefs.current.map((cardRef, index) => {
      if (!cardRef) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Check if the element is at the top portion of the viewport
              const rect = entry.boundingClientRect;
              const viewportHeight = window.innerHeight;
              const topThreshold = viewportHeight * 0.3; // Top 30% of screen
              
              if (rect.top <= topThreshold && rect.bottom >= 0) {
                setActiveExperience(index);
              }
            }
          });
        },
        {
          threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
          rootMargin: '-20% 0px -60% 0px'
        }
      );

      observer.observe(cardRef);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer && observer.disconnect());
    };
  }, [experiences.length]);

  const toggleExperience = (index) => {
    // Scroll-based activation only, no manual toggle
    return;
  };

  return (
    <div id='experiences' className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-6 md:py-10 scroll-mt-20'>
      <div 
        ref={titleRef}
        className={`text-center transition-all duration-1000 ${titleInView ? 'fadeInUp' : 'opacity-0 translate-y-8'}`}
      >
        <h4 className={`mb-2 text-base sm:text-lg font-Ovo ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>My Journey</h4>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-Ovo mb-10 sm:mb-16 md:mb-20 ${isDark ? 'text-white' : 'text-gray-800'}`}>Work Experience</h2>
      </div>

      {/* Timeline container */}
      <div 
        ref={contentRef}
        className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-300 ${contentInView ? 'fadeInUp' : 'opacity-0 translate-y-8'}`}
      >
        {/* Vertical line */}
        <div className={`absolute left-[20px] sm:left-[30px] lg:left-[50%] top-0 h-full w-[2px] ${isDark ? 'bg-gray-600' : 'bg-slate-400'}`}></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className='relative flex mb-8 sm:mb-12 lg:mb-16 group'>
            {/* Dot */}
            <div className='absolute left-[11px] sm:left-[21px] lg:left-[calc(50%-9px)] z-10'>
              <span className={`block w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full transition-colors duration-300 ${activeExperience === idx ? (isDark ? 'bg-orange-500' : 'bg-blue-500') : isDark ? 'bg-gray-600' : 'bg-slate-600'}`}></span>
            </div>

            {/* Content */}
            <div className='flex-grow pl-[50px] sm:pl-[70px] lg:pl-0'>
              <div className='lg:grid lg:grid-cols-2 gap-8'>
                <div className={idx % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}>
                  <ExperienceCard 
                    data={exp} 
                    isRight={idx % 2 !== 0} 
                    isActive={activeExperience === idx}
                    onToggle={() => toggleExperience(idx)}
                    isDark={isDark}
                    cardRef={(el) => cardRefs.current[idx] = el}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences
