import { Typography } from '@mui/material'
import styled from 'styled-components'
import { Formik } from 'formik'
import SingleButton from '../../../../../components/SingleButton'
import MuiTextField from '../../../../../components/Textfield'

const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
`
const AddressInformation = ({ userData, setUserData, handleNext }) => {
 return (
  <MainContainer>
   <Typography>Address Information</Typography>
   <Formik
    initialValues={{
     Address: '',
     Country: '',
     State: '',
     City: '',
     Zipcode: '',
    }}
    onSubmit={(values) => {
     setUserData((prev) => [...prev, values])
    }}
   >
    {(props) => (
     <>
      <MuiTextField
       onChange={props.handleChange('Address')}
       value={props.values.Address}
       label={'Address'}
      />
      <MuiTextField
       onChange={props.handleChange('Country')}
       value={props.values.Country}
       label={'Country'}
      />
      <MuiTextField
       onChange={props.handleChange('State')}
       value={props.values.State}
       label={'State'}
      />

      <MuiTextField
       onChange={props.handleChange('City')}
       value={props.values.City}
       label={'City'}
      />
      <MuiTextField
       onChange={props.handleChange('Zipcode')}
       value={props.values.Zipcode}
       label={'Zipcode'}
      />
      <SingleButton
       ButtonText={'Next'}
       onClick={() => {
        handleNext()
        props.handleSubmit()
       }}
      />
     </>
    )}
   </Formik>
  </MainContainer>
 )
}
export default AddressInformation
