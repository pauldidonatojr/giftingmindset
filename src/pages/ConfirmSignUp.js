import React, { Component } from 'react'
import PW_Icon from '../assets/icons/Pw_Icon.svg'
import User_Icon from '../assets/icons/User_Icon.svg'
import Help_Icon from '../assets/icons/Help_Icon.svg'
import Logo1 from '../assets/images/GM_logo.png'
import {
 Typography,
 CircularProgress,
 Button,
 Snackbar,
 Alert,
} from '@mui/material'
import theme from '../Theme'
import Signup_Icon from '../assets/icons/Signup_Icon.svg'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
 LowerIcon,
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
 Error,
} from '../components/StyledComponents'
import { Auth } from 'aws-amplify'
import { useState } from 'react'

const ReviewSchema = yup.object({
 UserName: yup.string().required('Please Enter Username'),
 Code: yup.number().required(),
})
const ConfirmSignUp = ({ setIsLoggedIn }) => {
 const [openSnackBar, setOpenSnackBar] = useState(false)
 const [snackBarMessage, setSnackBarMessage] = useState('')
 const [severity, setSeverity] = useState('info')
 return (
  <BackgroundDiv>
   <MainColDiv>
    <Logo src={Logo1} />
    <Typography variant="login_blue_heading">Login to your account</Typography>
    <Typography variant="login_gray_heading">
     Enter verification code to sign up.
    </Typography>
    <Formik
     validationSchema={ReviewSchema}
     initialValues={{
      UserName: '',
      Code: '',
     }}
     onSubmit={async (values, { resetForm }) => {
      console.log('OnSubmit click', values)
      try {
       const confirmSignUp = await Auth.confirmSignUp(
        values.UserName,
        values.Code
       )
       setSnackBarMessage('Success')
       setOpenSnackBar(true)
       setSeverity('success')
       console.log('ConfirmSign up : ', confirmSignUp)
       setIsLoggedIn(true)
       resetForm()
      } catch (error) {
       setSnackBarMessage('Error')
       setOpenSnackBar(true)
       setSeverity('error')
       console.log('error confirming sign up', error)
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
       </TextFieldColumn>
       <TextFieldColumn>
        <TextFieldContainerRowDiv>
         <TextfieldIconContainerDiv>
          <TextfieldIcon src={PW_Icon} />
         </TextfieldIconContainerDiv>
         <InputField
          onChange={props.handleChange('Code')}
          value={props.values.Password}
          sx={{ input: { color: 'black' } }}
          size="small"
          placeholder="Verification code"
         />
        </TextFieldContainerRowDiv>
        {props.errors.Code && props.touched.Code ? (
         <Error>{props.errors.Code}</Error>
        ) : null}
       </TextFieldColumn>

       {!props.isSubmitting ? (
        <Button
         sx={{ marginBottom: '10px' }}
         style={theme.login_Button}
         onClick={props.handleSubmit}
        >
         Sign in
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
    <ClickText
     onClick={async () => {
      console.log('Resend verification code clicked')
      //    try {
      //     await Auth.resendSignUp();
      //     console.log('code resent successfully');
      // } catch (err) {
      //     console.log('error resending code: ', err);
      // }
     }}
     underline="none"
    >
     {'Resend verification code'}
    </ClickText>
   </MainColDiv>
   <LowerRowDiv>
    <LowerButtonContainerDiv>
     <LowerIcon src={Signup_Icon} />
     <ClickTextLower
      style={theme.typography.clicktext_lower_blue}
      href="/signUp"
      underline="none"
     >
      {'Sign up'}
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
export default ConfirmSignUp
