import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ContactInfo from './pages/ContactInfo'
import ContactForm from './pages/ContactForm'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDetail />} errorElement={<Error />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact/info' element={<ContactInfo />} />
          <Route path='/contact/form' element={<ContactForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
