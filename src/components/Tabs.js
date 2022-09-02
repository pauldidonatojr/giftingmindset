import React from 'react'
import styled from 'styled-components'
function Tabs() {
 return (
  <Wrapper>
   <ul>
    <li>list 1 </li>
    <li>list 2 </li>
    <li>list 3 </li>
    <li>list 4 </li>
   </ul>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 width: 100%;
 background-color: rgb(35, 31, 32);
 ul {
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
 }
`
export default Tabs
