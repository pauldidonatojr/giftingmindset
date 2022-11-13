import PersonIcon from '@mui/icons-material/Person'
import MailIcon from '@mui/icons-material/Mail'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import KeyIcon from '@mui/icons-material/Key'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import InputAdornment from '@mui/material/InputAdornment'
import { WhiteBorderTextField } from './StyledComponents'
import { theme } from '../Theme'
import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'

const MuiTextField = ({ type, label, onChange, value }) => {
 return (
  <WhiteBorderTextField
   type={type}
   onChange={onChange}
   value={value}
   id={`outlined-${label}`}
   label={label}
   placeholder={label}
   //    multiline
   InputProps={{
    startAdornment: (
     <InputAdornment style={{ color: '#888888' }} position="start">
      {label == 'Full Name' ? (
       <PersonIcon />
      ) : label == 'Email Address' ? (
       <MailIcon />
      ) : label == 'Mobile No' ? (
       <LocalPhoneIcon />
      ) : label == 'User ID' ? (
       <PersonAddIcon />
      ) : (label == 'Password') |
        (label == 'Current Password') |
        (label == 'New Password') |
        (label == 'Confirm Password') ? (
       <KeyIcon />
      ) : label == 'Mobile' ? (
       <CallIcon />
      ) : label == 'Email' ? (
       <EmailIcon />
      ) : label == '' ? null : (
       <AccountBalanceIcon />
      )}
     </InputAdornment>
    ),
   }}
   sx={{
    mt: '20px',
    backgroundColor: theme.palette.dark_black,
    '& .MuiInputBase-root': {
     color: 'white',
    },
   }}
  />
 )
}

export default MuiTextField
