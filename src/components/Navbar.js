import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import PersonIcon from '@mui/icons-material/Person'


const Navbar = () => {
 var navStatus = false
 var navButton

 function navClicked() {
  if (navStatus == false) {
   console.log('hey')
   navStatus = true
  } else {
   navStatus = false
  }
 }

 return (
  <Wrapper>
   <div className="nav-center">

    <div className="nav-header">
     <PersonIcon style={{ color: 'white', cursor: 'pointer' }}></PersonIcon>
     <div>
      {navButton ? (
       <ArrowDropUpIcon
        style={{ marginLeft: '20px', color: 'white', cursor: 'pointer' }}
        onClick={navClicked}
       ></ArrowDropUpIcon>
      ) : (
       <ArrowDropDownIcon
        style={{ marginLeft: '20px', color: 'white', cursor: 'pointer' }}
        onClick={navClicked}
       ></ArrowDropDownIcon>
      )}
     </div>
    </div>
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
  height: 45px;
  width: 125px;
 }

 @media screen and (min-width: 800px) {
  .nav-center {
   max-width: 100%;
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
 }

 @media screen and (max-width: 600px) {
  .nav-center {
   max-width: 100%;
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
 }
`

export default Navbar
