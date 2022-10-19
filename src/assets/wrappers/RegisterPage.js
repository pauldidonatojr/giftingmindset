import styled from 'styled-components'

const Wrapper = styled.section`
 display: grid;
 align-items: center;
 .logo {
  display: block;
  margin: 0 auto;
  margin-bottom: 1.38rem;
 }
 form {
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-gap: 10px;
  margin: auto 0;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.2);
  z-index: 1;
  h2 {
   margin-bottom: 5px;
   text-align: center;
   text-shadow: 0 4px 16px #fff;
   font-size: 30px;
   font-weight: 100;
  }
  fieldset {
   margin: 0;
   background-color: #fff;
   border: none;
   border-radius: 5px;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
   legend {
    padding: 5px;
    background-color: #fff;
    border-radius: 5px;
    font-size: large;
   }
  }
  ul {
        margin: 0;
        padding: 0;
        li {
          display: grid;
          align-items: center;
          margin: 10px;
          a {
            color: #02c;
          }
          em {
            grid-column: span 2;
            text-align: center;
            padding: 5px;
          }
          label {
            text-align: left;
            padding-bottom: 2px;
          }
          input {
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            /* &:hover {
              border: 1px solid #aaf;
            } */
          }
        }
      }
 }
 /* .form {
  @import url('https://fonts.googleapis.com/css?family=Jura:400');
  * {
   font-family: Jura, Arial;
   font-weight: 300;
  }
  body {
   margin: 0;
   padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
   margin: 0;
  }
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-gap: 10px;
  margin: auto 0;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.2);
 }

 fieldset {
  margin: 0;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
 }

 h3 {
  text-align: center;
 }
 legend {
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
 } */
 /* p {
  margin: 0;
  margin-top: 1rem;
  text-align: center;
 }
 .btn {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  color: grey;
  &:hover {
   background-color: #eef;
   border: 1px solid #aaf;
  }
 }
 .member-btn {
  background: transparent;
  border: transparent;
  color: var(--primary-500);
  cursor: pointer;
  letter-spacing: var(--letterSpacing);
 } */
 button {
      padding: 10px;
      border:1px solid rgba(0,0,0,0);
      border-radius: 5px;
      background: #fff;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      width: 100%;
      margin-top: 5px;
      &:hover {
        background-color: #eef;
        border: 1px solid #aaf;
      }
    }
@media only screen and (min-width: 420px) {
  form {
    h2 {
      font-size: 40px;
    }
    fieldset {
      ul {
        li {
          grid-template-columns: 100px 1fr;
          label {
            padding-right: 10px;
            padding-bottom: 0;
            text-align: right !important;
          }
        }
      }
    }
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}
`
export default Wrapper
