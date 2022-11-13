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
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import LogoutIcon from '@mui/icons-material/Logout'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import WalletIcon from '@mui/icons-material/Wallet'
import {
 ManageUsersTreeview,
 GenealogyTreeview,
 SettingsTreeview,
 VouchersTreeview,
 SupportTreeview,
 WalletDataView,
} from './DashboardMenuTreeview'
import { useState } from 'react'
const AdminList = ({
 setIsLoggedIn,
 setUsersExpanded,
 setGeneExpanded,
 setOpen,
 open,
 setSettingExpanded,
 setVouchExpanded,
 setSuppExpanded,
 handleDrawerOpen,
 usersExpanded,
 geneExpanded,
 settingExpanded,
 vouchExpanded,
 suppExpanded,
 walletExpanded,
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
  // <SettingsTreeview settingExpanded={settingExpanded} />,

  <List>
   {[
    'Dashboard',
    <ManageUsersTreeview usersExpanded={usersExpanded} />,
    <GenealogyTreeview geneExpanded={geneExpanded} />,
    <WalletDataView walletExpanded={walletExpanded} />,
    'Gift History',
    'Completed Boards',
    <VouchersTreeview vouchExpanded={vouchExpanded} />,
    <SupportTreeview suppExpanded={suppExpanded} />,
    'Logout',
   ].map((text, index) => (
    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
     <ListItemButton
      onClick={() => {
       if (index == 8) {
        console.log('Logout')
        return handleLogout()
       } else if (index == 1) {
        usersExpanded.length == 0
         ? setUsersExpanded(['1'])
         : setUsersExpanded([])
        handleDrawerOpen()
       } else if (index == 2) {
        geneExpanded.length == 0 ? setGeneExpanded(['1']) : setGeneExpanded([])
        handleDrawerOpen()
       } else if (index == 3) {
        //   settingExpanded.length == 0
        //    ? setSettingExpanded(['1'])
        //    : setSettingExpanded([])
        handleDrawerOpen()
       } else if (index == 4) {
        navigate('/GiftSentHistory')
       } else if (index == 6) {
        vouchExpanded.length == 0
         ? setVouchExpanded(['1'])
         : setVouchExpanded([])
        handleDrawerOpen()
       } else if (index == 7) {
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
        <AccountTreeIcon />
       ) : index === 3 ? (
        <WalletIcon />
       ) : index === 4 ? (
        <CardGiftcardIcon />
       ) : index === 5 ? (
        <FactCheckIcon />
       ) : index === 6 ? (
        <ConfirmationNumberIcon />
       ) : index === 7 ? (
        <SupportAgentIcon />
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

export default AdminList
