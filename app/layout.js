import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next"
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-collision";
import StructuredData from "./components/StructuredData";

const outfit =Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  title: "Mir Ahnaf Ali - Full Stack Software Engineer",
  description: "Mir Ahnaf Ali - Computer Science student at UMass Boston specializing in full-stack development, machine learning, and software engineering. Explore my projects and GitHub repositories.",
  keywords: "Mir Ahnaf Ali, Software Engineer, Full Stack Developer, Computer Science, UMass Boston, GitHub, Projects, Python, React, Next.js",
  author: "Mir Ahnaf Ali",
  
  openGraph: {
    title: "Mir Ahnaf Ali - Full Stack Software Engineer",
    description: "Computer Science student at UMass Boston specializing in full-stack development and software engineering. Check out my GitHub projects and portfolio.",
    url: "https://mirahnaf-ali.com",
    siteName: "Mir Ahnaf Ali Portfolio",
    images: [
      {
        url: "https://mirahnaf-ali.com/user-image.png",
        width: 1200,
        height: 630,
        alt: "Mir Ahnaf Ali - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/fav.png',
    shortcut: '/fav.png',
    apple: '/fav.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
          overflow-x-hidden`}
      >
        <ThemeProvider>
          <BackgroundBeamsWithCollision />
          <div className="min-h-screen transition-colors duration-300 relative z-10">
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
