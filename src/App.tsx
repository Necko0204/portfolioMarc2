import './App.css'
import { MotionConfig } from 'motion/react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Profile } from './sections/Profile'
import { Experience } from './sections/Experience'
import { Work } from './sections/Work'
import { FeaturedProject } from './components/FeaturedProject'
import { Stack } from './sections/Stack'
import { ResumeExtras } from './sections/ResumeExtras'
import { Contact } from './sections/Contact'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell min-h-screen">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <div className="portfolio-frame">
          <main id="main-content">
            <Hero />
            <Profile />
            <Experience />
            <Work />
            <FeaturedProject />
            <Stack />
            <ResumeExtras />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  )
}

export default App
