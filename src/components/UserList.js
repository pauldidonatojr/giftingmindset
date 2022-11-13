import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeMaxIcon from '@mui/icons-material/HomeMax'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import SettingsIcon from '@mui/icons-material/Settings'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import KeyIcon from '@mui/icons-material/Key'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import LogoutIcon from '@mui/icons-material/Logout'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import { UserSupportTreeview } from './DashboardMenuTreeview'
import { GenealogyTreeview, SupportTreeview } from './DashboardMenuTreeview'
import { useState } from 'react'
const UserList = ({
 setIsLoggedIn,
 setUsersExpanded,
 setGeneExpanded,
 setOpen,
 open,
 setSettingExpanded,
 setSuppExpanded,
 handleDrawerOpen,
 geneExpanded,
 suppExpanded,
}) => {
 const navigate = useNavigate()

 const handleLogout = async () => {
  try {
   await Auth.signOut()
   setIsLoggedIn(false)
   navigate('/landing')
  } catch (error) {
   console.log('error signing out: ', error)
  }
 }
 return (
  <List>
   {[
    'Dashboard',
    'My Account',
    'Activate Request',
    <GenealogyTreeview geneExpanded={geneExpanded} />,
    'Gift Received History',
    'Gift Sent History',
    <UserSupportTreeview suppExpanded={suppExpanded} />,
    'Change Password',
    'Logout',
   ].map((text, index) => (
    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
     <ListItemButton
      onClick={() => {
       if (index == 8) {
        console.log('Logout')
        return handleLogout()
       } else if (index == 1) {
        navigate('/account')
       } else if (index == 2) {
        navigate('/activaterequest')
       } else if (index == 4) {
        navigate('/giftreceievedhistory')
       } else if (index == 5) {
        navigate('/giftsenthistory')
       } else if (index == 3) {
        geneExpanded.length == 0 ? setGeneExpanded(['1']) : setGeneExpanded([])
        handleDrawerOpen()
       } else if (index == 7) {
        navigate('/changepassword')
       } else if (index == 6) {
        suppExpanded.length == 0 ? setSuppExpanded(['1']) : setSuppExpanded([])
        handleDrawerOpen()
       } else if (index == 0) {
        return navigate('/dashboard')
       }
      }}
      sx={{
       minHeight: 48,
       justifyContent: open ? 'initial' : 'center',
       px: 2.5,
      }}
     >
      <ListItemIcon
       sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
       }}
      >
       {index === 0 ? (
        <HomeMaxIcon />
       ) : index === 1 ? (
        <PeopleAltIcon />
       ) : index === 2 ? (
        <FactCheckIcon />
       ) : index === 3 ? (
        <AccountTreeIcon />
       ) : index === 4 ? (
        <CardGiftcardIcon />
       ) : index === 5 ? (
        <CardGiftcardIcon />
       ) : index === 6 ? (
        <SupportAgentIcon />
       ) : index === 7 ? (
        <KeyIcon />
       ) : (
        <LogoutIcon />
       )}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
     </ListItemButton>
    </ListItem>
   ))}
  </List>
 )
}

export default UserList
