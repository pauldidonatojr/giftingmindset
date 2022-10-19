import React, { Component } from 'react'
import styled from 'styled-components'
import { Typography, Snackbar, Alert } from '@mui/material'
import Button from '@mui/material/Button'
import theme from '../Theme'
import Envelope_Open_Icon from '../assets/icons/Envelope_Open_Icon.svg'
import Help_Icon from '../assets/icons/Help_Icon.svg'
import Logo1 from '../assets/images/GM_logo.png'
import User_Icon2 from '../assets/icons/User_Icon2.svg'
import { useState } from 'react'

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
 flex-direction: row;
 width: 95%;
 height: fit-content;
 justify-content: space-between;
 margin-top: 15px;
`

const ReviewSchema = yup.object({
 UserName: yup.string().required('Please enter correct Username'),
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
    <Typography variant="login_blue_heading">Forgot your Password?</Typography>
    <Typography variant="login_gray_heading">
     Enter your username below to reset your password.
    </Typography>
    <Formik
     validationSchema={ReviewSchema}
     initialValues={{
      UserName: '',
     }}
     onSubmit={async (values, { resetForm }) => {
      console.log('OnSubmit click', values)
      try {
       await Auth.forgotPassword(values.UserName)
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
           onChange={props.handleChange('UserName')}
           value={props.values.UserName}
           size="small"
           placeholder="User name"
           sx={{ input: { color: 'black' } }}
          />
         </TextFieldContainerRowDiv>
         {props.errors.UserName && props.touched.UserName ? (
          <Error>{props.errors.UserName}</Error>
         ) : null}
        </TextFieldColumn>
        <ButtonRowDiv>
         <ClickButton
          onClick={props.handleSubmit}
          style={theme.Submit_Button_blue}
         >
          Submit
         </ClickButton>
         <ClickButton style={theme.Submit_Button_gray}>Cancel</ClickButton>
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
export default ForgotPasswordScreen
