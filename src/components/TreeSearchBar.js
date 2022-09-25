import styled from 'styled-components'
import FormControl from '@mui/material/FormControl'
import { OutlinedInput } from '@mui/material'
import { theme } from '../Theme'
const WhiteBorderFormControl = styled(FormControl)`
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
const TreeSearchBar = () => {
 return (
  <WhiteBorderFormControl
   sx={{
    width: '50%',
    '& .MuiInputBase-root': {
     color: 'white',
    },
   }}
  >
   <OutlinedInput
    size="small"
    sx={{
     mt: '20px',
     backgroundColor: theme.palette.dark_black,
    }}
    placeholder="Search"
   />
  </WhiteBorderFormControl>
 )
}
export default TreeSearchBar
