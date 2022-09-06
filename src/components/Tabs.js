import React from 'react'
import styled from 'styled-components'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'

function TabsBar() {
 return (
  <Wrapper>
   <div className="tabDiv">
    <Tabs
     variant="scrollable"
     scrollButtons={false}
     aria-label="scrollable prevent tabs example"
    >
     <Link to="/">
      <Tab
       className="tabs1"
       label="About"
       style={{ fontSize: '0.5rem', marginRight: '0.5rem' }}
      />
     </Link>
     <Link to="/">
      <Tab
       className="tabs2"
       label="Process"
       style={{
        fontSize: '0.5rem',
        marginRight: '0.5rem',
        marginLeft: '0.5rem',
       }}
      />
     </Link>
     <Link to="/">
      <Tab
       className="tabs3"
       label="Contact"
       style={{ fontSize: '0.5rem', marginLeft: '0.5rem' }}
      />
     </Link>
     {/* <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" /> */}
    </Tabs>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 position: relative;
 width: 100%;

 .tabDiv {
  display: grid;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  width: 100%;
 }
 .tabs1,
 .tabs2,
 .tabs3 {
  background: var(--clr-grey-5);
  color: var(--clr-bcg);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  border-color: transparent;
  text-transform: capitalize;
  transition: all 0.3s linear;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
 }
 .tabs1,
 .tabs2,
 .tabs3 {
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  color: var(--clr-font);
  border: 2px solid var(--clr-primary);
  padding: 0.45rem 0.8rem;
  display: inline-block;
  transition: var(--Transition);
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: var(--mainBorderRadius);
  border-color: transparent;
 }
 .tabs1,
 .tabs2,
 .tabs3 {
  background: var(--clr-bcg);
  color: var(--clr-black);
  padding: 1rem;
 }
 @media (min-width: 576px) {
 }
 @media only screen and (max-width: 600px) {
  position: relative;
  .tabDiv {
   display: inline-flex;
   align-items: center;
   text-align: center;
   justify-content: center;
   width: 100%;
  }
 }
 @media only screen and (min-width: 600px) {
 }
 @media only screen and (min-width: 768px) and (max-width: 790px) {
 }
 @media only screen and (min-width: 860px) and (max-width: 992px) {
 }
 @media (min-width: 1280px) {
 }
`
export default TabsBar
