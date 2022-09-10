import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const links = [
 {
  id: 1,
  url: '/',
  text: 'home',
 },
 {
  id: 2,
  url: '/about',
  text: 'about',
 },
 {
  id: 3,
  url: '/projects',
  text: 'projects',
 },
 {
  id: 4,
  url: '/contact',
  text: 'contact',
 },
 {
  id: 5,
  url: '/profile',
  text: 'profile',
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
]

function TabsBar() {
 const [showLinks, setShowLinks] = useState(false)
 const linksContainerRef = useRef(null)
 const linksRef = useRef(null)
 const toggleLinks = () => {
  setShowLinks(!showLinks)
 }
 useEffect(() => {
  const linksHeight = linksRef.current.getBoundingClientRect().height
  if (showLinks) {
   linksContainerRef.current.style.height = `${linksHeight}px`
  } else {
   linksContainerRef.current.style.height = '0px'
  }
 }, [showLinks])
 return (
  <Wrapper>
   <div className="tab-center">
    <div className="tab-header">
     <Link to="">
      <h2 class="title" onClick={toggleLinks}>
       <span class="title-word title-word-1">The</span>
       <span class="title-word title-word-2">Gifting</span>
       <span class="title-word title-word-3">Mindset</span>
      </h2>
     </Link>
 
    </div>

    <div className="tabs-container" ref={linksContainerRef}>
     <ul className="tab-link" ref={linksRef}>
      {links.map((link) => {
       const { id, url, text } = link
       return (
        <li key={id}>
         <a href={url}>{text}</a>
        </li>
       )
      })}
     </ul>
    </div>

    <ul className="tabs-icons">
     {social.map((socialIcon) => {
      const { id, url, icon } = socialIcon
      return (
       <li key={id}>
        <a href={url}>{icon}</a>
       </li>
      )
     })}
    </ul>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.nav`
 display: flex;
 align-items: center;
 justify-content: center;

 background: var(--clr-white);
 box-shadow: var(--light-shadow);

 .tab-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
 }

 .tab-toggle {
  font-size: 1.5rem;
  color: var(--clr-primary-5);
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;
 }

 .tab-toggle:hover {
  color: var(--clr-primary-1);
  transform: rotate(90deg);
 }

 .logo {
  height: 40px;
 }

 .tab-link a {
  color: var(--clr-grey-3);
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  display: block;
  padding: 0.5rem 1rem;
  transition: var(--transition);
 }

 .tab-link a:hover {
  background: var(--clr-primary-8);
  color: var(--clr-primary-5);
  padding-left: 1.5rem;
 }

 .tabs-icons {
  display: none;
 }

 .tabs-container {
  height: 0;
  overflow: hidden;
  transition: var(--transition);
 }

 .show-container {
  height: 10rem;
 }
 .title-word {
  animation: color-animation 4s linear infinite;
 }

 .title-word-1 {
  --color-1: #df8453;
  --color-2: #3d8dae;
  --color-3: #e4a9a8;
 }

 .title-word-2 {
  --color-1: #dbad4a;
  --color-2: #accfcb;
  --color-3: #17494d;
 }

 .title-word-3 {
  --color-1: #accfcb;
  --color-2: #e4a9a8;
  --color-3: #accfcb;
 }

 .title-word-4 {
  --color-1: #3d8dae;
  --color-2: #df8453;
  --color-3: #e4a9a8;
 }

 @keyframes color-animation {
  0% {
   color: var(--color-1);
  }

  32% {
   color: var(--color-1);
  }

  33% {
   color: var(--color-2);
  }

  65% {
   color: var(--color-2);
  }

  66% {
   color: var(--color-3);
  }

  99% {
   color: var(--color-3);
  }

  100% {
   color: var(--color-1);
  }
 }

 @media (min-width: 576px) {
 }

 @media only screen and (max-width: 600px) {
  padding: 0.3rem;
 }

 @media only screen and (min-width: 600px) {

 }

 @media screen and (min-width: 800px) {
  .title {
   display: flex;
   align-items: center;
   font-size: 1rem;
   font-family: 'Montserrat', sans-serif;
   font-weight: 800;
   text-transform: uppercase;
  }
  .tab-center {
   background-color: var(--clr-black);
   width: 225vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1.5rem;
  }

  .tab-header {
   padding: 0;
  }

  .tab-toggle {
   display: none;
  }

  .tabs-container {
   height: auto !important;
  }

  .tab-link {
   display: flex;
  }

  .tab-link a {
   padding: 0;
   margin: 0 0.5rem;
  }

  .tab-link a:hover {
   padding: 0;
   background: transparent;
  }

  .tabs-icons {
   display: flex;
  }

  .tabs-icons a {
   margin: 0 0.5rem;
   color: var(--clr-primary-5);
   transition: var(--transition);
  }

  .tabs-icons a:hover {
   color: var(--clr-primary-7);
  }
 }
 @media (min-width: 992px) {
 }

 @media (min-width: 1280px) {
 }
`
export default TabsBar
