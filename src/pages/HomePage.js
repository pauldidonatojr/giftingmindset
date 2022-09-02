import React from 'react'
import Hero from '../components/Hero.js'
import styled from 'styled-components'
function HomePage() {
 return (
  <Wrapper>
   <Hero />
  </Wrapper>
 )
}
const Wrapper = styled.div`
 display: grid;

 background-color: var(--clr-white);

 height: 100%;
 width: 100%;
`
export default HomePage
