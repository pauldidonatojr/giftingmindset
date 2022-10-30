import React, { Component } from 'react'
import styled from 'styled-components'
import { Typography, Snackbar, Alert } from '@mui/material'
import Button from '@mui/material/Button'
import theme from '../Theme'
import Envelope_Open_Icon from '../assets/icons/Envelope_Open_Icon.svg'
import Logo1 from '../assets/images/GM_logo.png'
import { useState } from 'react'

import {
 BackgroundDiv,
 MainColDiv,
 Logo,
 TextFieldContainerRowDiv,
 TextfieldIconContainerDiv,
 TextfieldIcon,
 InputField,
 TextFieldColumn,
 Error,
} from '../components/StyledComponents'
import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

const ClickButton = styled(Button)``
const ButtonRowDiv = styled.div`
 display: flex;
 flex-direction: column;
 width: 95%;
 height: fit-content;
 align-items: center;
 margin-top: 15px;
`

const ReviewSchema = yup.object({
 Email: yup.string().email().required('Please enter a valid email'),
})
const ForgotPasswordScreen = () => {
 const [openSnackBar, setOpenSnackBar] = useState(false)
 const [snackBarMessage, setSnackBarMessage] = useState('')
 const [severity, setSeverity] = useState('info')
 let navigate = useNavigate()
 return (
  <BackgroundDiv>
   <MainColDiv>
    <Logo src={Logo1} />
    <Typography variant="plain_center">Forgot your Password?</Typography>
    <Typography variant="plain_center">
     Enter your Email below to reset your password.
    </Typography>
    <Formik
     validationSchema={ReviewSchema}
     initialValues={{
      Email: '',
     }}
     onSubmit={async (values, { resetForm }) => {
      console.log('OnSubmit click', values)
      try {
       await Auth.forgotPassword(values.Email)
       // .then((data) => console.log(data))
       // .catch((err) => console.log(err));
       setSnackBarMessage('Success')
       setOpenSnackBar(true)
       setSeverity('success')
       resetForm()
       navigate('/forgotpasswordsubmit')
      } catch (error) {
       setSnackBarMessage('Error')
       setOpenSnackBar(true)
       setSeverity('error')
       console.log('Forgot Password error : ', error)
      } finally {
       setSeverity('info')
      }
     }}
    >
     {(props) => {
      return (
       <>
        <TextFieldColumn>
         <TextFieldContainerRowDiv>
          <TextfieldIconContainerDiv>
           <TextfieldIcon src={Envelope_Open_Icon} />
          </TextfieldIconContainerDiv>
          <InputField
           onChange={props.handleChange('Email')}
           value={props.values.Email}
           size="small"
           placeholder="Email"
           sx={{ input: { color: 'black' } }}
          />
         </TextFieldContainerRowDiv>
         {props.errors.Email && props.touched.Email ? (
          <Error>{props.errors.Email}</Error>
         ) : null}
        </TextFieldColumn>
        <ButtonRowDiv>
         <ClickButton onClick={props.handleSubmit} style={theme.login_Button}>
          Submit
         </ClickButton>
         <ClickButton
          onClick={() => {
           props.resetForm()
          }}
          style={theme.login_Button}
         >
          Cancel
         </ClickButton>
        </ButtonRowDiv>
       </>
      )
     }}
    </Formik>
    <Snackbar
     open={openSnackBar}
     autoHideDuration={4000}
     message={snackBarMessage}
     onClose={() => setOpenSnackBar(false)}
     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
     <Alert
      onClose={() => setOpenSnackBar(false)}
      severity={severity}
      sx={{ width: '100%' }}
     >
      {snackBarMessage}
     </Alert>
    </Snackbar>
   </MainColDiv>
  </BackgroundDiv>
 )
}
export default ForgotPasswordScreen
