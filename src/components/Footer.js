import React, { Component } from 'react'
import styled from 'styled-components'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ContactsIcon from '@mui/icons-material/Contacts'
import AddBoxIcon from '@mui/icons-material/AddBox'
import CallIcon from '@mui/icons-material/Call'
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import SettingsIcon from '@mui/icons-material/Settings'

var logInStatus = true
var logInVal = null

function navClicked() {
 console.log('Hey')
}
class Footer extends React.Component {
 renderFooter() {
  if (
   logInStatus == false &&
   window.matchMedia('(max-width: 600px)').matches == true
  ) {
   return (
    <>
     <Wrapper>
      <h5>
       {new Date().getFullYear()}
       <span> All Rights Reserved. </span>
      </h5>
      <h5> Gifting Mindset.</h5>
     </Wrapper>
    </>
   )
  }
  if (
   logInStatus == false &&
   window.matchMedia('(min-width: 800px)').matches == true
  ) {
   return (
    <>
     <Wrapper>
      <h5>
       {new Date().getFullYear()}
       <span> All Rights Reserved. </span>
      </h5>
      <h5> Gifting Mindset.</h5>
     </Wrapper>
    </>
   )
  }
  if (
   logInStatus == true &&
   window.matchMedia('(min-width: 800px)').matches == true
  ) {
   return (
    <>
     <Wrapper>
      <h5>
       {new Date().getFullYear()}
       <span> All Rights Reserved. </span>
      </h5>
      <h5> Gifting Mindset.</h5>
     </Wrapper>
    </>
   )
  }
  if (
   logInStatus == true &&
   window.matchMedia('(max-width: 600px)').matches == true
  ) {
   return (
    <>
     <Wrapper2>
      <BottomNavigation
       style={{
        marginTop: '10%',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
       }}
      >
       <BottomNavigationAction
        style={{ color: 'white' }}
        label="Recents"
        icon={<CallIcon onClick={navClicked()} />}
       />
       <BottomNavigationAction
        style={{ color: 'white' }}
        label="Favorites"
        icon={<AddBusinessIcon />}
       />
       <BottomNavigationAction
        style={{ color: 'white' }}
        label="Nearby"
        icon={<SettingsIcon />}
       />
      </BottomNavigation>
     </Wrapper2>
    </>
   )
  }
 }
 render() {
  return <>{this.renderFooter()}</>
 }
}

const Wrapper2 = styled.div`
 height: 17%;
 width: 100%;
 font-family: roboto;
 bottom: 0;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 background: var(--clr-white);
 text-align: center;
 position: fixed;
`

const Wrapper = styled.footer`
 width: 100%;
 font-family: roboto;
 bottom: 0;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 background: var(--clr-black);
 text-align: center;
 position: absolute;
 span {
  color: var(--clr-grey-9);
 }
 h5 {
  color: var(--clr-white);
  margin: 0.1rem;
  font-weight: 400;
  text-transform: none;
  line-height: 1;
 }
 @media (min-width: 776px) {
  height: 10rem;
 }
 @media (max-width: 600px) {
  height: 10rem;
 }
 @media (min-width: 992px) {
  height: 10rem;
 }

 @media (min-width: 1280px) {
  height: 10rem;
 }
`

export default Footer
