import React, { useEffect, useRef } from 'react'
import { Carousel, Card } from '../../components/ui/apple-cards-carousel'
import { useTheme } from '../contexts/ThemeContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Projects() {
  const { isDark } = useTheme();
  const carouselRef = useRef(null);
  
  // Animation refs and hooks
  const [titleRef, titleInView] = useScrollAnimation();
  const [carouselContainerRef, carouselContainerInView] = useScrollAnimation();

  // Listen for navigation events from About section
  useEffect(() => {
    const handleNavigateToProject = (event) => {
      const { projectIndex } = event.detail;
      navigateToProjectCard(projectIndex);
    };

    window.addEventListener('navigateToProject', handleNavigateToProject);
    
    return () => {
      window.removeEventListener('navigateToProject', handleNavigateToProject);
    };
  }, []);

  // Function to navigate to specific project card
  const navigateToProjectCard = (index) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current.querySelector('[data-carousel-container]');
      if (carousel) {
        const screenWidth = window.innerWidth;
        let cardWidth, gap;
        
        if (screenWidth < 640) { // Mobile
          cardWidth = 230;
          gap = 16;
        } else if (screenWidth < 768) { // Small tablets
          cardWidth = 280;
          gap = 16;
        } else { // Desktop and larger tablets
          cardWidth = 384;
          gap = 16;
        }
        
        const scrollPosition = (cardWidth + gap) * index;
        
        carousel.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const projects = [
    {
      category: "Course Project",
      title: "NFC Apple Pay Attendance System",
      src: "/nfc-1.png",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg font-sans mb-6 sm:mb-8">
            Built a cross-platform NFC attendance system with dual USB/BLE transport, EMV card parsing, and Excel automation using Python, Arduino, and Tkinter. (~30 hours development time)
          </p>
          
          <div className="mb-6 sm:mb-8">
            <h4 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3 sm:mb-4">Key Features:</h4>
            <ul className="text-neutral-600 dark:text-neutral-400 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>• Cross-platform NFC attendance tracking</li>
              <li>• Dual USB/BLE transport support</li>
              <li>• EMV card parsing for Apple Pay integration</li>
              <li>• Automated Excel report generation</li>
              <li>• Real-time attendance monitoring</li>
            </ul>
          </div>

          <div className="mb-6 sm:mb-8">
            <h4 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3 sm:mb-4">Technologies Used:</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['Python', 'C++', 'Arduino', 'Tkinter', 'NFC', 'Bluetooth', 'Excel API'].map((tech) => (
                <span key={tech} className="px-2 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs sm:text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <img
              src="/nfc-1.png"
              alt="NFC Attendance System Interface"
              height="500"
              width="500"
              className="rounded-lg object-cover h-32 sm:h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/nfc-2.png"
              alt="Arduino NFC Setup"
              height="500"
              width="500"
              className="rounded-lg object-cover h-32 sm:h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>

          <div className="flex gap-3 sm:gap-4">
            <a 
              href="https://github.com/MIBAHNAF/NFC-Attendance" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:transform hover:scale-105 hover:shadow-md transition-all duration-300 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="hidden sm:inline">View on GitHub</span>
              <span className="sm:hidden">GitHub</span>
            </a>
          </div>
        </div>
      ),
    },
    {
      category: "Client Project",
      title: "Automated Attendance SMS System",
      src: "/attendance-1.png",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mb-8">
            Built a web-based attendance and grading system using Next.js, TypeScript, Tailwind CSS, and Supabase, integrating SMS Chef API for automated attendance notifications and real-time student tracking. (~60 hours development time)
          </p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Key Features:</h4>
            <ul className="text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>• Automated SMS notifications for attendance</li>
              <li>• Real-time student tracking dashboard</li>
              <li>• Comprehensive grading system</li>
              <li>• Teacher and admin role management</li>
              <li>• Student performance analytics</li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'SMS Chef API', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <img
              src="/attendance-1.png"
              alt="Attendance Dashboard"
              height="500"
              width="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/attendance-2.png"
              alt="SMS Notification System"
              height="500"
              width="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/MIBAHNAF/attendance-system" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:transform hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            <a 
              href="https://attendance-system-six-zeta.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:transform hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      ),
    },
    {
      category: "Personal Project",
      title: "Movie Recommendation App",
      src: "/movie-1.png",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mb-8">
            Developed a machine learning movie recommendation app using Python, Scikit-learn, pandas, and MovieLens datasets to provide users with personalized recommendations based on movie themes. (~30 hours development time)
          </p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Key Features:</h4>
            <ul className="text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>• Personalized movie recommendations</li>
              <li>• Content-based filtering algorithm</li>
              <li>• MovieLens dataset integration</li>
              <li>• Theme-based movie analysis</li>
              <li>• Interactive user interface</li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'MovieLens Dataset', 'Streamlit'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <img
              src="/movie-1.png"
              alt="Movie Recommendation Interface"
              height="500"
              width="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/movie-2.png"
              alt="ML Algorithm Visualization"
              height="500"
              width="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/MIBAHNAF/Movie-Recommendation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:transform hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      ),
    },
    {
      category: "Fellowship Project",
      title: "Demo Construction Website",
      src: "/construction-1.png",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mb-8">
            Developed a fully responsive front-end website for a construction company using JavaScript, HTML, CSS, Bootstrap, and jQuery, incorporating JavaScript functionality to enhance user interaction and provide a dynamic browsing experience. (~40 hours development time)
          </p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Key Features:</h4>
            <ul className="text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>• Fully responsive design for all devices</li>
              <li>• Interactive service portfolio</li>
              <li>• Dynamic project gallery</li>
              <li>• Contact form with validation</li>
              <li>• Smooth scrolling navigation</li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Responsive Design'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <img
              src="/construction-1.png"
              alt="Construction Website Homepage"
              height="500"
              width="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/construction-2.png"
              alt="Website Services Section"
              height="500"
              width="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/MIBAHNAF/Web-Design-Experiment" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:transform hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            <a 
              href="https://mibahnaf.github.io/Web-Design-Experiment/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:transform hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Live Website
            </a>
          </div>
        </div>
      ),
    },
    {
      category: "Course Project",
      title: "Hallucinations Horror Game",
      src: "/horror-1.png",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mb-8">
            Hallucinations is a psychological horror game where reality blurs and survival depends on your mind. Built in Unity (URP) with C# scripting, custom Timeline cutscenes, Canvas UI, and ChatGPT-generated voice lines. Features scripted entity behavior, level transitions, and immersive horror design(~80 hours development time).
          </p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Key Features:</h4>
            <ul className="text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>• Psychological horror gameplay mechanics</li>
              <li>• Custom Timeline cutscenes</li>
              <li>• AI-generated voice lines with ChatGPT</li>
              <li>• Scripted entity behavior system</li>
              <li>• Immersive level transitions</li>
              <li>• Dynamic Canvas UI system</li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {['Unity URP', 'C#', 'Timeline', 'Canvas UI', 'ChatGPT API', 'Audio System'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <img
              src="/horror-1.png"
              alt="Horror Game Screenshot"
              height="500"
              width="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/horror-2.png"
              alt="Game UI Interface"
              height="500"
              width="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/MIBAHNAF/Hallucinations" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:transform hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            <a 
              href="https://sites.google.com/site/fdurupinar/home/teaching/cs461?authuser=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:transform hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Course Showcase
            </a>
          </div>
        </div>
      ),
    },
    {
      category: "Personal Project",
      title: "Portfolio Website",
      src: "/portfolio-1.png",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans mb-8">
            This very portfolio website you're viewing! Built with modern web technologies including Next.js, React, Tailwind CSS, and Framer Motion. Features responsive design, dark mode support, smooth animations, and an interactive project carousel using Aceternity UI components (~70 hours development time).
          </p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Key Features:</h4>
            <ul className="text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>• Fully responsive design</li>
              <li>• Dark/Light mode toggle</li>
              <li>• Interactive project carousel</li>
              <li>• Smooth scroll animations</li>
              <li>• Academic section with transcript download</li>
              <li>• Contact form integration</li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Aceternity UI', 'JavaScript'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <img
              src="/portfolio-1.png"
              alt="Portfolio Homepage"
              height="500"
              width="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/portfolio-2.png"
              alt="Portfolio Projects Section"
              height="500"
              width="500"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>

          <div className="flex gap-4">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              You're Here!
            </span>
          </div>
        </div>
      ),
    },
  ];

  const cards = projects.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id='projects' className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-6 md:py-10 scroll-mt-20' ref={carouselRef}>
      <div 
        ref={titleRef}
        className={`text-center transition-all duration-1000 ${titleInView ? 'fadeInUp' : 'opacity-0 translate-y-8'}`}
      >
        <h4 className={`mb-2 text-base sm:text-lg font-Ovo ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>My Work</h4>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-Ovo mb-6 sm:mb-8 md:mb-10 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Projects
        </h2>
      </div>
      <div 
        ref={carouselContainerRef}
        className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 ${carouselContainerInView ? 'scaleIn' : 'opacity-0 scale-95'}`}
      >
        <Carousel items={cards} />
      </div>
    </div>
  )
}

export default Projects
