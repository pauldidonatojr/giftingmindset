import styled from 'styled-components'
import { Button } from '@mui/material'
import { theme } from '../Theme'

const AddButton = styled(Button)`
 width: 200px;
 align-self: center;
`

const SingleButton = ({ ButtonText, onClick }) => {
 return (
  <AddButton
   onClick={onClick}
   sx={{ marginY: '20px' }}
   style={theme.add_user_btn}
   variant="contained"
  >
   {ButtonText}
  </AddButton>
 )
}

export default SingleButton
