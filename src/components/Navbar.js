import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.PNG'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../utils/context'
const Navbar = () => {
 const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
 return (
  <nav className="nav">
   <div className="nav-center">
    <div className="nav-header">
     <Link to="/">
      <img
       src={logo}
       className="nav-logo"
       alt="stripe"
       style={{
        height: '3rem',
        marginTop: '0.5rem',
        width: '7rem',
        borderRadius: '1rem',
       }}
      />
     </Link>
     <button className="btn toggle-btn" onClick={openSidebar}>
      <FaBars />
     </button>
    </div>
    <ul className="nav-links">
     <li>
      <Link to="/">
       {' '}
       <button className="link-btn">About</button>
      </Link>
     </li>
     <li>
      <Link to="/">
       <button className="link-btn">Team</button>
      </Link>
     </li>
     <li>
      <Link to="/">
       <button className="link-btn">Process</button>
      </Link>
     </li>
     <li>
      <Link to="/">
       <button className="link-btn">Contact</button>
      </Link>
     </li>
    </ul>

    <Link to="/register">
     <button className="btn signin-btn">Sign In</button>
    </Link>
   </div>
  </nav>
 )
}

export default Navbar
