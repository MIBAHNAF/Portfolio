'use client'
import Navbar from "./components/navbar"
import Header from "./components/Header"
import About from "./components/About"
import Experiences from "./components/Experiences"
import Academics from "./components/Academics.jsx"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Experiences />
    <Academics />
    <Projects />
    <Contact />
    </>
  );
}
