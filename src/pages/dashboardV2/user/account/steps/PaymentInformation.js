import { Typography } from '@mui/material'
import styled from 'styled-components'
import MuiTextField from '../../../../../components/Textfield'
import { Formik } from 'formik'
import SingleButton from '../../../../../components/SingleButton'

const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
`
const PaymentInformation = ({ setUserData, userData }) => {
 return (
  <MainContainer>
   <Typography>Payment Information</Typography>
   <Formik
    initialValues={{
     United: '',
     Chime: '',
     Cash: '',
     Zelle: '',
     Venmo: '',
     Paypal: '',
    }}
    onSubmit={(values) => {
     setUserData((prev) => [...prev, values])
    }}
   >
    {(props) => (
     <>
      <MuiTextField
       onChange={props.handleChange('United')}
       value={props.values.United}
       label={'One United Bank'}
      />
      <MuiTextField
       onChange={props.handleChange('Chime')}
       value={props.values.Chime}
       label={'Chime'}
      />
      <MuiTextField
       onChange={props.handleChange('Cash')}
       value={props.values.Cash}
       label={'Cash App'}
      />

      <MuiTextField
       onChange={props.handleChange('Zelle')}
       value={props.values.Zelle}
       label={'Zelle'}
      />
      <MuiTextField
       onChange={props.handleChange('Venmo')}
       value={props.values.Venmo}
       label={'Venmo'}
      />
      <MuiTextField
       onChange={props.handleChange('Paypal')}
       value={props.values.Paypal}
       label={'Paypal'}
      />
      <SingleButton onClick={props.handleSubmit} ButtonText={'Finish'} />
     </>
    )}
   </Formik>
  </MainContainer>
 )
}
export default PaymentInformation
