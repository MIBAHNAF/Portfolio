import Image from 'next/image'

export const metadata = {
  title: 'Project Images - Mir Ahnaf Ali Portfolio',
  description: 'Gallery of project screenshots and images from software engineering projects by Mir Ahnaf Ali',
}

export default function ImagesPage() {
  const images = [
    {
      src: '/user-image.png',
      alt: 'Mir Ahnaf Ali - Software Engineer and Computer Science Student',
      title: 'Mir Ahnaf Ali',
      description: 'Software Engineer and Computer Science student at UMass Boston'
    },
    {
      src: '/nfc-1.png',
      alt: 'NFC Apple Pay Attendance System Interface - Mir Ahnaf Ali',
      title: 'NFC Attendance System',
      description: 'Cross-platform NFC attendance tracking system interface'
    },
    {
      src: '/nfc-2.png',
      alt: 'Arduino NFC Setup - Mir Ahnaf Ali Project',
      title: 'Arduino NFC Hardware',
      description: 'Arduino setup for NFC card reading system'
    },
    {
      src: '/attendance-1.png',
      alt: 'Attendance Dashboard - Mir Ahnaf Ali Web Application',
      title: 'Attendance Dashboard',
      description: 'Web-based attendance tracking dashboard'
    },
    {
      src: '/attendance-2.png',
      alt: 'SMS Notification System - Mir Ahnaf Ali',
      title: 'SMS Notification System',
      description: 'Automated SMS notification interface'
    },
    {
      src: '/movie-1.png',
      alt: 'Movie Recommendation App - Mir Ahnaf Ali ML Project',
      title: 'Movie Recommendation System',
      description: 'Machine learning movie recommendation interface'
    },
    {
      src: '/movie-2.png',
      alt: 'ML Algorithm Visualization - Mir Ahnaf Ali',
      title: 'ML Algorithm Visualization',
      description: 'Data visualization for movie recommendation algorithm'
    },
    {
      src: '/construction-1.png',
      alt: 'Construction Website - Mir Ahnaf Ali Web Development',
      title: 'Construction Company Website',
      description: 'Responsive construction company website homepage'
    },
    {
      src: '/construction-2.png',
      alt: 'Website Services Section - Mir Ahnaf Ali',
      title: 'Services Section Design',
      description: 'Interactive services section of construction website'
    },
    {
      src: '/horror-1.png',
      alt: 'Hallucinations Horror Game - Mir Ahnaf Ali Unity Project',
      title: 'Hallucinations Horror Game',
      description: 'Unity horror game screenshot showing gameplay'
    },
    {
      src: '/horror-2.png',
      alt: 'Game UI Interface - Mir Ahnaf Ali Unity Development',
      title: 'Horror Game UI',
      description: 'Custom UI interface for horror game'
    },
    {
      src: '/portfolio-1.png',
      alt: 'Portfolio Website Homepage - Mir Ahnaf Ali',
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with Next.js'
    },
    {
      src: '/portfolio-2.png',
      alt: 'Portfolio Projects Section - Mir Ahnaf Ali',
      title: 'Portfolio Projects Section',
      description: 'Interactive projects carousel on portfolio website'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Project Images - Mir Ahnaf Ali
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          Gallery of screenshots and images from my software engineering projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
