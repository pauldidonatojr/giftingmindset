// import React, { Component } from "react";

import PW_Icon from '../assets/icons/Pw_Icon.svg'
import User_Icon from '../assets/icons/User_Icon.svg'
import Envelope_Close from '../assets/icons/User_Icon.svg'
import User_Icon2 from '../assets/icons/User_Icon2.svg'
import Help_Icon from '../assets/icons/Help_Icon.svg'
import Logo1 from '../assets/images/GM_logo.png'

import {
 Typography,
 Button,
 CircularProgress,
 Snackbar,
 Alert,
} from '@mui/material'
import theme from '../Theme'
import {
 LowerIcon,
 LowerButtonContainerDiv,
 BackgroundDiv,
 MainColDiv,
 TextFieldContainerRowDiv,
 TextfieldIconContainerDiv,
 TextfieldIcon,
 InputField,
 LowerRowDiv,
 ClickTextLower,
 Logo,
 ClickText,
 TextFieldColumn,
 Error,
} from '../components/StyledComponents'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ReviewSchema = yup.object({
 Email: yup.string().email().required('Please enter a valid email'),
 Password: yup.string().required('Password error'),
})

const SignUpScreen = () => {
 const [openSnackBar, setOpenSnackBar] = useState(false)
 const [snackBarMessage, setSnackBarMessage] = useState('')
 const [severity, setSeverity] = useState('info')
 let navigate = useNavigate()
 return (
  <BackgroundDiv>
   <MainColDiv>
    <Logo src={Logo1} />
    <Typography variant="login_blue_heading">
     Create your account for FREE!
    </Typography>
    <Typography variant="login_gray_heading">
     Enter your information below to get started.
    </Typography>
    <Formik
     validationSchema={ReviewSchema}
     initialValues={{
      Email: '',
      Password: '',
     }}
     onSubmit={async (values, { resetForm }) => {
      try {
       const { user } = await Auth.signUp({
        username: values.Email,
        password: values.Password,
       })
       setSnackBarMessage('Success')
       setOpenSnackBar(true)
       setSeverity('success')
       console.log('sign up screen: ', user)
       resetForm()
       navigate('/confirmSignUp')
      } catch (error) {
       setSnackBarMessage('Error')
       setOpenSnackBar(true)
       setSeverity('error')
       console.log('error signing up:', error)
      } finally {
       setSeverity('info')
      }
     }}
    >
     {(props) => (
      <>
       <TextFieldColumn>
        <TextFieldContainerRowDiv>
         <TextfieldIconContainerDiv>
          <TextfieldIcon src={User_Icon} />
         </TextfieldIconContainerDiv>
         <InputField
          onChange={props.handleChange('Email')}
          value={props.values.Email}
          sx={{ input: { color: 'black' } }}
          size="small"
          placeholder="Email"
         />
        </TextFieldContainerRowDiv>
        {props.errors.Email && props.touched.Email ? (
         <Error>{props.errors.Email}</Error>
        ) : null}
       </TextFieldColumn>
       <TextFieldColumn>
        <TextFieldContainerRowDiv>
         <TextfieldIconContainerDiv>
          <TextfieldIcon src={PW_Icon} />
         </TextfieldIconContainerDiv>
         <InputField
          type="password"
          onChange={props.handleChange('Password')}
          value={props.values.Password}
          sx={{ input: { color: 'black' } }}
          size="small"
          placeholder="Password"
         />
        </TextFieldContainerRowDiv>
        {props.errors.Password && props.touched.Password ? (
         <Error>{props.errors.Password}</Error>
        ) : null}
       </TextFieldColumn>

       {!props.isSubmitting ? (
        <Button
         sx={{ marginBottom: '10px' }}
         style={theme.login_Button}
         type="submit"
         onClick={props.submitForm}
        >
         Create Account
        </Button>
       ) : (
        <CircularProgress sx={{ alignSelf: 'center', margin: '10px' }} />
       )}
      </>
     )}
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
    <Typography variant="login_gray_heading">
     By creating an account, you agree to our
     <ClickText href="#" underline="none">
      {' Terms & Privacy Policy.'}
     </ClickText>
    </Typography>
   </MainColDiv>
   <LowerRowDiv>
    <LowerButtonContainerDiv>
     <LowerIcon src={User_Icon2} />
     <ClickTextLower
      style={theme.typography.clicktext_lower_blue}
      href="/signIn"
      underline="none"
     >
      {'Login'}
     </ClickTextLower>
    </LowerButtonContainerDiv>
    <LowerButtonContainerDiv>
     <LowerIcon src={Help_Icon} />
     <ClickTextLower
      style={theme.typography.clicktext_lower_blue}
      href="#"
      underline="none"
     >
      {'Help'}
     </ClickTextLower>
    </LowerButtonContainerDiv>
   </LowerRowDiv>
  </BackgroundDiv>
 )
}
export default SignUpScreen
