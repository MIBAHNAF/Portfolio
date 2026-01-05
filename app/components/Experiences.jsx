import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { useTheme } from '../contexts/ThemeContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Experience data
const experiences = [
  {
    period: 'Jun 2024 - Present',
    role: 'IT Systems and Security Analyst',
    company: 'UMASS',
    location: 'Boston, MA',
    points: [
      'Provided Tier-2 support to 100+ students/faculty across Windows, macOS, and mobile; resolved 50+ incidents (logins, installs, printing) with proper escalation.',
      'Supported IAM in Active Directory + Azure AD: completed 15+ secure password resets/week, performed 10+ account assessments/week (locked/disabled/compromised), and assisted with role assignment/monitoring.',
      'Resolved 100+ ServiceNow tickets end-to-end with clear documentation and root-cause troubleshooting; improved resolution efficiency by 20%.',
      'Troubleshot secure access and connectivity: cleared 30+ Wi-Fi/VPN incidents/month and configured Zoom/MS Teams/VPN for reliable remote learning access.',
      'Delivered phishing awareness guidance and safe-account practices, contributing to a 10% drop in reported phishing incidents.',
      'Managed accounts across multiple platforms while maintaining data integrity and applying least-privilege/verification best practices.',
    ],
    certificates: [
      {
        name: 'IT Support Specialist',
        issuer: 'UMass Boston',
        description: 'Certified for COMPTIA A+ level Technical Support',
        period: 'June 2025',
        image: 'A'
      },
      {
        name: 'COMPTIA Security + Plus Series',
        issuer: 'COMPTIA',
        description: 'Certified for COMPTIA Security +',
        period: 'Sept 2025 - Sept 2028',
        image: 'Sec'
      }
    ]
  },
  {
    period: 'Sept 2023 - May 2024',
    role: 'Software Engineering Research Fellow',
    company: 'ORACLE / UMASS',
    location: 'Boston, MA',
    points: [
      'Built a Python simulation pipeline for reaction–diffusion + discrete fluctuations; analyzed extinction behavior across L = 0–60 and x = −15 to 15.',
      'Quantified extinction probability/variance across multiple parameter regimes, producing 3+ publication-quality figures for a research poster.',
      'Automated result aggregation and summary statistics in macro-enabled Excel, reducing manual analysis time by 30%+.',
      'Collaborated with Professor Niraj Kumar through weekly meetings (10+ total); translated math/physics assumptions into testable computational experiments.',
      'Presented findings at the CSM Student Success Showcase as part of an Oracle-supported undergraduate fellowship.',
    ],
    certificates: [
      {
        name: 'Extinction Research Poster',
        issuer: 'Oracle CSM Research Poster',
        description: '',
        period: 'May 2024',
        image: 'poster'
      }
    ],
    certificateTitle: 'Related Posters'
  },
  {
    period: 'Sept 2023 - May 2024',
    role: 'Software Engineering Teaching Assistant',
    company: 'UMASS',
    location: 'Boston, MA',
    points: [
      'Tutored 20+ students in Java and Python, focusing on programming fundamentals and real-world debugging.',
      'Guided students through basic Unix server setup, including account access, shell commands, and file navigation.',
      'Taught core terminal operations like chmod, scp, nano, and basic Bash scripting to help students build confidence.',
      'Assisted students in installing IDEs and programming tools like PyCharm, resolving config and path-related errors.',
      'Provided tailored support to address app installation issues, compile-time errors, and platform-specific bugs.',
      'Helped improve student performance, with many seeing 15–20% grade improvement in the course assessments.',
    ],
  },
  {
    period: 'Apr 2022 - Jun 2022',
    role: 'Web Development Fellow',
    company: 'CREATIVE IT INSTITUTE',
    location: 'Dhaka, Bangladesh',
    points: [
      'Developed and deployed 10+ responsive websites using HTML, CSS, JavaScript, Bootstrap, and jQuery, delivering clean, production-ready UI.',
      'Collaborated with a 10-member development team using GitHub for version control and project management (branching, pull requests, issue tracking).',
      'Configured hosting environments and domain settings (DNS, SSL, cPanel) and executed 0 critical-issue deployments post-launch.',
      'Handled 30+ client requests/iterations, translating feedback into UI updates and feature refinements with fast turnaround.',
      'Ensured cross-browser and mobile compatibility while maintaining 95% customer satisfaction through reliable performance and consistent maintenance.',
    ],
    certificates: [
      {
        name: 'Web Development Certificate',
        issuer: 'Creative IT',
        description: 'Web Development Fellowship',
        period: 'Jun 2022',
        image: 'web'
      }
    ]
  },
]

const CertificateSection = ({ certificates, isDark, isActive, sectionTitle = 'Related Certificates' }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className={`transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <h4 className={`text-base sm:text-lg font-bold mb-4 font-Ovo transition-colors duration-300 ${isDark ? 'text-orange-500' : 'text-blue-700'}`}>{sectionTitle}</h4>
      <div className="space-y-4">
        {certificates.map((cert, idx) => (
          <div key={idx}>
            <div 
              onClick={() => setSelectedCert(selectedCert === idx ? null : idx)}
              className="cursor-pointer"
            >
              <h5 className={`font-semibold text-sm sm:text-base font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-800'} hover:${isDark ? 'text-orange-400' : 'text-blue-600'} transition-colors`}>{cert.name}</h5>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {cert.issuer}
                {cert.description && ` - ${cert.description}`}
              </p>
              <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{cert.period}</p>
            </div>
            {selectedCert === idx && (
              <div className="mt-3 transition-all duration-500 ease-in-out">
                <Image 
                  src={assets[cert.image]} 
                  alt={cert.name}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

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
              const rect = entry.boundingClientRect;
              const viewportHeight = window.innerHeight;
              const topThreshold = viewportHeight * 0.35; // Top 35% of screen
              
              // Activate when top of card is in upper portion of viewport
              if (rect.top >= 0 && rect.top <= topThreshold) {
                setActiveExperience(index);
              }
            } else {
              // Deactivate when card is no longer intersecting
              setActiveExperience(prev => prev === index ? null : prev);
            }
          });
        },
        {
          threshold: [0, 0.1, 0.3, 0.5, 0.7],
          rootMargin: '-15% 0px -50% 0px'
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
                {/* Left side content or certificates */}
                {idx % 2 === 0 ? (
                  <div className='lg:text-right'>
                    <ExperienceCard 
                      data={exp} 
                      isRight={false} 
                      isActive={activeExperience === idx}
                      onToggle={() => toggleExperience(idx)}
                      isDark={isDark}
                      cardRef={(el) => cardRefs.current[idx] = el}
                    />
                  </div>
                ) : (
                  exp.certificates && (
                    <div className="hidden lg:block lg:pr-8">
                      <CertificateSection 
                        certificates={exp.certificates}
                        isDark={isDark}
                        isActive={activeExperience === idx}
                        sectionTitle={exp.certificateTitle || 'Related Certificates'}
                      />
                    </div>
                  )
                )}
                
                {/* Right side content or certificates */}
                {idx % 2 === 0 ? (
                  exp.certificates && (
                    <div className="hidden lg:block lg:col-start-2">
                      <CertificateSection 
                        certificates={exp.certificates}
                        isDark={isDark}
                        isActive={activeExperience === idx}
                        sectionTitle={exp.certificateTitle || 'Related Certificates'}
                      />
                    </div>
                  )
                ) : (
                  <div className='lg:col-start-2'>
                    <ExperienceCard 
                      data={exp} 
                      isRight={true} 
                      isActive={activeExperience === idx}
                      onToggle={() => toggleExperience(idx)}
                      isDark={isDark}
                      cardRef={(el) => cardRefs.current[idx] = el}
                    />
                  </div>
                )}
              </div>
              
              {/* Mobile certificates - shown below experience on small screens */}
              {exp.certificates && (
                <div className="lg:hidden mt-6">
                  <CertificateSection 
                    certificates={exp.certificates}
                    isDark={isDark}
                    isActive={activeExperience === idx}
                    sectionTitle={exp.certificateTitle || 'Related Certificates'}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences
