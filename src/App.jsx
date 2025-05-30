import NavBar from './components/navBar'
import Hero from './components/hero'
import Skills from './components/Skills'
import Contact from './components/contact'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/AG-Codes" element={
          <>
            <Hero />
            <Skills />
            <Contact />
          </>
        } />
        <Route path="/AG-Codes/home" element={
          <>
            <Hero />
            <Skills />
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
