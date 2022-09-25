import styled from 'styled-components'
import { Typography } from '@mui/material'

const HeaderRowDiv = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;
 border-bottom: 1px solid #1b1d22;
 /* background-color: red; */
`
const HeaderRow = ({ heading }) => {
 return (
  <HeaderRowDiv>
   <Typography sx={{ marginY: '10px' }} variant="dashboard_header_text">
    {heading}
   </Typography>
  </HeaderRowDiv>
 )
}

export default HeaderRow
