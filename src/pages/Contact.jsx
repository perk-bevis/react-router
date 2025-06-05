import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact pages</h1>
      <div className='contact-buttons'>
        <button onClick={() => navigate('info')}>contact info</button>
        <button onClick={() => navigate('form')}>contact form</button>
      </div>
    </div>
  )
}

export default Contact
