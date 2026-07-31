import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { assets, infoList, projectsData } from '../../assets/assets';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation, fadeInUp, fadeInUpHidden, fadeInUpVisible, slideInLeft, slideInLeftHidden, slideInLeftVisible, slideInRight, slideInRightHidden, slideInRightVisible } from '../hooks/useScrollAnimation';
import { SiLinux, SiVmware } from 'react-icons/si';
import { MdSecurity, MdKey, MdCloud, MdRouter, MdBuild, MdHealthAndSafety, MdWorkspacePremium } from 'react-icons/md';
import { BsShieldFillCheck, BsTerminalFill } from 'react-icons/bs';

const skillsData = [
  {
    label: 'Security Operations',
    Icon: MdSecurity,
    skills: ['Alert Triage', 'Log Review', 'Phishing Analysis', 'Incident Escalation', 'Security Monitoring', 'Incident Documentation']
  },
  {
    label: 'Identity & Access',
    Icon: MdKey,
    skills: ['Active Directory', 'Microsoft Entra ID', 'IAM', 'MFA', 'SSO', 'Duo', 'SSPR', 'Delinea Secret Server', 'Least-Privilege Access', 'Account Remediation']
  },
  {
    label: 'SIEM & Detection',
    Icon: BsShieldFillCheck,
    skills: ['Wazuh SIEM', 'Splunk', 'EDR', 'MITRE ATT&CK Mapping', 'Windows Security Events', 'Linux Security Events', 'Detection Rules']
  },
  {
    label: 'Healthcare IT',
    Icon: MdHealthAndSafety,
    skills: ['Epic', 'Dragon Medical One', 'Rover', 'Haiku', 'Passkey/PassPIN', 'ServiceNow', 'AWS Connect', 'Ivanti MDM', 'LRS VPSX']
  },
  {
    label: 'Systems & Cloud',
    Icon: MdCloud,
    skills: ['Microsoft 365', 'Windows 10/11', 'macOS', 'Ubuntu Linux', 'iOS', 'Android', 'Citrix Workspace', 'Azure', 'AWS', 'GCP', 'VMware']
  },
  {
    label: 'Networking',
    Icon: MdRouter,
    skills: ['TCP/IP', 'DNS', 'GlobalProtect VPN', 'RDP', 'Wi-Fi Troubleshooting', 'Shared-Drive Mapping']
  },
  {
    label: 'Security Foundations',
    Icon: MdBuild,
    skills: ['NIST CSF Concepts', 'Access-Control Policies', 'Risk Management', 'Vulnerability Management', 'Governance & Compliance']
  },
  {
    label: 'Scripting',
    Icon: BsTerminalFill,
    skills: ['Python (3 yrs)', 'PowerShell', 'Bash', 'Git']
  },
];

// Tool icon map for project popover
const projectToolIcons = {
  wazuh:  { Icon: BsShieldFillCheck, color: '#3573b9', label: 'Wazuh' },
  linux:  { Icon: SiLinux,           color: '#FCC624', label: 'Linux' },
  vmware: { Icon: SiVmware,          color: '#607078', label: 'VMware' },
};

const userImages = [
  assets.user_image,
  assets.user1,
  assets.user2,
  assets.user3
];

function About() {
  const { isDark } = useTheme();
  const [activePopover, setActivePopover] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  const [titleRef, titleVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();
  const [descRef, descVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();

  useEffect(() => {
    setIsHydrated(true);
    setCurrentImageIndex(Math.floor(Math.random() * userImages.length));
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % userImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 60000);
    return () => clearInterval(interval);
  }, [isHydrated]);

  const handlePopoverToggle = (name) => setActivePopover(activePopover === name ? null : name);
  const handleMouseEnter = (name) => { if (window.innerWidth >= 1024) setActivePopover(name); };
  const handleMouseLeave = () => { if (window.innerWidth >= 1024) setActivePopover(null); };
  const isPopoverOpen = (name) => activePopover === name;

  // Subtle pill colors that adapt to the existing theme
  const pillClass = isDark
    ? 'bg-gray-800 border-gray-700 text-gray-300'
    : 'bg-white border-gray-200 text-gray-700';

  const labelClass = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <div id='about' className='w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[10%] py-8 sm:py-10 scroll-mt-20 relative z-40'>
      <div ref={titleRef} className={`${fadeInUp} ${titleVisible ? fadeInUpVisible : fadeInUpHidden}`}>
        <h4 className={`text-center mb-2 text-base sm:text-lg font-Ovo ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Introduction</h4>
        <h2 className={`text-center text-3xl sm:text-4xl md:text-5xl font-Ovo ${isDark ? 'text-white' : 'text-gray-800'}`}>About Me</h2>
      </div>

      <div className="my-8 sm:my-10 lg:my-12 max-w-7xl mx-auto">
        <div className="relative z-30 grid grid-cols-1 lg:grid-cols-[minmax(240px,300px)_minmax(0,1fr)] xl:grid-cols-[minmax(280px,340px)_minmax(0,1fr)] items-start gap-8 lg:gap-10 xl:gap-14">
          <div ref={imageRef} className={`w-full max-w-64 sm:max-w-72 lg:max-w-none aspect-[3/4] lg:aspect-square xl:aspect-[4/5] mx-auto lg:mx-0 rounded-3xl relative overflow-hidden ${slideInLeft} ${imageVisible ? slideInLeftVisible : slideInLeftHidden}`}>
            <div className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <Image src={userImages[currentImageIndex]} alt="Mir Ahnaf Ali" fill className='object-cover rounded-3xl' priority />
            </div>
          </div>

          <div ref={descRef} className={`min-w-0 w-full ${slideInRight} ${descVisible ? slideInRightVisible : slideInRightHidden}`}>
            <p className={`mb-6 max-w-none font-Ovo text-sm sm:text-base leading-6 sm:leading-7 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm Mir Ahnaf Ali, an IT Support Analyst at Beth Israel Lahey Health and a Computer Science graduate from UMass Boston, where I graduated summa cum laude with a 3.93 GPA. I have 2+ years of IT experience across healthcare and academia, supporting enterprise systems, resolving technical issues, and strengthening identity and access security using Active Directory, Entra ID, MFA/SSO, and Delinea. I hold the CompTIA Security+ certification and built a Wazuh Mini-SOC lab focused on alert triage, log analysis, incident investigation, and MITRE ATT&CK-mapped detections. I'm currently focused on growing at BILH, expanding my healthcare IT and security experience, and preparing for a future transition into cybersecurity while remaining open to the right internal or external Security Analyst opportunity.
            </p>

            <div ref={infoRef} className={`${fadeInUp} ${infoVisible ? fadeInUpVisible : fadeInUpHidden}`}>
              <ul className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full items-stretch relative'>
              {infoList.map(({ icon, iconDark, title, description }, index) => {
                if (title === 'Certifications') {
                  return (
                    <li
                      key={index}
                      className={`relative border-[0.5px] ${isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-white'} rounded-xl p-4 sm:p-5 cursor-pointer transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg h-full ${isPopoverOpen('Certifications') ? 'z-30' : 'z-10'}`}
                      onMouseEnter={() => handleMouseEnter('Certifications')}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handlePopoverToggle('Certifications')}
                    >
                      <div>
                        <MdWorkspacePremium className={`w-7 h-7 sm:w-8 sm:h-8 mt-1 ${isDark ? 'text-gray-200' : 'text-gray-700'}`} />
                        <h3 className={`my-2 sm:my-3 font-semibold text-sm sm:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                        <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
                      </div>
                      {isPopoverOpen('Certifications') && (
                        <>
                          <div className="absolute left-0 right-0 h-4 z-[99998]" style={{ top: '100%' }} />
                          <div className={`absolute right-0 top-full z-[99999] w-[min(20rem,calc(100vw-2rem))] mt-4 ${isDark ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-gray-200'} backdrop-blur-md rounded-xl p-6 shadow-2xl border animate-fade-in flex flex-col items-center text-center`}>
                            <Image src={assets.comptia} alt='CompTIA Security+' className='w-24 mb-3' />
                            <h3 className={`text-xl font-bold font-Ovo mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                            <div className={`font-semibold mb-1 font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>CompTIA Security+ (SY0-701)</div>
                            <div className={`mb-1 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Issued: <span className={`font-bold font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Sep 2025</span></div>
                            <div className={`mb-4 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Expires: <span className={`font-bold font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Sep 2028</span></div>
                            <a
                              href='https://www.credly.com/badges/a57e33ad-27a0-425a-9fea-56de7c270c8c'
                              target='_blank'
                              rel='noopener noreferrer'
                              className={`px-6 py-2 border rounded-full ${isDark ? 'border-gray-500 bg-gray-700/80 text-gray-200 hover:bg-gray-600/80' : 'border-gray-500 bg-white/80 text-gray-700 hover:bg-gray-50/80'} inline-flex items-center gap-2 backdrop-blur-sm transition-all duration-300 w-fit mx-auto mt-2 shadow-sm hover:scale-105 hover:shadow-md text-sm`}
                            >
                              Verify on Credly
                              <span className='text-xs'>↗</span>
                            </a>
                          </div>
                        </>
                      )}
                    </li>
                  );
                }

                if (title === 'Education') {
                  return (
                    <li
                      key={index}
                      className={`relative border-[0.5px] ${isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-white'} rounded-xl p-4 sm:p-5 cursor-pointer transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg h-full ${isPopoverOpen('Education') ? 'z-30' : 'z-10'}`}
                      onMouseEnter={() => handleMouseEnter('Education')}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handlePopoverToggle('Education')}
                    >
                      <div>
                        <Image src={isDark ? iconDark : icon} alt={title} className='w-6 sm:w-7 mt-1' />
                        <h3 className={`my-2 sm:my-3 font-semibold text-sm sm:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                        <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
                      </div>
                      {isPopoverOpen('Education') && (
                        <>
                          <div className="absolute left-0 right-0 h-4 z-[99998]" style={{ top: '100%' }} />
                          <div className={`absolute left-0 top-full z-[99999] w-[min(20rem,calc(100vw-2rem))] mt-4 ${isDark ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-gray-200'} backdrop-blur-md rounded-xl p-6 shadow-2xl border animate-fade-in flex flex-col items-center text-center`}>
                            <Image src={assets.umass_logo} alt='UMass Boston Logo' className='w-16 mb-4' />
                            <h3 className={`text-xl font-bold font-Ovo mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                            <div className={`font-semibold mb-1 font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>University of Massachusetts Boston</div>
                            <div className={`mb-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Graduated: <span className={`font-bold font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>May 2026</span></div>
                            <div className={`mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Computer Science, Bachelor of Science</div>
                            <div className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>GPA: <span className={`font-bold font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>3.932</span></div>
                            <button
                              onClick={() => document.getElementById('Academics')?.scrollIntoView({ behavior: 'smooth' })}
                              className={`px-6 py-2 border rounded-full ${isDark ? 'border-gray-500 bg-gray-700/80 text-gray-200 hover:bg-gray-600/80' : 'border-gray-500 bg-white/80 text-gray-700 hover:bg-gray-50/80'} flex items-center gap-2 backdrop-blur-sm transition-all duration-300 w-fit mx-auto mt-2 shadow-sm hover:scale-105 hover:shadow-md`}
                            >
                              More Details
                              <Image src={isDark ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-4' />
                            </button>
                          </div>
                        </>
                      )}
                    </li>
                  );
                }

                if (title === 'Projects') {
                  return (
                    <li
                      key={index}
                      className={`relative border-[0.5px] ${isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-400 bg-white'} rounded-xl p-4 sm:p-5 cursor-pointer transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg h-full ${isPopoverOpen('Projects') ? 'z-30' : 'z-10'}`}
                      onMouseEnter={() => handleMouseEnter('Projects')}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handlePopoverToggle('Projects')}
                    >
                      <div>
                        <Image src={isDark ? iconDark : icon} alt={title} className='w-6 sm:w-7 mt-1' />
                        <h3 className={`my-2 sm:my-3 font-semibold text-sm sm:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                        <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
                      </div>
                      {isPopoverOpen('Projects') && (
                        <>
                          <div className="absolute left-0 right-0 h-4 z-[99998]" style={{ top: '100%' }} />
                          <div className={`absolute left-1/2 top-full z-[99999] w-[min(24rem,calc(100vw-2rem))] -translate-x-1/2 mt-4 ${isDark ? 'bg-gray-800/95 border-gray-600' : 'bg-white/95 border-gray-200'} backdrop-blur-md rounded-xl p-6 shadow-2xl border animate-fade-in`}>
                            <h3 className={`text-2xl font-bold mb-4 text-center font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Projects</h3>
                            <ul className='space-y-3'>
                              {projectsData.map((proj) => (
                                <li
                                  key={proj.name}
                                  className={`flex items-center justify-between gap-2 p-2 rounded-lg transition-all duration-300 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} hover:scale-105 hover:shadow-md cursor-pointer`}
                                  onClick={() => {
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                    setTimeout(() => {
                                      window.dispatchEvent(new CustomEvent('navigateToProject', { detail: { projectIndex: proj.carouselIndex ?? 0 } }));
                                    }, 800);
                                  }}
                                >
                                  <div className='flex flex-col items-start'>
                                    <span className={`font-semibold font-Ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{proj.name}</span>
                                    <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{proj.type} &bull; {proj.hours} hrs</span>
                                  </div>
                                  <div className='flex gap-2 items-center'>
                                    {proj.languages.map(lang => {
                                      const toolIcon = projectToolIcons[lang];
                                      if (toolIcon) {
                                        const { Icon, color, label } = toolIcon;
                                        return (
                                          <Icon
                                            key={lang}
                                            title={label}
                                            style={{ color, width: 22, height: 22 }}
                                          />
                                        );
                                      }
                                      return (
                                        <Image
                                          key={lang}
                                          src={assets[lang]}
                                          alt={lang}
                                          width={lang === 'csharp' ? 32 : 24}
                                          height={lang === 'csharp' ? 32 : 24}
                                          title={lang.toUpperCase()}
                                          style={lang === 'csharp' ? { marginBottom: '-4px' } : {}}
                                        />
                                      );
                                    })}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </li>
                  );
                }

                return (
                  <li
                    key={index}
                    className={`border-[0.5px] ${isDark ? 'border-gray-600 bg-gray-800 hover:bg-gray-700' : 'border-gray-400 bg-white hover:bg-lightHover'} rounded-xl p-4 sm:p-5 cursor-pointer transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg h-full`}
                  >
                    <Image src={isDark ? iconDark : icon} alt={title} className='w-6 sm:w-7 mt-1' />
                    <h3 className={`my-2 sm:my-3 font-semibold text-sm sm:text-base ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
                    <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
                  </li>
                );
              })}
              </ul>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div ref={skillsRef} className={`relative z-10 mt-6 sm:mt-8 ${fadeInUp} ${skillsVisible ? fadeInUpVisible : fadeInUpHidden}`}>
          <h4 className={`mb-4 sm:mb-5 font-Ovo text-base sm:text-lg ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Skills & Expertise</h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 items-stretch'>
            {skillsData.map(({ label, Icon, skills }) => (
              <div
                key={label}
                className={`h-full rounded-xl border p-4 ${isDark ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-white shadow-sm'}`}
              >
                <div className='flex items-center gap-2 mb-3'>
                  <Icon className={`w-4 h-4 flex-shrink-0 ${labelClass}`} />
                  <span className={`text-[10px] sm:text-[11px] uppercase tracking-[0.14em] font-semibold ${labelClass}`}>{label}</span>
                </div>
                <div className='flex flex-wrap gap-1.5'>
                  {skills.map(skill => (
                    <span key={skill} className={`px-2.5 py-0.5 rounded-full text-xs border ${pillClass}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
