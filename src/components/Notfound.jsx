import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>404 page not found</h2>
      <button onClick={() => navigate('/')}>go to homepage</button>
    </div>
  )
}

export default Notfound
