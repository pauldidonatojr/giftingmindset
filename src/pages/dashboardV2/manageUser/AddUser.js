import styled from 'styled-components'
import { TextField, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import MuiTextField from '../../../components/Textfield'
import CountryDropdown from '../../../components/CountryDropdown'
import GenderDropdown from '../../../components/GenderDropdown'
import HeaderRow from '../../../components/HeaderRow'
import { MainBackground } from '../../../components/StyledComponents'
import SingleButton from '../../../components/SingleButton'
import { Formik } from 'formik'

const ContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 800px;
 justify-content: center;
`
const TextFieldContainer = styled.div`
 display: flex;
 flex-direction: column;
 height: fit-content;
 width: 100%;
`

const AddUser = () => {
 return (
  <MainBackground>
   <HeaderRow heading={'Users'} />
   {/* <Divider  light /> */}
   <ContentContainer>
    <Typography sx={{ marginY: '15px' }} variant="dashboard_subheading">
     ADD NEW USER
    </Typography>
    <Divider light />
    <TextFieldContainer>
     <Formik
      initialValues={{
       full_name: '',
       email_address: '',
       mobile_no: '',
       user_id: '',
       password: '',
       united_bank: '',
       chime: '',
       cash_app: '',
       zelle: '',
       venmo: '',
       country: '',
       gender: '',
      }}
      onSubmit={(values) => console.log(values)}
     >
      {(props) => (
       <>
        <MuiTextField
         onChange={props.handleChange('full_name')}
         value={props.values.full_name}
         label={'Full Name'}
        />
        <MuiTextField
         onChange={props.handleChange('email_address')}
         value={props.values.email_address}
         label={'Email Address'}
        />
        <MuiTextField
         onChange={props.handleChange('mobile_no')}
         value={props.values.mobile_no}
         label={'Mobile No'}
        />
        <MuiTextField
         onChange={props.handleChange('user_id')}
         value={props.values.user_id}
         label={'User ID'}
        />
        <MuiTextField
         onChange={props.handleChange('password')}
         value={props.values.password}
         label={'Password'}
         type={'password'}
        />
        <MuiTextField
         onChange={props.handleChange('united_bank')}
         value={props.values.united_bank}
         label={'Enter Your One United Bank Details'}
        />
        <MuiTextField
         onChange={props.handleChange('chime')}
         value={props.values.chime}
         label={'Enter Your Chime Details'}
        />
        <MuiTextField
         onChange={props.handleChange('cash_app')}
         value={props.values.cash_app}
         label={'Enter Your Cash App Details'}
        />
        <MuiTextField
         onChange={props.handleChange('zelle')}
         value={props.values.zelle}
         label={'Enter Your Zelle Details'}
        />
        <MuiTextField
         onChange={props.handleChange('venmo')}
         value={props.values.venmo}
         label={'Enter Your Venmo Details'}
        />
        <CountryDropdown
         onChange={props.handleChange('country')}
         value={props.values.country}
        />
        <GenderDropdown
         onChange={props.handleChange('gender')}
         value={props.values.gender}
        />
        <SingleButton
         type="submit"
         onClick={props.submitForm}
         ButtonText={'Add New User'}
        />
       </>
      )}
     </Formik>
    </TextFieldContainer>
   </ContentContainer>
  </MainBackground>
 )
}

export default AddUser
