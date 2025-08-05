import Image from 'next/image'

export const metadata = {
  title: 'Mir Ahnaf Ali - Software Engineer Portfolio',
  description: 'Professional profile and image of Mir Ahnaf Ali - Software Engineer and Computer Science student at UMass Boston',
}

export default function ImagesPage() {
  const images = [
    {
      src: '/user-image.png',
      alt: 'Mir Ahnaf Ali - Software Engineer and Computer Science Student',
      title: 'Mir Ahnaf Ali',
      description: 'Software Engineer and Computer Science student at UMass Boston'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Mir Ahnaf Ali - Software Engineer
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          Professional profile and image of a Computer Science student at UMass Boston
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
