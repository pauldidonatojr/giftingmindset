import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from 'styled-components'
import { theme } from '../Theme'

const WhiteBorderTextField = styled(Box)`
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

const GenderDropdown = ({ onChange, value }) => {
 return (
  <WhiteBorderTextField
   sx={{
    mt: '10px',
    backgroundColor: theme.palette.dark_black,
    '& .MuiInputBase-root': {
     color: 'white',
    },
   }}
  >
   <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
    <Select
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     value={value}
     label="Gender"
     onChange={onChange}
    >
     <MenuItem value={'Male'}>Male</MenuItem>
     <MenuItem value={'Female'}>Female</MenuItem>
    </Select>
   </FormControl>
  </WhiteBorderTextField>
 )
}
export default GenderDropdown
