import NavBar from './components/navBar'
import Hero from './components/hero'
import Skills from './components/Skills'
import Contact from './components/contact'
import Work from './components/work'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
       <Hero />
            <Skills />
            <Work />
            <Contact />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Skills />
            <Work />
            <Contact />
          </>
        } />
        <Route path="/home" element={
          <>
            <Hero />
            <Skills />
            <Work />
            <Contact />
          </>
        } />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
