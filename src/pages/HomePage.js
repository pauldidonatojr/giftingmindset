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

 background-color: var(--clr-white);

 height: 100%;
 width: 100%;
 padding: 2.5rem;

 @media (min-width: 576px) {
  height: 50rem;
 }

 @media only screen and (max-width: 600px) {
  height: 40rem;

 }

 @media only screen and (min-width: 600px) {
  background-color: blue;
 }

 @media only screen and (min-width: 768px) {
 }

 @media (min-width: 992px) {
 }

 @media (min-width: 1280px) {
  height: 40rem;
 }
`
export default HomePage
