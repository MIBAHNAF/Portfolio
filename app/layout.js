import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-collision";
import StructuredData from "./components/StructuredData";

const outfit =Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  metadataBase: new URL("https://www.mirahnaf-ali.com"),
  title: "Mir Ahnaf Ali - IT Systems and Security Analyst",
  description: "Mir Ahnaf Ali is a UMass Boston Computer Science graduate pursuing Cybersecurity and Security Analyst roles, with IT support experience, CompTIA Security+, and hands-on Wazuh Mini-SOC and full-stack projects.",
  keywords: "Mir Ahnaf Ali, IT Systems and Security Analyst, Security Analyst, Cybersecurity, Systems Administration, Computer Science, UMass Boston, GitHub, Projects, Python, React, Next.js, Full-Stack Development",
  author: "Mir Ahnaf Ali",
  alternates: {
    canonical: "/",
  },
  
  openGraph: {
    title: "Mir Ahnaf Ali - IT Systems and Security Analyst",
    description: "UMass Boston Computer Science graduate pursuing Cybersecurity and Security Analyst roles, with IT support experience, CompTIA Security+, and hands-on security and full-stack projects.",
    url: "https://www.mirahnaf-ali.com",
    siteName: "Mir Ahnaf Ali Portfolio",
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
          <div className="min-h-screen relative z-10">
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
