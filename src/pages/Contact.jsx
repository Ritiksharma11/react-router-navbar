import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact</h1>
      <h1>Nested Routes</h1>
      <div>
        <button onClick={() => navigate('/contact/info')}>ContactInfo</button>
        <button onClick={() => navigate('/contact/form')}>ContactForm</button>
      </div>
    </div>
  )
}

export default Contact