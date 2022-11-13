import { Typography } from '@mui/material'
import styled from 'styled-components'
import MuiTextField from '../../../components/Textfield'
import { Formik } from 'formik'
import SingleButton from '../../../components/SingleButton'
import { MainBackground } from '../../../components/StyledComponents'
const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`
const ChangePassword = () => {
 return (
  <MainBackground>
   <MainContainer>
    <Typography>Change Password</Typography>
    <Formik
     initialValues={{
      current_password: '',
      new_password: '',
      confirm_password: '',
     }}
     onSubmit={(values) => {}}
    >
     {(props) => (
      <>
       <MuiTextField
        onChange={props.handleChange('current_password')}
        value={props.values.current_password}
        label={'Current Password'}
       />

       <MuiTextField
        onChange={props.handleChange('new_password')}
        value={props.values.new_password}
        label={'New Password'}
       />
       <MuiTextField
        onChange={props.handleChange('confirm_password')}
        value={props.values.confirm_password}
        label={'Confirm Password'}
       />

       <SingleButton
        ButtonText={'Change password'}
        onClick={() => {
         props.handleSubmit()
        }}
       />
      </>
     )}
    </Formik>
   </MainContainer>
  </MainBackground>
 )
}
export default ChangePassword
