import React, { useState } from 'react'

// Experience data
const experiences = [
  {
    period: 'Jun 2024 - Present',
    role: 'Software Engineering Intern - IT Systems and Security',
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

const ExperienceCard = ({ data, isRight, isActive, onToggle }) => (
  <div 
    className={`bg-transparent ${isRight ? 'lg:pl-8' : 'lg:pr-8'} group cursor-pointer transition-all duration-300`}
    onClick={onToggle}
  >
    <p className={`text-xs sm:text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-blue-500' : 'text-slate-600 group-hover:text-blue-500'}`}>{data.period}</p>
    <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mt-1 font-Ovo'>{data.company}</h3>
    <p className={`text-base sm:text-lg font-medium italic font-Ovo transition-colors duration-300 ${isActive ? 'text-blue-500' : 'group-hover:text-blue-500'}`}>{data.role}</p>
    <p className='text-sm sm:text-base text-gray-500 mb-3 sm:mb-4'>{data.location}</p>
    <ul className='list-none space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-600'>
      {data.points.map((point, idx) => (
        <li key={idx} className="leading-relaxed">{point}</li>
      ))}
    </ul>
  </div>
)

function Experiences() {
  const [activeExperience, setActiveExperience] = useState(null);

  const toggleExperience = (index) => {
    setActiveExperience(activeExperience === index ? null : index);
  };

  return (
    <div id='experiences' className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-6 md:py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-base sm:text-lg font-Ovo'>My Journey</h4>
      <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-Ovo mb-10 sm:mb-16 md:mb-20'>Work Experience</h2>

      {/* Timeline container */}
      <div className='relative max-w-6xl mx-auto'>
        {/* Vertical line */}
        <div className='absolute left-[20px] sm:left-[30px] lg:left-[50%] top-0 h-full w-[2px] bg-slate-400'></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className='relative flex mb-8 sm:mb-12 lg:mb-16 group'>
            {/* Dot */}
            <div className='absolute left-[11px] sm:left-[21px] lg:left-[calc(50%-9px)] z-10'>
              <span className={`block w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full transition-colors duration-300 ${activeExperience === idx ? 'bg-blue-500' : 'bg-slate-600 group-hover:bg-blue-500'}`}></span>
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
