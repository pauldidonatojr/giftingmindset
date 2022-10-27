import React, { Component } from 'react'
import PW_Icon from '../assets/icons/Pw_Icon.svg'
import User_Icon from '../assets/icons/User_Icon.svg'
import Help_Icon from '../assets/icons/Help_Icon.svg'
import Logo1 from '../assets/images/GM_logo.png'
import {
 Typography,
 CircularProgress,
 Snackbar,
 Alert,
 Button,
} from '@mui/material'
import theme from '../Theme'
import Signup_Icon from '../assets/icons/Signup_Icon.svg'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
 LowerIcon,
 Error,
 LowerButtonContainerDiv,
 BackgroundDiv,
 MainColDiv,
 Logo,
 TextFieldContainerRowDiv,
 TextfieldIconContainerDiv,
 TextfieldIcon,
 InputField,
 LowerRowDiv,
 ClickTextLower,
 ClickText,
 TextFieldColumn,
} from '../components/StyledComponents'
import { Auth } from 'aws-amplify'
import { useState } from 'react'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'

const ReviewSchema = yup.object({
 UserName: yup.string().required('Please Enter Username'),
 Password: yup.string().required('Password error'),
})
const SignInScreen = ({ setIsLoggedIn }) => {
 const [openSnackBar, setOpenSnackBar] = useState(false)
 const [snackBarMessage, setSnackBarMessage] = useState('')
 const [severity, setSeverity] = useState('info')
 return (
  <BackgroundDiv>
   <MainColDiv>
    <Logo src={Logo1} />
    <Typography variant="plain_center">Login to your account</Typography>
    <Typography variant="plain_center">
     Enter your username and password to login.
    </Typography>
    <Formik
     validationSchema={ReviewSchema}
     initialValues={{
      UserName: '',
      Password: '',
     }}
     onSubmit={async (values, { resetForm }) => {
      console.log('OnSubmit click', values)
      try {
       const user = await Auth.signIn(values.UserName, values.Password)
       //  setIsLoggedIn(true)
       setSnackBarMessage('Success')
       setOpenSnackBar(true)
       setSeverity('success')
       resetForm()
      } catch (error) {
       setSnackBarMessage('Error')
       setOpenSnackBar(true)
       setSeverity('error')
       console.log('error signing in', error)
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
          onChange={props.handleChange('UserName')}
          value={props.values.UserName}
          sx={{ input: { color: 'black' } }}
          size="small"
          placeholder="Username"
         />
        </TextFieldContainerRowDiv>
        {props.errors.UserName && props.touched.UserName ? (
         <Error>{props.errors.UserName}</Error>
        ) : null}
       </TextFieldColumn>
       <TextFieldColumn>
        <TextFieldContainerRowDiv>
         <TextfieldIconContainerDiv>
          <TextfieldIcon src={PW_Icon} />
         </TextfieldIconContainerDiv>
         <InputField
          onChange={props.handleChange('Password')}
          value={props.values.Password}
          type="password"
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
        <>
         <Button
          sx={{ marginBottom: '10px' }}
          style={theme.login_Button}
          onClick={props.handleSubmit}
         >
          Sign in
         </Button>
         <Button
          sx={{ marginBottom: '10px' }}
          style={theme.login_Button}
          onClick={() => Auth.federatedSignIn()}
         >
          Sign in in with social media
         </Button>
        </>
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
    <ClickTextLower
     style={theme.typography.clicktext_lower_black}
     href="/signUp"
     underline="none"
    >
     {'New user? Sign up'}
    </ClickTextLower>
    <ClickText href="/forgotpassword" underline="none">
     {'Forgot your password?'}
    </ClickText>
   </MainColDiv>
  </BackgroundDiv>
 )
}
export default SignInScreen
