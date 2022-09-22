import styled from 'styled-components'
import { Typography } from '@mui/material'
import { theme } from '../../../Theme'
import Divider from '@mui/material/Divider'
import MuiTextField from '../../../components/Textfield'
const MainBackground = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 height: 100vh;
 background-color: #1e2026;
 align-items: center;
`
const HeaderRowDiv = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;
 border-bottom: 1px solid #1b1d22;
 /* background-color: red; */
`

const ContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 800px;
 justify-content: center;
`
const TextFieldContainer = styled.div`
 display: flex;
 flex-direction: column;
 height: 100%;
 width: 100%;
`
const AddUser = () => {
 return (
  <MainBackground>
   <HeaderRowDiv>
    <Typography variant="dashboard_header_text">Users</Typography>
   </HeaderRowDiv>
   {/* <Divider  light /> */}

   <ContentContainer>
    <Typography variant="dashboard_subheading">ADD NEW USER</Typography>
    <Divider light />
    <TextFieldContainer>
     <MuiTextField />
    </TextFieldContainer>
   </ContentContainer>
  </MainBackground>
 )
}

export default AddUser
