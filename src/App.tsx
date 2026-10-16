import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import CommunityRoles from './components/CommunityRoles'
import Skills from './components/Skills'
import SelectedWork from './components/SelectedWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  // Scroll-triggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <CommunityRoles />
        <Skills />
        <SelectedWork />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
