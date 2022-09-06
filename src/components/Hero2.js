import styled from 'styled-components'
import { FaWindowClose } from 'react-icons/fa'
const Hero2 = () => {
 return (
  <Wrapper>
   <div className="section-center">
    <div className="content">
     <img
      src="https://res.cloudinary.com/elpawl-llc/image/upload/v1662156689/gfm_hllgaz.png"
      alt="images"
      className="gfm"
     />
     <h2 class="title">
      <span class="title-word title-word-1">The</span>
      <span class="title-word title-word-2">Gifting</span>
      <span class="title-word title-word-3">Mindset</span>
     </h2>
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 min-height: 40rem;
 display: grid;
 align-items: center;
 justify-content: center;
 height: 100%;

 /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1650559874/generic_4_nzua4y.jpg')
  no-repeat center center;
 background-size: cover; */

 /*------------------------------------------------------------------------------------------------*/

 .section-center {
  width: 100%;
  transition: var(--transition);
  background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1662157426/62bf2c4821e06_jp3xf4.jpg')
   no-repeat center center;
  background-size: cover;
 }
 .content {
  display: grid;
  justify-content: center;
  text-align: center;
  color: #fff;
  transition: var(--transition);
  background-color: rgb(35, 31, 32);
  p {
   color: #fff;
   font-size: 1.5rem;
   text-transform: capitalize;
  }
 }
 .contact-form {
  display: grid;
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
 @media (min-width: 576px) {
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

  .content {
   height: 40vh;
  }
 }
 @media only screen and (max-width: 600px) {
  min-height: 20rem;
  .title {
   font-size: 5.5vw;
  }
  .gfm {
   width: 210px;
   height: 150px;
  }
  .section-center {
   border-radius: 2%;
   height: 45vh;
   width: 40vh;
   padding: 2.5rem;
   margin-bottom: 3rem;
  }

  .content {
   height: 35vh;
  }
 }
 @media only screen and (min-width: 600px) {
  .gfm {
   width: 315px;
   height: 225px;
  }
  .section-center {
   display: grid;
   justify-content: center;
   align-items: center;

   border-radius: 2%;
   height: 50vh;
   width: 40vh;
   padding: 2.5rem;
   margin-bottom: 15rem;
   /* background-color: red; */
   /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1652788878/brlogo_vtatak.jpg')
    no-repeat center center;
   background-size: cover; */
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
   height: 55vh;
   width: 55vh;
   grid-gap: 1.5rem;
   border-radius: 2%;
   padding: 2.5rem;
   /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1652788878/brlogo_vtatak.jpg')
    no-repeat center center;
   background-size: cover; */
  }

  .content {
   height: 45vh;
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
   height: 65vh;
   width: 60vh;
   border-radius: 2%;
   /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1652788878/brlogo_vtatak.jpg')
    no-repeat center center;
   background-size: cover; */
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
 }
 @media (min-width: 1280px) {
  .gfm {
   width: 365px;
   height: 245px;
  }
  .section-center {
   margin-top: 2rem;
   height: 60vh;
   width: 90vh;
   display: grid;
   align-items: flex-start;
   border-radius: 2%;
   background-color: red;
   /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1652788878/brlogo_vtatak.jpg')
    no-repeat center center; */
   background-size: cover;
   margin-bottom: 15rem;
  }

  .content {
   width: 50vh;
   height: 50vh;
  }
  .title {
   font-size: 2.7vw;
  }
 }
`

export default Hero2
