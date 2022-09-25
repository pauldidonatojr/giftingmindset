import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from 'styled-components'
import { theme } from '../Theme'
import { ContentCopy } from '@mui/icons-material'

const WhiteBorderTextField = styled(Box)`
 width: 50%;
 & label {
  color: white;
 }
 & label.Mui-focused {
  color: white;
 }
 & .MuiOutlinedInput-root {
  &.Mui-focused fieldset {
   border-color: white;
  }
 }
`

const BlockedUserDropdown = () => {
 const [blockedUser, setBlockedUser] = React.useState('')

 const handleChange = (event) => {
  setBlockedUser(event.target.value)
 }

 return (
  <WhiteBorderTextField
   sx={{
    mt: '10px',
    '& .MuiInputBase-root': {
     color: 'white',
    },
   }}
  >
   <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Select Blocked User</InputLabel>
    <Select
     sx={{
      backgroundColor: theme.palette.dark_black,
     }}
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={blockedUser}
     label="Select Blocked User"
     onChange={handleChange}
    >
     <MenuItem value={10}>Block</MenuItem>
     <MenuItem value={20}>Unblock</MenuItem>
    </Select>
   </FormControl>
  </WhiteBorderTextField>
 )
}
export default BlockedUserDropdown
