import Link from 'next/link'

export const metadata = {
  title: 'Data & Links - Mir Ahnaf Ali | GitHub & Project Information',
  description: 'Quick access to Mir Ahnaf Ali\'s GitHub repositories, project links, and basic information. IT Systems and Security Analyst and Computer Science student at UMass Boston.',
  keywords: 'Mir Ahnaf Ali, GitHub, Projects, Data, Links, Software Engineer, Computer Science, UMass Boston',
}

export default function DataPage() {
  const basicInfo = {
    name: "Mir Ahnaf Ali",
    title: "IT Systems and Security Analyst & CS Student",
    university: "UMass Boston",
    major: "Computer Science",
    github: "https://github.com/MIBAHNAF",
    website: "https://mirahnaf-ali.com",
    location: "Boston, MA"
  }

  const githubProjects = [
    {
      name: "Portfolio",
      url: "https://github.com/MIBAHNAF/Portfolio",
      description: "Personal portfolio website built with Next.js"
    },
    {
      name: "NFC Attendance System",
      url: "https://github.com/MIBAHNAF/NFC-Attendance",
      description: "Cross-platform NFC attendance system with Python"
    },
    {
      name: "Attendance SMS System",
      url: "https://github.com/MIBAHNAF/attendance-system",
      description: "Web-based attendance system with SMS notifications"
    },
    {
      name: "Movie Recommendation App",
      url: "https://github.com/MIBAHNAF/Movie-Recommendation",
      description: "ML-powered movie recommendation system"
    },
    {
      name: "Web Design Experiment",
      url: "https://github.com/MIBAHNAF/Web-Design-Experiment",
      description: "Construction company website demo"
    },
    {
      name: "Hallucinations Horror Game",
      url: "https://github.com/MIBAHNAF/Hallucinations",
      description: "Unity-based psychological horror game"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Data & Links
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          Quick access to basic information and GitHub repositories
        </p>

        {/* Basic Info Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <p><span className="font-medium text-gray-700 dark:text-gray-300">Name:</span> {basicInfo.name}</p>
              <p><span className="font-medium text-gray-700 dark:text-gray-300">Title:</span> {basicInfo.title}</p>
              <p><span className="font-medium text-gray-700 dark:text-gray-300">University:</span> {basicInfo.university}</p>
              <p><span className="font-medium text-gray-700 dark:text-gray-300">Major:</span> {basicInfo.major}</p>
            </div>
            <div className="space-y-3">
              <p><span className="font-medium text-gray-700 dark:text-gray-300">Location:</span> {basicInfo.location}</p>
              <p><span className="font-medium text-gray-700 dark:text-gray-300">GitHub:</span> 
                <a href={basicInfo.github} target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                  {basicInfo.github}
                </a>
              </p>
              <p><span className="font-medium text-gray-700 dark:text-gray-300">Website:</span> 
                <a href={basicInfo.website} target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                  {basicInfo.website}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Projects Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">GitHub Repositories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {githubProjects.map((project, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    {project.name}
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {project.description}
                </p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  View on GitHub
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
