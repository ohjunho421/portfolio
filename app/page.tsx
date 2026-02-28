import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import PeopleSay from '@/components/PeopleSay'
import Contact from '@/components/Contact'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        본문으로 이동
      </a>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <PeopleSay />
      <Contact />
      <Chatbot />
    </>
  )
}
