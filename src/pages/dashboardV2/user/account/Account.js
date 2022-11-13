import styled from 'styled-components'
import { MainBackground } from '../../../../components/StyledComponents'
import HeaderRow from '../../../../components/HeaderRow'
import { Box, Button, Typography } from '@mui/material'
import HorizontalLinearStepper from '../../../../components/Stepper'
import UserInformation from './steps/UserInformation'
import AddressInformation from './steps/AddressInformation'
import { useState } from 'react'
import PaymentInformation from './steps/PaymentInformation'
import { useEffect } from 'react'

const ContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`

const step = ['User information', 'Address Information', 'Payment Information']
const Account = () => {
 const [activeStep, setActiveStep] = useState(0)
 const [userData, setUserData] = useState([])
 useEffect(() => {
  console.log('Account page', userData)
 }, [userData])

 const handleNext = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1)
 }

 const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1)
 }
 return (
  <MainBackground>
   <HeaderRow heading={'Profile'} />
   <ContentContainer>
    <Typography sx={{ marginY: '15px' }} variant="dashboard_subheading">
     Profile
    </Typography>
    <>
     <HorizontalLinearStepper
      handleBack={handleBack}
      handleNext={handleNext}
      activeStep={activeStep}
      steps={step}
     />
     {activeStep === 0 ? (
      <UserInformation setUserData={setUserData} handleNext={handleNext} />
     ) : activeStep === 1 ? (
      <AddressInformation
       userData={userData}
       setUserData={setUserData}
       handleNext={handleNext}
      />
     ) : activeStep === 2 ? (
      <PaymentInformation userData={userData} setUserData={setUserData} />
     ) : (
      console.log(userData)
     )}
    </>
   </ContentContainer>
  </MainBackground>
 )
}
export default Account
