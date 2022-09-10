import React from 'react'
// import Hero from '../components/Hero.js'
import Hero2 from '../components/Hero2.js'
import styled from 'styled-components'
function HomePage() {
 return (
  <Wrapper>
   <Hero2 />
  </Wrapper>
 )
}

const Wrapper = styled.div`
 display: grid;

 /* background-color: var(--clr-white); */

 background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1662157426/62bf2c4821e06_jp3xf4.jpg')
  no-repeat center center;
 background-size: cover;
 height: 60rem;
 width: 100%;

 @media (min-width: 576px) {
  height: 50rem;
 }

 @media only screen and (max-width: 600px) {
  height: 65rem;
 }

 @media only screen and (min-width: 600px) {
  height: 65rem;
 }

 @media only screen and (min-width: 768px) {
  height: 65rem;
 }

 @media (min-width: 992px) {
  height: 65rem;
 }

 @media (min-width: 1280px) {
  height: 65rem;
 }
`
export default HomePage
