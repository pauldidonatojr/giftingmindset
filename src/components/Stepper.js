import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

export default function HorizontalLinearStepper({
 steps,
 handleNext,
 handleBack,
 activeStep,
}) {
 return (
  <Box sx={{ width: '100%' }}>
   <Stepper activeStep={activeStep} alternativeLabel>
    {steps.map((label, index) => {
     const stepProps = {}
     const labelProps = {}

     return (
      <Step key={label} {...stepProps}>
       <StepLabel {...labelProps}>{label}</StepLabel>
      </Step>
     )
    })}
   </Stepper>
  </Box>
 )
}
