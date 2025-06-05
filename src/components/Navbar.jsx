import React from 'react'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'
import { NavLink ,useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img src={logo} alt="" srcSet="" />
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/Products'><li>Products</li></NavLink>
        <NavLink to='/About'><li>About</li></NavLink>
        <NavLink to='/Contact'><li>Contact</li></NavLink>
        <NavLink to='/Jobs'><li>Jobs</li></NavLink>
      </ul>
      <button onClick={() => navigate('/Contact', {replace: true})}> Get this.state.</button>
    </div>
  )
}

export default Navbar
