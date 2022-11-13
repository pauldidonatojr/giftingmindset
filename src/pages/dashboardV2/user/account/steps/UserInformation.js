import { Typography } from '@mui/material'
import styled from 'styled-components'
import MuiTextField from '../../../../../components/Textfield'
import GenderDropdown from '../../../../../components/GenderDropdown'
import { useState } from 'react'
import { Formik } from 'formik'
import SingleButton from '../../../../../components/SingleButton'

const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
`
const UserInformation = ({ setUserData, handleNext }) => {
 const [selectedImage, setSelectedImage] = useState(null)
 const handleImageChange = (event) => {
  event.target.files && setSelectedImage(event.target.files[0])
 }

 return (
  <MainContainer>
   <Typography>User Information</Typography>
   <Formik
    initialValues={{
     full_name: '',
     gender: '',
     mobile: '',
     email: '',
    }}
    onSubmit={(values) => {
     setUserData([values])
    }}
   >
    {(props) => (
     <>
      <MuiTextField
       onChange={props.handleChange('full_name')}
       value={props.values.full_name}
       label={'Full Name'}
      />
      <GenderDropdown
       onChange={props.handleChange('gender')}
       value={props.values.gender}
      />
      <MuiTextField
       onChange={props.handleChange('mobile')}
       value={props.values.mobile}
       label={'Mobile'}
      />
      <MuiTextField
       onChange={props.handleChange('email')}
       value={props.values.email}
       label={'Email'}
      />
      <>
       {selectedImage ? (
        <div
         style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
         }}
        >
         <img
          alt="attachment"
          style={{
           width: '140px',
           height: '130px',
           borderRadius: '8px',
          }}
          src={URL.createObjectURL(selectedImage)}
         />
         <br />
         <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
       ) : (
        <>
         <label
          style={{
           color: 'grey',
           padding: '10px',
           backgroundColor: '#E0E0E0',
           width: '150px',
           textAlign: 'center',
           borderRadius: '8px',
           marginTop: '10px',
           cursor: 'pointer',
          }}
          htmlFor="file-upload"
          className="custom-file-upload"
         >
          add image +
         </label>
         <input
          style={{ display: 'none' }}
          id="file-upload"
          type="file"
          name="image"
          onChange={handleImageChange}
         />
        </>
       )}
      </>
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
export default UserInformation
