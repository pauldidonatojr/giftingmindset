import styled from 'styled-components'
import { FaWindowClose } from 'react-icons/fa'
import Three from './three'
const Hero = () => {
 return (
  <Wrapper>
   <div className="section-center">
    {/* <div className="canvas">
     <Three widthC={window.innerWidth} heightC={window.innerHeight}></Three>
    </div> */}
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 display: grid;
 align-items: center;
 justify-content: center;
 background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1650559874/generic_4_nzua4y.jpg')
  no-repeat center center;
 background-size: cover;

 /*------------------------------------------------------------------------------------------------*/

 /* @media only screen and (max-width: 600px) {
  .particles-container,
  .particles {
    display: none;
  }
}

@media only screen and (min-width: 600px) {
  .particles-container,
  .particles {
    display: block;
  }
} */

 .canvas {
  position: fixed;
  left: 0px;
 }

 .section-center {
  transition: var(--transition);

  background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1662157426/62bf2c4821e06_jp3xf4.jpg')
   no-repeat center center;
  background-size: cover;
  z-index: 1;
 }
 .content {
  position: absolute;
  display: grid;
  justify-content: center;
  text-align: center;
  color: #fff;
  transition: var(--transition);
  background-color: rgb(35, 31, 32);
  pointer-events: none;
  p {
   color: #fff;
   font-size: 1.5rem;
   text-transform: capitalize;
  }
 }
 .contact-form {
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .form-input,
 .submit-btn {
  border: 2px solid var(--clr-black);
 }
 .form-input {
  color: var(--clr-black);
 }
 .submit-btn {
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
 }
 .form-input::placeholder {
  color: var(--clr-black);
  text-transform: capitalize;
 }
 .submit-btn {
  background: var(--clr-black);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);
  color: var(--clr-grey-9);
 }
 .submit-btn:hover {
  color: var(--clr-white);
 }
 .btn {
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
 .btn,
 .btn-white,
 .btn-primary {
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
 .btn:hover {
  background: var(--clr-bcg);
  color: var(--clr-font);
 }
 /* @media (min-width: 576px) {
  .gfm {
   width: 315px;
   height: 225px;
  }
  .section-center {
   border-radius: 2%;
   height: 50vh;
   width: 45vh;
   padding: 2.5rem;
  }
  .header {
   font-size: 1.65rem;
   margin-bottom: 5rem;
  }
  .submit-btn {
   font-size: 1.2rem;
   padding: 0.55rem 1rem;
  }
  .content {
   height: 40vh;
  }
 }
 @media only screen and (max-width: 600px) {
  min-height: 15rem;
  .title {
   font-size: 2.7vw;
  }
  .gfm {
   width: 225px;
   height: 165px;
  }
  .section-center {
   border-radius: 2%;
   height: 50vh;
   width: 45vh;
   padding: 2.5rem;
  }
  .header {
   font-size: 1.65rem;
   margin-bottom: 5rem;
  }
  .submit-btn {
   font-size: 1.2rem;
   padding: 0.55rem 1rem;
  }
  .content {
   height: 40vh;
  }
 }
 @media only screen and (min-width: 600px) {
  .gfm {
   width: 315px;
   height: 225px;
   pointer-events: none;
  }
  .section-center {
   display: grid;
   justify-content: center;
   align-items: center;

   border-radius: 2%;
   height: 60vh;
   width: 50vh;
   padding: 2.5rem;
  }
  .header {
   font-size: 1.85rem;
   margin-bottom: 12rem;
  }
  .submit-btn {
   font-size: 1.2rem;
   padding: 0.55rem 1rem;
  }
  .content {
   height: 40vh;
   width: 40vh;
   display: grid;
   justify-content: center;
   align-items: center;
   border-radius: 4%;
  }
 }
 @media only screen and (min-width: 768px) and (max-width: 790px) {
  min-height: 35rem;
  .section-center {
   background-color: lightblue;
   height: 65vh;
   width: 55vh;
   grid-gap: 1.5rem;
   border-radius: 2%;
   padding: 2.5rem;
  }
  .header {
   font-size: 2.65rem;
  }
  .content {
   height: 40vh;
  }
  .submit-btn {
   font-size: 1.25rem;
   padding: 0.75rem 1.75rem;
  }
 }
 @media only screen and (min-width: 860px) and (max-width: 992px) {
  min-height: 40rem;
  p {
   margin-bottom: 0;
  }
  .section-center {
   background-color: yellow;
   height: 60vh;
   width: 60vh;
   border-radius: 2%;
   padding: 5.5rem;
  }
  .content {
   height: 50vh;
  }
  .submit-btn {
   font-size: 1.25rem;
   padding: 1rem 1.75rem;
  }
  .modal-container {
   height: 70vh;
  }
  .header {
   font-size: 3rem;
  }
 } */
 /* @media (min-width: 1280px) {
  .gfm {
   width: 100%;
   height: 100%;
  }
  .section-center {
    display: grid;
    align-items: flex-start;
    border-radius: 20px;
    background-color: red;
    background-size: cover;
  }

  .header {
  }
  .content {
  }
  .title {
   font-size: 2.7vw;
  }
 } */
`

export default Hero
