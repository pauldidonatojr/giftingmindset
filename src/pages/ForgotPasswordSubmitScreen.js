import React, { Component } from 'react'
import Logo1 from '../assets/images/GM_logo.png'
import PW_Icon from '../assets/icons/Pw_Icon.svg'
import User_Icon from '../assets/icons/User_Icon.svg'
import {
 Typography,
 CircularProgress,
 Button,
 Snackbar,
 Alert,
} from '@mui/material'
import theme from '../Theme'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
 BackgroundDiv,
 MainColDiv,
 Logo,
 TextFieldContainerRowDiv,
 TextfieldIconContainerDiv,
 TextfieldIcon,
 InputField,
 ClickText,
 TextFieldColumn,
 Error,
} from '../components/StyledComponents'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ReviewSchema = yup.object({
 Email: yup.string().email().required('Please enter a valid email'),
 Code: yup.number().required(),
 NewPassword: yup.string().required('Password error'),
})
const ForgotPasswordSubmitScreen = () => {
 const [openSnackBar, setOpenSnackBar] = useState(false)
 const [snackBarMessage, setSnackBarMessage] = useState('')
 const [severity, setSeverity] = useState('info')
 let navigate = useNavigate()
 return (
  <BackgroundDiv>
   <MainColDiv>
    <Logo src={Logo1} />
    <Typography variant="plain_center">Login to your account</Typography>
    <Typography variant="plain_center">
     Enter verification code to sign up.
    </Typography>
    <Formik
     validationSchema={ReviewSchema}
     initialValues={{
      Email: '',
      Code: '',
      NewPassword: '',
     }}
     onSubmit={async (values, { resetForm }) => {
      console.log('OnSubmit click', values)
      try {
       await Auth.forgotPasswordSubmit(
        values.Email,
        values.Code,
        values.NewPassword
       )
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
       setSnackBarMessage('Success')
       setOpenSnackBar(true)
       setSeverity('success')
       resetForm()
       navigate('/signIn')
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
       <TextFieldColumn>
        <TextFieldContainerRowDiv>
         <TextfieldIconContainerDiv>
          <TextfieldIcon src={PW_Icon} />
         </TextfieldIconContainerDiv>
         <InputField
          onChange={props.handleChange('NewPassword')}
          value={props.values.NewPassword}
          type="password"
          sx={{ input: { color: 'black' } }}
          size="small"
          placeholder="New password"
         />
        </TextFieldContainerRowDiv>
        {props.errors.NewPassword && props.touched.NewPassword ? (
         <Error>{props.errors.NewPassword}</Error>
        ) : null}
       </TextFieldColumn>

       {!props.isSubmitting ? (
        <Button
         sx={{ marginBottom: '10px' }}
         style={theme.login_Button}
         onClick={props.handleSubmit}
        >
         Change Password
        </Button>
       ) : (
        <CircularProgress sx={{ alignSelf: 'center' }} />
       )}
       <ClickText
        style={theme.typography.clicktext_lower_black}
        onClick={async () => {
         console.log('Resend verification code clicked')
         console.log('Username value : ', props.values.Email)
         try {
          await Auth.forgotPassword(props.values.Email)
          setSnackBarMessage('Success')
          setOpenSnackBar(true)
          setSeverity('success')
          console.log('code resent successfully')
         } catch (err) {
          setSnackBarMessage('Error')
          setOpenSnackBar(true)
          setSeverity('error')
          console.log('error resending code: ', err)
         }
        }}
        underline="none"
       >
        {'Resend verification code'}
       </ClickText>
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
   </MainColDiv>
  </BackgroundDiv>
 )
}
export default ForgotPasswordSubmitScreen
