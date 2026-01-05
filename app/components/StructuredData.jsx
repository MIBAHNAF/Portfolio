export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mir Ahnaf Ali",
    "jobTitle": "Software Engineer",
    "description": "Computer Science student at UMass Amherst specializing in full-stack development, machine learning, and software engineering",
    "url": "https://mirahnaf-ali.com",
    "image": "https://mirahnaf-ali.com/user-image.png",
    "sameAs": [
      "https://github.com/MIBAHNAF",
      "https://linkedin.com/in/mirahnafali"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Massachusetts Bosoton",
    },
    "knowsAbout": [
      "Software Engineering",
      "IT Systems and Security",
      "Machine Learning",
      "Web Development",
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "Unity",
      "Game Development"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Bachelor of Science in Computer Science",
      "educationalLevel": "Undergraduate"
    },
    "workExample": [
      {
        "@type": "CreativeWork",
        "name": "NFC Apple Pay Attendance System",
        "description": "Cross-platform NFC attendance system with dual USB/BLE transport, EMV card parsing, and Excel automation",
        "image": "https://mirahnaf-ali.com/nfc-1.png",
        "url": "https://github.com/MIBAHNAF/NFC-Attendance"
      },
      {
        "@type": "CreativeWork",
        "name": "Automated Attendance SMS System",
        "description": "Web-based attendance and grading system with SMS notifications and real-time tracking",
        "image": "https://mirahnaf-ali.com/attendance-1.png",
        "url": "https://github.com/MIBAHNAF/attendance-system"
      },
      {
        "@type": "CreativeWork",
        "name": "Movie Recommendation App",
        "description": "Machine learning movie recommendation app using Scikit-learn and MovieLens datasets",
        "image": "https://mirahnaf-ali.com/movie-1.png",
        "url": "https://github.com/MIBAHNAF/Movie-Recommendation"
      },
      {
        "@type": "CreativeWork",
        "name": "Hallucinations Horror Game",
        "description": "Psychological horror game built in Unity with C# scripting and AI-generated voice lines",
        "image": "https://mirahnaf-ali.com/horror-1.png",
        "url": "https://github.com/MIBAHNAF/Hallucinations"
      },
      {
        "@type": "CreativeWork",
        "name": "Portfolio Website",
        "description": "Personal portfolio website built with Next.js, React, and modern web technologies",
        "image": "https://mirahnaf-ali.com/portfolio-1.png",
        "url": "https://mirahnaf-ali.com"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
