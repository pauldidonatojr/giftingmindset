import React from 'react'
import PW_Icon from '../assets/icons/Pw_Icon.svg'
import User_Icon from '../assets/icons/User_Icon.svg'
import Logo1 from '../assets/images/GM_logo.png'
import axios from 'axios'
import {
 Typography,
 CircularProgress,
 Snackbar,
 Alert,
 Button,
} from '@mui/material'
import theme from '../Theme'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
 Error,
 BackgroundDiv,
 MainColDiv,
 Logo,
 TextFieldContainerRowDiv,
 TextfieldIconContainerDiv,
 TextfieldIcon,
 InputField,
 ClickTextLower,
 ClickText,
 TextFieldColumn,
} from '../components/StyledComponents'
import { socialSignInStyle } from './SignUpScreen'
import { Auth } from 'aws-amplify'
import { useState } from 'react'
import Facebook from '../assets/images/facebookbtn.png'
import Google from '../assets/images/googlebtn.png'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'

const ReviewSchema = yup.object({
 Email: yup.string().email().required('Please enter a valid email'),
 Password: yup.string().required('Password error'),
})
const SignInScreen = ({ setIsLoggedIn }) => {
 const [openSnackBar, setOpenSnackBar] = useState(false)
 const [snackBarMessage, setSnackBarMessage] = useState('')
 const [severity, setSeverity] = useState('info')
 const getUserFromDb = async (email, password) => {
  try {
   const dbResponse = await axios.post(
    'https://thegiftingmindset.com/gfm_demo1/includes/react_auth.php',
    {
     type: 'AffiliateLogin',
     email: email,
     password: password,
    },
    {
     headers: {},
    }
   )
   console.log('success db : ', dbResponse)
   return dbResponse
  } catch (err) {
   console.log('DB error :', err)
  }
 }
 return (
  <BackgroundDiv>
   <MainColDiv>
    <Logo src={Logo1} />
    <Typography variant="plain_center">Login to your account</Typography>
    <Typography variant="plain_center">
     Enter your Email and password to login.
    </Typography>
    <Formik
     validationSchema={ReviewSchema}
     initialValues={{
      Email: '',
      Password: '',
     }}
     onSubmit={async (values, { resetForm }) => {
      console.log('OnSubmit click', values)
      try {
       const user = await Auth.signIn(values.Email, values.Password)
       await getUserFromDb(values.Email, values.Password)
       setIsLoggedIn(true)
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
       <ClickText
        style={theme.typography.clicktext_lower_black}
        href="/forgotpassword"
        underline="none"
       >
        {'Forgot your password?'}
       </ClickText>

       {!props.isSubmitting ? (
        <>
         <Button
          sx={{ marginBottom: '10px' }}
          style={theme.login_Button}
          onClick={props.handleSubmit}
         >
          Sign in
         </Button>
        </>
       ) : (
        <CircularProgress sx={{ alignSelf: 'center', margin: '10px' }} />
       )}
      </>
     )}
    </Formik>
    {'Or'}
    <>
     <img
      alt=""
      src={Facebook}
      style={socialSignInStyle}
      onClick={() =>
       Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Facebook,
       })
      }
     />
     <img
      alt=""
      src={Google}
      style={socialSignInStyle}
      onClick={() =>
       Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
       })
      }
     />
    </>
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
   </MainColDiv>
  </BackgroundDiv>
 )
}
export default SignInScreen
