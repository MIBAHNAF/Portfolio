import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { useTheme } from '../contexts/ThemeContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getGoogleDriveDownloadLink } from '../../config/resumeLinks'

function Academics() {
  const { isDark } = useTheme();
  const [activeScholarship, setActiveScholarship] = useState(null);
  const scholarshipRefs = useRef([]);

  const [titleRef, titleInView] = useScrollAnimation();
  const [rightRef, rightInView] = useScrollAnimation();

  const TRANSCRIPT_FILE_ID = "19l-V0HF4cEurXbQQngUxX2iOuAaTQuN6";

  useEffect(() => {
    const observers = scholarshipRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const rect = entry.boundingClientRect;
              if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0) {
                setActiveScholarship(index);
              }
            }
          });
        },
        { threshold: [0.1, 0.3, 0.5, 0.7, 0.9], rootMargin: '-20% 0px -60% 0px' }
      );
      observer.observe(ref);
      return observer;
    });
    return () => { observers.forEach(o => o && o.disconnect()); };
  }, []);

  const courseCategories = [
    {
      label: "Core CS",
      courses: [
        { code: "CS 110", name: "Introduction to Computing",       grade: "A"  },
        { code: "CS 210", name: "Intermediate Computing",          grade: "A"  },
        { code: "CS 240", name: "Programming in C",                grade: "A"  },
        { code: "CS 220", name: "Applied Discrete Mathematics",    grade: "A"  },
      ]
    },
    {
      label: "Theory & Systems",
      courses: [
        { code: "CS 310", name: "Advanced Algorithms",             grade: "B+" },
        { code: "CS 420", name: "Theory of Computation",           grade: "A"  },
        { code: "CS 341", name: "Computer Architecture & Org",     grade: "A"  },
        { code: "CS 444", name: "Operating Systems",               grade: "A"  },
        { code: "CS 451", name: "Compilers",                       grade: "B+" },
        { code: "CS 450", name: "Higher Level Languages",          grade: "A"  },
      ]
    },
    {
      label: "Applied",
      courses: [
        { code: "CS 410", name: "Software Engineering",            grade: "A"  },
        { code: "CS 449", name: "Computer Security",               grade: "A"  },
        { code: "CS 461", name: "Computer Games Programming",      grade: "A"  },
        { code: "CS 285L", name: "Social Issues & Ethics",         grade: "A"  },
      ]
    },
    {
      label: "Mathematics",
      courses: [
        { code: "MATH 141",   name: "Calculus II",                 grade: "A"  },
        { code: "MATH 260",   name: "Linear Algebra",              grade: "A"  },
        { code: "MATH 345",   name: "Probability & Statistics",    grade: "A"  },
        { code: "PHYSIC 114", name: "Fundamentals of Physics II",  grade: "A"  },
      ]
    },
  ];

  const allCourses = courseCategories.flatMap(c => c.courses);
  const aCount = allCourses.filter(c => c.grade.startsWith('A')).length;
  const bCount = allCourses.filter(c => c.grade.startsWith('B')).length;

  const gradeBadge = (grade) => {
    if (grade.startsWith('A')) return isDark ? 'text-emerald-400' : 'text-emerald-600';
    if (grade.startsWith('B')) return isDark ? 'text-sky-400'     : 'text-sky-600';
    return isDark ? 'text-gray-500' : 'text-gray-400';
  };

  const scholarshipYears = [
    {
      year: "2023 – 2024",
      awards: [
        { name: "Academic Recognition Award",  type: "Merit-Based",         link: null },
        { name: "The Teehan Scholarship",      type: "Academic Excellence", link: null },
        { name: "The Paul English Scholarship",type: "CSM Excellence",      link: "https://ai.umb.edu/about-paul-english/", refIndex: 0 },
      ]
    },
    {
      year: "2024 – 2025",
      awards: [
        { name: "Donohue Scholarship",         type: "Academic Merit",      link: null },
        { name: "The Paul English Scholarship",type: "CSM Excellence",      link: "https://ai.umb.edu/about-paul-english/", refIndex: 1 },
        { name: "National Grid Scholarship",   type: "STEM Excellence",     link: null },
        { name: "Janus Scholarship",           type: "Academic Achievement",link: null },
      ]
    },
    {
      year: "2025 – 2026",
      awards: [
        { name: "Donohue Scholarship",         type: "Continued Excellence",    link: null },
        { name: "The Paul English Scholarship",type: "CSM Excellence (3rd)",    link: "https://ai.umb.edu/about-paul-english/", refIndex: 2 },
        { name: "Janus Scholarship",           type: "Continued Recognition",   link: null },
      ]
    },
  ];

  const label = (text) => (
    <p className={`text-[10px] uppercase tracking-[0.15em] mb-1 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>{text}</p>
  );

  const rowBorder = isDark ? 'border-gray-800' : 'border-gray-100';

  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div id='Academics' className='w-full px-4 sm:px-6 md:px-8 xl:px-[12%] py-10 scroll-mt-20'>

        {/* ── Title ── */}
        <div
          ref={titleRef}
          className={`text-center transition-[opacity,transform] duration-700 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h4 className={`mb-2 text-base sm:text-lg font-Ovo ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>My Education</h4>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-Ovo mb-14 sm:mb-20 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Academic Background
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24'>

          {/* ════ LEFT RAIL ════ */}
          <aside className='lg:w-56 xl:w-64 flex-shrink-0'>
            <div className='lg:sticky lg:top-28 space-y-6'>

              {/* Logo + school */}
              <div className='flex items-center gap-3 lg:block lg:space-y-3'>
                <Image
                  src={assets.umass_logo}
                  alt="UMass Boston"
                  className='w-10 h-10 lg:w-12 lg:h-12 object-contain'
                />
                <div>
                  <h3 className={`text-sm font-semibold leading-snug font-Ovo ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    University of Massachusetts Boston
                  </h3>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    B.S. Computer Science &middot; Honors
                  </p>
                </div>
              </div>

              {/* Key facts */}
              <div className={`border-t pt-5 space-y-4 ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
                <div>
                  {label("Graduated")}
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>May 2026 &middot; Boston, MA</p>
                </div>
                <div>
                  {label("Cumulative GPA")}
                  <a
                    href={getGoogleDriveDownloadLink(TRANSCRIPT_FILE_ID)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='inline-flex items-center gap-1.5 group'
                  >
                    <span
                      className={`text-sm font-semibold ${
                        isDark
                          ? 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent'
                          : 'bg-gradient-to-r from-green-700 via-blue-600 to-blue-900 bg-clip-text text-transparent'
                      }`}
                      style={{ backgroundSize: '200% 200%', animation: 'gradientShift 3s ease-in-out infinite' }}
                    >
                      3.932
                    </span>
                    <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>/4.0</span>
                    <Image src={assets.download_icon} alt='Transcript' className='w-3 h-3 opacity-30 group-hover:opacity-70 transition-opacity duration-150' />
                  </a>
                </div>
                <div>
                  {label("Honours")}
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Dean's List &times; 5</p>
                </div>
              </div>

              {/* Stats */}
              <div className={`border-t pt-5 grid grid-cols-2 gap-x-4 gap-y-5 ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
                {[
                  { value: allCourses.length, label: 'Courses',  color: isDark ? 'text-white' : 'text-gray-800' },
                  { value: 58,                label: 'Credits',  color: isDark ? 'text-white' : 'text-gray-800' },
                  { value: aCount,            label: 'A Grades', color: isDark ? 'text-emerald-400' : 'text-emerald-600' },
                  { value: bCount,            label: 'B Grades', color: isDark ? 'text-sky-400' : 'text-sky-600' },
                ].map(({ value, label: lbl, color }) => (
                  <div key={lbl}>
                    <p className={`text-2xl font-bold font-Ovo ${color}`}>{value}</p>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>{lbl}</p>
                  </div>
                ))}
              </div>

            </div>
          </aside>

          {/* ════ RIGHT: Courses + Awards ════ */}
          <div
            ref={rightRef}
            className={`flex-1 min-w-0 transition-[opacity,transform] duration-700 delay-200 ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >

            {/* ── Coursework ── */}
            <p className={`text-[10px] uppercase tracking-[0.15em] mb-8 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Relevant Coursework
            </p>

            <div className='space-y-8'>
              {courseCategories.map((category) => (
                <div key={category.label}>
                  <p className={`text-[10px] uppercase tracking-[0.15em] mb-3 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                    {category.label}
                  </p>
                  <div>
                    {category.courses.map((course, i) => (
                      <div
                        key={course.code}
                        className={`flex items-center gap-4 py-2.5 border-b ${rowBorder} ${
                          i === 0 ? `border-t ${rowBorder}` : ''
                        }`}
                      >
                        <span className={`font-mono text-xs w-20 flex-shrink-0 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          {course.code}
                        </span>
                        <span className={`flex-1 text-sm min-w-0 truncate ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {course.name}
                        </span>
                        <span className={`flex-shrink-0 text-xs font-semibold tabular-nums ${gradeBadge(course.grade)}`}>
                          {course.grade}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Divider ── */}
            <div className={`border-t my-12 ${isDark ? 'border-gray-800' : 'border-gray-100'}`} />

            {/* ── Scholarships ── */}
            <div className='flex items-baseline justify-between mb-8'>
              <p className={`text-[10px] uppercase tracking-[0.15em] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                Scholarships & Awards
              </p>
              <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>8+ awards</span>
            </div>

            <div className='space-y-10'>
              {scholarshipYears.map((yearGroup) => (
                <div key={yearGroup.year}>
                  <p className={`text-[10px] uppercase tracking-[0.15em] mb-3 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                    {yearGroup.year}
                  </p>
                  <div>
                    {yearGroup.awards.map((award, i) => {
                      const isActive = award.refIndex !== undefined && activeScholarship === award.refIndex;
                      const row = (
                        <div
                          className={`flex items-center gap-4 py-2.5 border-b transition-colors duration-150 ${rowBorder} ${
                            i === 0 ? `border-t ${rowBorder}` : ''
                          }`}
                        >
                          <span className={`flex-1 text-sm transition-colors duration-150 ${
                            isActive
                              ? (isDark ? 'text-orange-400' : 'text-blue-600')
                              : (isDark ? 'text-gray-300' : 'text-gray-700')
                          }`}>
                            {award.name}
                          </span>
                          <span className={`text-xs flex-shrink-0 transition-colors duration-150 ${
                            isActive
                              ? (isDark ? 'text-orange-400/70' : 'text-blue-400')
                              : (isDark ? 'text-gray-400' : 'text-gray-400')
                          }`}>
                            {award.type}
                          </span>
                          {award.link && (
                            <span className={`text-xs flex-shrink-0 transition-colors duration-150 ${
                              isActive
                                ? (isDark ? 'text-orange-400' : 'text-blue-500')
                                : (isDark ? 'text-gray-400' : 'text-gray-300')
                            }`}>↗</span>
                          )}
                        </div>
                      );
                      return (
                        <div
                          key={i}
                          ref={award.refIndex !== undefined ? (el) => { scholarshipRefs.current[award.refIndex] = el } : undefined}
                        >
                          {award.link
                            ? <a href={award.link} target="_blank" rel="noopener noreferrer">{row}</a>
                            : row
                          }
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Paul English callout ── */}
            <div
              ref={(el) => { scholarshipRefs.current[3] = el }}
              className={`mt-10 pl-4 border-l-2 transition-colors duration-150 ${
                activeScholarship === 3
                  ? (isDark ? 'border-orange-500' : 'border-blue-400')
                  : (isDark ? 'border-gray-800' : 'border-gray-100')
              }`}
            >
              <a href="https://ai.umb.edu/about-paul-english/" target="_blank" rel="noopener noreferrer">
                <p className={`text-[10px] uppercase tracking-[0.15em] mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                  Special Recognition
                </p>
                <p className={`text-sm leading-relaxed transition-colors duration-150 ${
                  activeScholarship === 3
                    ? (isDark ? 'text-orange-300' : 'text-blue-600')
                    : (isDark ? 'text-gray-300' : 'text-gray-600')
                }`}>
                  Three-time recipient of{' '}
                  <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>The Paul English Scholarship</span>
                  {' '}— recognizing exceptional achievement in Computer Science at UMass Boston.
                </p>
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Academics
