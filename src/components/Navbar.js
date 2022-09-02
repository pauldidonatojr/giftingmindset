import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'


import styled from 'styled-components'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
const links = [
 {
  id: 1,
  url: '/about',
  text: 'about',
 },
 {
  id: 2,
  url: '/process',
  text: 'process',
 },
 {
  id: 3,
  url: '/contact',
  text: 'contact',
 },
 {
  id: 4,
  url: '/login',
  text: 'login',
 },
]

const social = [
 {
  id: 1,
  url: 'https://www.twitter.com',
  icon: <FaFacebook />,
 },
 {
  id: 2,
  url: 'https://www.twitter.com',
  icon: <FaTwitter />,
 },
 {
  id: 3,
  url: 'https://www.twitter.com',
  icon: <FaLinkedin />,
 },
 {
  id: 4,
  url: 'https://www.twitter.com',
  icon: <FaBehance />,
 },
]

const Navbar = () => {
 return (
  <Wrapper>
   <div className="nav-center">
    <div className="nav-header">
     <Link to="/"></Link>
    </div>

    <button type="button">Login</button>
   </div>

  </Wrapper>
 )
}

const Wrapper = styled.nav`
 background: var(--clr-black);
 box-shadow: var(--light-shadow);

 .nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
 }
 .nav-toggle {
  font-size: 1.5rem;
  color: var(--clr-white);
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;
 }
 .nav-toggle:hover {
  color: var(--clr-primary-5);
  transform: rotate(90deg);
 }
 .logo {
  height: 65px;
  width: 125px;
 }

 .links a {
  color: var(--clr-white);
  font-size: 1.3rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  display: block;
  padding: 0.5rem 1rem;
  transition: var(--transition);
 }
 .links a:hover {
  background: var(--clr-white);
  color: var(--clr-primary-7);
  padding-left: 1.5rem;
 }

 .links-container {
  height: 0;
  overflow: hidden;
  transition: var(--transition);
 }
 .show-container {
  height: 10rem;
 }
 @media screen and (min-width: 800px) {
  .nav-center {
   max-width: 1170px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1rem;
  }
  .nav-header {
   padding: 0;
  }
  .nav-toggle {
   display: none;
  }
  .links-container {
   height: auto !important;
  }
  .links {
   display: flex;
  }
  .links a {
   padding: 0;
   margin: 0 0.5rem;
  }
  .links a:hover {
   padding: 0;
   background: transparent;
  }
 }
`

export default Navbar
